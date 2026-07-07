export type CouponStatus = "active" | "scheduled" | "expired";

export type Coupon = {
  id: number;
  code: string;
  discountPct: number | null;
  validFrom: string | null;
  validUntil: string | null;
  maxRedemptions: number | null;
  redemptionCount: number;
};

export function toDateOnlyString(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function todayString(): string {
  return toDateOnlyString(new Date());
}

export function addDays(dateOnly: string, days: number): string {
  const [y, m, d] = dateOnly.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  return toDateOnlyString(date);
}

/** Normalizes a Metabase date value ("2026-07-07" or an ISO timestamp) to "YYYY-MM-DD". */
export function toDateOnly(value: unknown): string | null {
  if (value == null) {
    return null;
  }
  const text = String(value).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(text) ? text : null;
}

/**
 * The coupons table has no active flag; a coupon is active exactly when
 * today falls inside its [valid_from, valid_until] window.
 */
export function couponStatus(
  validFrom: string | null,
  validUntil: string | null,
  today: string,
): CouponStatus {
  if (validFrom && validFrom > today) {
    return "scheduled";
  }
  if (validUntil && validUntil < today) {
    return "expired";
  }
  return "active";
}

export function formatDate(dateOnly: string | null): string {
  if (!dateOnly) {
    return "—";
  }
  const [y, m, d] = dateOnly.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
