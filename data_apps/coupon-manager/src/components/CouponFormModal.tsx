import { useState } from "react";
import { useAction } from "@metabase/embedding-sdk-react";
import type {
  ActionKindFromDataAppSchema,
  ActionParametersFromDataAppSchema,
} from "@metabase/embedding-sdk-react/data-app";

import schema from "../metabase.data";
import {
  addDays,
  couponStatus,
  todayString,
  type Coupon,
} from "../lib/coupons";

const couponsModel = schema.models.couponsModel;
const createAction = couponsModel.actions.createCoupon;
const updateAction = couponsModel.actions.updateCoupon;

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
} as const;

const labelStyle = { fontSize: 13, fontWeight: 600, color: "#374151" } as const;

const inputStyle = {
  padding: "8px 10px",
  border: "1px solid #d1d5db",
  borderRadius: 8,
  fontSize: 14,
  fontFamily: "inherit",
} as const;

export default function CouponFormModal({
  coupon,
  onClose,
  onSaved,
}: {
  /** Coupon being edited, or null to create a new one. */
  coupon: Coupon | null;
  onClose: () => void;
  onSaved: () => Promise<void>;
}) {
  const isEdit = coupon !== null;
  const today = todayString();

  const [code, setCode] = useState(coupon?.code ?? "");
  const [discountPct, setDiscountPct] = useState(
    coupon?.discountPct != null ? String(coupon.discountPct) : "",
  );
  const [validFrom, setValidFrom] = useState(coupon?.validFrom ?? today);
  const [validUntil, setValidUntil] = useState(
    coupon?.validUntil ?? addDays(today, 30),
  );
  const [maxRedemptions, setMaxRedemptions] = useState(
    coupon?.maxRedemptions != null ? String(coupon.maxRedemptions) : "",
  );
  const [isFormValid, setIsFormValid] = useState(isEdit);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const create = useAction<
    ActionParametersFromDataAppSchema<typeof createAction>,
    ActionKindFromDataAppSchema<typeof createAction>
  >(createAction.id);

  const update = useAction<
    ActionParametersFromDataAppSchema<typeof updateAction>,
    ActionKindFromDataAppSchema<typeof updateAction>
  >(updateAction.id);

  const isExecuting = create.isExecuting || update.isExecuting || isRefreshing;
  const error = isEdit ? update.error : create.error;

  const status = couponStatus(validFrom || null, validUntil || null, today);
  const isActive = status === "active";

  function toggleActive() {
    if (isActive) {
      setValidUntil(addDays(today, -1));
      return;
    }
    if (status === "scheduled") {
      setValidFrom(today);
    }
    if (!validUntil || validUntil < today) {
      setValidUntil(addDays(today, 30));
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parameters = {
      code,
      discount_pct: Number(discountPct),
      valid_from: validFrom,
      valid_until: validUntil,
      max_redemptions: maxRedemptions === "" ? null : Number(maxRedemptions),
    };
    try {
      if (isEdit) {
        await update.execute({ id: coupon.id, ...parameters });
      } else {
        await create.execute(parameters);
      }
      setIsRefreshing(true);
      try {
        await onSaved();
      } finally {
        setIsRefreshing(false);
      }
      onClose();
    } catch {
      // The failure is surfaced from the hook's error state below.
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
        }
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(17, 24, 39, 0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <form
        onSubmit={onSubmit}
        onChange={(e) => setIsFormValid(e.currentTarget.checkValidity())}
        style={{
          background: "white",
          borderRadius: 12,
          padding: 24,
          width: 420,
          maxWidth: "calc(100vw - 32px)",
          maxHeight: "calc(100vh - 32px)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 18 }}>
            {isEdit ? `Edit coupon ${coupon.code}` : "New coupon"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              border: "none",
              background: "none",
              fontSize: 20,
              cursor: "pointer",
              color: "#6b7280",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="coupon-code">
            Code
          </label>
          <input
            id="coupon-code"
            type="text"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="coupon-discount">
            Discount (%)
          </label>
          <input
            id="coupon-discount"
            type="number"
            required
            value={discountPct}
            onChange={(e) => setDiscountPct(e.target.value)}
            style={inputStyle}
          />
        </div>

        {isEdit ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: "10px 12px",
              background: "#f9fafb",
              borderRadius: 8,
            }}
          >
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
                Active
              </div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>
                Derived from the validity window — toggling adjusts the dates
                below.
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={isActive}
              onClick={toggleActive}
              style={{
                width: 44,
                height: 24,
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                background: isActive ? "#4D96FF" : "#d1d5db",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 3,
                  left: isActive ? 23 : 3,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "white",
                  transition: "left 0.15s",
                }}
              />
            </button>
          </div>
        ) : null}

        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ ...fieldStyle, flex: 1 }}>
            <label style={labelStyle} htmlFor="coupon-valid-from">
              Valid from
            </label>
            <input
              id="coupon-valid-from"
              type="date"
              required
              value={validFrom}
              onChange={(e) => setValidFrom(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ ...fieldStyle, flex: 1 }}>
            <label style={labelStyle} htmlFor="coupon-valid-until">
              Valid until
            </label>
            <input
              id="coupon-valid-until"
              type="date"
              required
              value={validUntil}
              onChange={(e) => setValidUntil(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle} htmlFor="coupon-max-redemptions">
            Max redemptions <span style={{ fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            id="coupon-max-redemptions"
            type="number"
            value={maxRedemptions}
            onChange={(e) => setMaxRedemptions(e.target.value)}
            style={inputStyle}
          />
        </div>

        {error ? (
          <pre
            style={{
              whiteSpace: "pre-wrap",
              margin: 0,
              padding: 10,
              background: "#fef2f2",
              color: "#b91c1c",
              borderRadius: 8,
              fontSize: 12,
              overflowX: "auto",
            }}
          >
            {error.data.message ?? "Action failed."}
          </pre>
        ) : null}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: 4,
          }}
        >
          <button
            type="button"
            onClick={onClose}
            disabled={isExecuting}
            style={{
              padding: "8px 14px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              background: "white",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isExecuting || !isFormValid}
            style={{
              padding: "8px 14px",
              borderRadius: 8,
              border: "none",
              background: "#4D96FF",
              color: "white",
              cursor: isExecuting || !isFormValid ? "default" : "pointer",
              opacity: isExecuting || !isFormValid ? 0.6 : 1,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {isExecuting
              ? "Saving…"
              : isEdit
                ? "Save changes"
                : "Create coupon"}
          </button>
        </div>
      </form>
    </div>
  );
}
