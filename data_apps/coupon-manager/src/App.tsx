import { useMemo, useState } from "react";
import {
  aggregations,
  breakout,
  orderBy,
  useMetabaseQuery,
} from "@metabase/embedding-sdk-react/data-app";

import CouponFormModal from "./components/CouponFormModal";
import CouponsTable from "./components/CouponsTable";
import TopRedeemedPanel from "./components/TopRedeemedPanel";
import { toDateOnly, type Coupon } from "./lib/coupons";
import schema from "./metabase.data";

const couponsTable = schema.tables.coupons;
const redemptionsTable = schema.tables.couponRedemptions;

const cardStyle = {
  background: "white",
  borderRadius: 12,
  border: "1px solid #e5e7eb",
  padding: 20,
} as const;

type ModalState =
  | { kind: "closed" }
  | { kind: "create" }
  | { kind: "edit"; coupon: Coupon };

export default function App() {
  const [modal, setModal] = useState<ModalState>({ kind: "closed" });
  const [panelKey, setPanelKey] = useState(0);

  const couponsQuery = useMetabaseQuery({
    source: couponsTable,
    fields: [
      couponsTable.fields.id,
      couponsTable.fields.code,
      couponsTable.fields.discountPct,
      couponsTable.fields.validFrom,
      couponsTable.fields.validUntil,
      couponsTable.fields.maxRedemptions,
    ],
    orderBys: [orderBy(couponsTable.fields.validFrom, "desc")],
  });

  const redemptionCountsQuery = useMetabaseQuery({
    source: redemptionsTable,
    aggregations: [aggregations.count()],
    breakouts: [breakout(redemptionsTable.fields.couponId)],
  });

  const coupons = useMemo((): Coupon[] => {
    const countByCouponId = new Map<number, number>();
    for (const row of redemptionCountsQuery.data?.rows ?? []) {
      const couponId = row[redemptionsTable.fields.couponId.name];
      if (typeof couponId === "number" && typeof row.count === "number") {
        countByCouponId.set(couponId, row.count);
      }
    }

    const result: Coupon[] = [];
    for (const row of couponsQuery.data?.rows ?? []) {
      const id = row[couponsTable.fields.id.name];
      if (typeof id !== "number") {
        continue;
      }
      const code = row[couponsTable.fields.code.name];
      const discountPct = row[couponsTable.fields.discountPct.name];
      const maxRedemptions = row[couponsTable.fields.maxRedemptions.name];
      result.push({
        id,
        code: typeof code === "string" ? code : String(code ?? ""),
        discountPct: typeof discountPct === "number" ? discountPct : null,
        validFrom: toDateOnly(row[couponsTable.fields.validFrom.name]),
        validUntil: toDateOnly(row[couponsTable.fields.validUntil.name]),
        maxRedemptions:
          typeof maxRedemptions === "number" ? maxRedemptions : null,
        redemptionCount: countByCouponId.get(id) ?? 0,
      });
    }
    return result;
  }, [couponsQuery.data, redemptionCountsQuery.data]);

  const isLoading = couponsQuery.isLoading || redemptionCountsQuery.isLoading;
  const loadError = couponsQuery.error ?? redemptionCountsQuery.error;

  async function refreshAfterSave() {
    await Promise.all([
      couponsQuery.refetch(),
      redemptionCountsQuery.refetch(),
    ]);
    setPanelKey((key) => key + 1);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        padding: 24,
        fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        color: "#1f2937",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 22 }}>Coupon Manager</h1>
          <p style={{ margin: "4px 0 0", color: "#6b7280", fontSize: 14 }}>
            Manage promo coupons and see which ones get redeemed.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setModal({ kind: "create" })}
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            border: "none",
            background: "#4D96FF",
            color: "white",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          + New coupon
        </button>
      </header>

      {loadError ? (
        <pre
          style={{
            whiteSpace: "pre-wrap",
            padding: 12,
            background: "#fef2f2",
            color: "#b91c1c",
            borderRadius: 8,
            fontSize: 12,
          }}
        >
          {String(loadError)}
        </pre>
      ) : null}

      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <section style={{ ...cardStyle, flex: "2 1 560px", minWidth: 0 }}>
          <h2 style={{ margin: "0 0 12px", fontSize: 16 }}>All coupons</h2>
          <CouponsTable
            coupons={coupons}
            isLoading={isLoading}
            onEdit={(coupon) => setModal({ kind: "edit", coupon })}
          />
        </section>

        <section style={{ ...cardStyle, flex: "1 1 360px", minWidth: 0 }}>
          <h2 style={{ margin: "0 0 12px", fontSize: 16 }}>
            Top redeemed coupons
          </h2>
          <TopRedeemedPanel key={panelKey} />
        </section>
      </div>

      {modal.kind !== "closed" ? (
        <CouponFormModal
          coupon={modal.kind === "edit" ? modal.coupon : null}
          onClose={() => setModal({ kind: "closed" })}
          onSaved={refreshAfterSave}
        />
      ) : null}
    </div>
  );
}
