import { useState } from "react";

import {
  couponStatus,
  formatDate,
  todayString,
  type Coupon,
  type CouponStatus,
} from "../lib/coupons";
import Spinner from "./Spinner";

const statusStyles: Record<CouponStatus, { color: string; background: string }> = {
  active: { color: "#047857", background: "#ecfdf5" },
  scheduled: { color: "#1d4ed8", background: "#eff6ff" },
  expired: { color: "#6b7280", background: "#f3f4f6" },
};

const statusLabels: Record<CouponStatus, string> = {
  active: "Active",
  scheduled: "Scheduled",
  expired: "Expired",
};

const filterOptions = ["all", "active", "scheduled", "expired"] as const;
type StatusFilter = (typeof filterOptions)[number];

const thStyle = {
  textAlign: "left",
  padding: "10px 12px",
  fontSize: 12,
  fontWeight: 600,
  color: "#6b7280",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  borderBottom: "1px solid #e5e7eb",
  position: "sticky",
  top: 0,
  background: "white",
} as const;

const tdStyle = {
  padding: "10px 12px",
  fontSize: 14,
  color: "#1f2937",
  borderBottom: "1px solid #f3f4f6",
  whiteSpace: "nowrap",
} as const;

export default function CouponsTable({
  coupons,
  isLoading,
  onEdit,
}: {
  coupons: Coupon[];
  isLoading: boolean;
  onEdit: (coupon: Coupon) => void;
}) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const today = todayString();

  if (isLoading) {
    return <Spinner label="Loading coupons…" />;
  }

  const visibleCoupons =
    statusFilter === "all"
      ? coupons
      : coupons.filter(
          (c) => couponStatus(c.validFrom, c.validUntil, today) === statusFilter,
        );

  return (
    <div>
      <div style={{ display: "flex", gap: 6, padding: "0 0 12px" }}>
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setStatusFilter(option)}
            style={{
              padding: "5px 12px",
              borderRadius: 999,
              border: "1px solid",
              borderColor: statusFilter === option ? "#4D96FF" : "#d1d5db",
              background: statusFilter === option ? "#EAF4FF" : "white",
              color: statusFilter === option ? "#1d4ed8" : "#374151",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            {option === "all" ? "All" : statusLabels[option]}
          </button>
        ))}
      </div>

      {visibleCoupons.length === 0 ? (
        <div style={{ padding: 32, textAlign: "center", color: "#6b7280" }}>
          {coupons.length === 0
            ? "No coupons yet — create the first one."
            : "No coupons match this filter."}
        </div>
      ) : (
        <div style={{ maxHeight: 520, overflowY: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>Code</th>
                <th style={thStyle}>Status</th>
                <th style={{ ...thStyle, textAlign: "right" }}>Discount</th>
                <th style={thStyle}>Valid from</th>
                <th style={thStyle}>Valid until</th>
                <th style={{ ...thStyle, textAlign: "right" }}>Redemptions</th>
                <th style={thStyle} />
              </tr>
            </thead>
            <tbody>
              {visibleCoupons.map((coupon) => {
                const status = couponStatus(
                  coupon.validFrom,
                  coupon.validUntil,
                  today,
                );
                return (
                  <tr key={coupon.id}>
                    <td style={{ ...tdStyle, fontWeight: 600 }}>
                      {coupon.code}
                    </td>
                    <td style={tdStyle}>
                      <span
                        style={{
                          ...statusStyles[status],
                          padding: "3px 10px",
                          borderRadius: 999,
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        {statusLabels[status]}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, textAlign: "right" }}>
                      {coupon.discountPct != null
                        ? `${coupon.discountPct}%`
                        : "—"}
                    </td>
                    <td style={tdStyle}>{formatDate(coupon.validFrom)}</td>
                    <td style={tdStyle}>{formatDate(coupon.validUntil)}</td>
                    <td style={{ ...tdStyle, textAlign: "right" }}>
                      {coupon.maxRedemptions != null
                        ? `${coupon.redemptionCount} / ${coupon.maxRedemptions}`
                        : coupon.redemptionCount}
                    </td>
                    <td style={{ ...tdStyle, textAlign: "right" }}>
                      <button
                        type="button"
                        onClick={() => onEdit(coupon)}
                        style={{
                          padding: "5px 12px",
                          borderRadius: 8,
                          border: "1px solid #d1d5db",
                          background: "white",
                          color: "#374151",
                          fontSize: 13,
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
