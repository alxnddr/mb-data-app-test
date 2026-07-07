const questions = { } as const;

const models = {
  couponsModel: {
    kind: "model",
    key: "couponsModel",
    id: 205,
    name: "Coupons Model",
    columns: [
      // Display name: ID
      // Base type: type/Integer
      // Semantic type: type/PK
      {
        type: "column",
        name: "id",
        jsType: "number"
      },
      // Display name: Code
      // Base type: type/Text
      {
        type: "column",
        name: "code",
        jsType: "string"
      },
      // Display name: Discount Pct
      // Base type: type/Integer
      // Semantic type: type/Discount
      {
        type: "column",
        name: "discount_pct",
        jsType: "number"
      },
      // Display name: Valid From
      // Base type: type/Date
      {
        type: "column",
        name: "valid_from",
        jsType: "Date"
      },
      // Display name: Valid Until
      // Base type: type/Date
      {
        type: "column",
        name: "valid_until",
        jsType: "Date"
      },
      // Display name: Max Redemptions
      // Base type: type/Integer
      {
        type: "column",
        name: "max_redemptions",
        jsType: "number"
      }
    ],
    display: "table",
    actions: {
      createCoupon: {
        kind: "action",
        key: "createCoupon",
        id: 1,
        name: "Create Coupon",
        type: "implicit",
        parameters: [
          {
            slug: "code",
            displayName: "Code",
            jsType: "string",
            required: true
          },
          {
            slug: "discount_pct",
            displayName: "Discount Pct",
            jsType: "number",
            required: true
          },
          {
            slug: "valid_from",
            displayName: "Valid From",
            jsType: "Date",
            required: true
          },
          {
            slug: "valid_until",
            displayName: "Valid Until",
            jsType: "Date",
            required: true
          },
          {
            slug: "max_redemptions",
            displayName: "Max Redemptions",
            jsType: "number"
          }
        ],
        entityId: "3q0OBYbqwb8aSCFYXcW0L",
        implicitKind: "row/create"
      },
      updateCoupon: {
        kind: "action",
        key: "updateCoupon",
        id: 2,
        name: "Update Coupon",
        type: "implicit",
        parameters: [
          {
            slug: "id",
            displayName: "ID",
            jsType: "number",
            required: true
          },
          {
            slug: "code",
            displayName: "Code",
            jsType: "string",
            required: true
          },
          {
            slug: "discount_pct",
            displayName: "Discount Pct",
            jsType: "number",
            required: true
          },
          {
            slug: "valid_from",
            displayName: "Valid From",
            jsType: "Date",
            required: true
          },
          {
            slug: "valid_until",
            displayName: "Valid Until",
            jsType: "Date",
            required: true
          },
          {
            slug: "max_redemptions",
            displayName: "Max Redemptions",
            jsType: "number"
          }
        ],
        entityId: "LMjAcJ1ANRSFQUax4icSJ",
        implicitKind: "row/update"
      }
    }
  }
} as const;

const tables = {
  // Database: neondb
  // Schema: public
  addresses: {
    type: "table",
    id: 182,
    name: "Addresses",
    fields: {
      // Display name: City
      // Semantic type: type/City
      city: {
        type: "column",
        name: "city",
        sourceName: "addresses",
        jsType: "string",
        fieldId: 1753,
        tableId: 182,
        baseType: "type/Text"
      },
      // Display name: Country Code
      // Semantic type: type/Country
      countryCode: {
        type: "column",
        name: "country_code",
        sourceName: "addresses",
        jsType: "string",
        fieldId: 1756,
        tableId: 182,
        baseType: "type/Text"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "addresses",
        jsType: "number",
        fieldId: 1750,
        tableId: 182,
        baseType: "type/BigInteger"
      },
      // Display name: Is Default
      isDefault: {
        type: "column",
        name: "is_default",
        sourceName: "addresses",
        jsType: "boolean",
        fieldId: 1757,
        tableId: 182,
        baseType: "type/Boolean"
      },
      // Display name: Line1
      line1: {
        type: "column",
        name: "line1",
        sourceName: "addresses",
        jsType: "string",
        fieldId: 1752,
        tableId: 182,
        baseType: "type/Text"
      },
      // Display name: Postal Code
      // Semantic type: type/ZipCode
      postalCode: {
        type: "column",
        name: "postal_code",
        sourceName: "addresses",
        jsType: "string",
        fieldId: 1755,
        tableId: 182,
        baseType: "type/Text"
      },
      // Display name: Region
      // Semantic type: type/State
      region: {
        type: "column",
        name: "region",
        sourceName: "addresses",
        jsType: "string",
        fieldId: 1754,
        tableId: 182,
        baseType: "type/Text"
      },
      // Display name: User ID
      // Semantic type: type/FK
      userId: {
        type: "column",
        name: "user_id",
        sourceName: "addresses",
        jsType: "number",
        fieldId: 1751,
        tableId: 182,
        baseType: "type/BigInteger"
      }
    }
  },
  // Database: neondb
  // Schema: public
  // Table: cart_items
  cartItems: {
    type: "table",
    id: 188,
    name: "Cart Items",
    fields: {
      // Display name: Cart ID
      // Semantic type: type/FK
      cartId: {
        type: "column",
        name: "cart_id",
        sourceName: "cart_items",
        jsType: "number",
        fieldId: 1759,
        tableId: 188,
        baseType: "type/BigInteger"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "cart_items",
        jsType: "number",
        fieldId: 1758,
        tableId: 188,
        baseType: "type/BigInteger"
      },
      // Display name: Product ID
      // Semantic type: type/FK
      productId: {
        type: "column",
        name: "product_id",
        sourceName: "cart_items",
        jsType: "number",
        fieldId: 1760,
        tableId: 188,
        baseType: "type/BigInteger"
      },
      // Display name: Quantity
      // Semantic type: type/Quantity
      quantity: {
        type: "column",
        name: "quantity",
        sourceName: "cart_items",
        jsType: "number",
        fieldId: 1761,
        tableId: 188,
        baseType: "type/Integer"
      }
    }
  },
  // Database: neondb
  // Schema: public
  carts: {
    type: "table",
    id: 181,
    name: "Carts",
    fields: {
      // Display name: Created At
      // Semantic type: type/CreationTimestamp
      createdAt: {
        type: "column",
        name: "created_at",
        sourceName: "carts",
        jsType: "Date",
        fieldId: 1765,
        tableId: 181,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "carts",
        jsType: "number",
        fieldId: 1762,
        tableId: 181,
        baseType: "type/BigInteger"
      },
      // Display name: Status
      // Semantic type: type/Category
      status: {
        type: "column",
        name: "status",
        sourceName: "carts",
        jsType: "string",
        fieldId: 1764,
        tableId: 181,
        baseType: "type/Text"
      },
      // Display name: Updated At
      // Semantic type: type/UpdatedTimestamp
      updatedAt: {
        type: "column",
        name: "updated_at",
        sourceName: "carts",
        jsType: "Date",
        fieldId: 1766,
        tableId: 181,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: User ID
      // Semantic type: type/FK
      userId: {
        type: "column",
        name: "user_id",
        sourceName: "carts",
        jsType: "number",
        fieldId: 1763,
        tableId: 181,
        baseType: "type/BigInteger"
      }
    }
  },
  // Database: neondb
  // Schema: public
  categories: {
    type: "table",
    id: 184,
    name: "Categories",
    fields: {
      // Display name: Created At
      // Semantic type: type/CreationTimestamp
      createdAt: {
        type: "column",
        name: "created_at",
        sourceName: "categories",
        jsType: "Date",
        fieldId: 1771,
        tableId: 184,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "categories",
        jsType: "number",
        fieldId: 1767,
        tableId: 184,
        baseType: "type/Integer"
      },
      // Display name: Name
      // Semantic type: type/Name
      name: {
        type: "column",
        name: "name",
        sourceName: "categories",
        jsType: "string",
        fieldId: 1769,
        tableId: 184,
        baseType: "type/Text"
      },
      // Display name: Parent ID
      // Semantic type: type/FK
      parentId: {
        type: "column",
        name: "parent_id",
        sourceName: "categories",
        jsType: "number",
        fieldId: 1768,
        tableId: 184,
        baseType: "type/Integer"
      },
      // Display name: Slug
      slug: {
        type: "column",
        name: "slug",
        sourceName: "categories",
        jsType: "string",
        fieldId: 1770,
        tableId: 184,
        baseType: "type/Text"
      }
    }
  },
  // Database: neondb
  // Schema: public
  // Table: coupon_redemptions
  couponRedemptions: {
    type: "table",
    id: 187,
    name: "Coupon Redemptions",
    fields: {
      // Display name: Coupon ID
      // Semantic type: type/FK
      couponId: {
        type: "column",
        name: "coupon_id",
        sourceName: "coupon_redemptions",
        jsType: "number",
        fieldId: 1773,
        tableId: 187,
        baseType: "type/Integer"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "coupon_redemptions",
        jsType: "number",
        fieldId: 1772,
        tableId: 187,
        baseType: "type/BigInteger"
      },
      // Display name: Order ID
      // Semantic type: type/FK
      orderId: {
        type: "column",
        name: "order_id",
        sourceName: "coupon_redemptions",
        jsType: "number",
        fieldId: 1774,
        tableId: 187,
        baseType: "type/BigInteger"
      },
      // Display name: Redeemed At
      redeemedAt: {
        type: "column",
        name: "redeemed_at",
        sourceName: "coupon_redemptions",
        jsType: "Date",
        fieldId: 1775,
        tableId: 187,
        baseType: "type/DateTimeWithLocalTZ"
      }
    }
  },
  // Database: neondb
  // Schema: public
  // Table: coupon_redemptions_enriched
  couponRedemptionsEnriched: {
    type: "table",
    id: 185,
    name: "Coupon Redemptions Enriched",
    fields: {
      // Display name: Country Code
      // Semantic type: type/Country
      countryCode: {
        type: "column",
        name: "country_code",
        sourceName: "coupon_redemptions_enriched",
        jsType: "string",
        fieldId: 1800,
        tableId: 185,
        baseType: "type/Text"
      },
      // Display name: Coupon Code
      couponCode: {
        type: "column",
        name: "coupon_code",
        sourceName: "coupon_redemptions_enriched",
        jsType: "string",
        fieldId: 1780,
        tableId: 185,
        baseType: "type/Text"
      },
      // Display name: Coupon ID
      couponId: {
        type: "column",
        name: "coupon_id",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1779,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: Coupon Lifetime Days
      couponLifetimeDays: {
        type: "column",
        name: "coupon_lifetime_days",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1785,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: Days Since Coupon Start
      daysSinceCouponStart: {
        type: "column",
        name: "days_since_coupon_start",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1796,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: Days Until Expiry At Redemption
      daysUntilExpiryAtRedemption: {
        type: "column",
        name: "days_until_expiry_at_redemption",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1797,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: Discount Amount Cents
      // Semantic type: type/Discount
      discountAmountCents: {
        type: "column",
        name: "discount_amount_cents",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1793,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: Discount Pct
      // Semantic type: type/Discount
      discountPct: {
        type: "column",
        name: "discount_pct",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1781,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: Is First Order For User
      isFirstOrderForUser: {
        type: "column",
        name: "is_first_order_for_user",
        sourceName: "coupon_redemptions_enriched",
        jsType: "boolean",
        fieldId: 1802,
        tableId: 185,
        baseType: "type/Boolean"
      },
      // Display name: Is Within Valid Window
      isWithinValidWindow: {
        type: "column",
        name: "is_within_valid_window",
        sourceName: "coupon_redemptions_enriched",
        jsType: "boolean",
        fieldId: 1795,
        tableId: 185,
        baseType: "type/Boolean"
      },
      // Display name: Max Redemptions
      maxRedemptions: {
        type: "column",
        name: "max_redemptions",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1784,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: Order ID
      orderId: {
        type: "column",
        name: "order_id",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1786,
        tableId: 185,
        baseType: "type/BigInteger"
      },
      // Display name: Order Placed At
      orderPlacedAt: {
        type: "column",
        name: "order_placed_at",
        sourceName: "coupon_redemptions_enriched",
        jsType: "Date",
        fieldId: 1788,
        tableId: 185,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: Order Status
      // Semantic type: type/Category
      orderStatus: {
        type: "column",
        name: "order_status",
        sourceName: "coupon_redemptions_enriched",
        jsType: "string",
        fieldId: 1787,
        tableId: 185,
        baseType: "type/Text"
      },
      // Display name: Redeemed At
      redeemedAt: {
        type: "column",
        name: "redeemed_at",
        sourceName: "coupon_redemptions_enriched",
        jsType: "Date",
        fieldId: 1777,
        tableId: 185,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: Redemption Date
      redemptionDate: {
        type: "column",
        name: "redemption_date",
        sourceName: "coupon_redemptions_enriched",
        jsType: "Date",
        fieldId: 1778,
        tableId: 185,
        baseType: "type/Date"
      },
      // Display name: Redemption ID
      redemptionId: {
        type: "column",
        name: "redemption_id",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1776,
        tableId: 185,
        baseType: "type/BigInteger"
      },
      // Display name: Revenue After Discount Cents
      // Semantic type: type/Discount
      revenueAfterDiscountCents: {
        type: "column",
        name: "revenue_after_discount_cents",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1794,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: Shipping Cents
      shippingCents: {
        type: "column",
        name: "shipping_cents",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1791,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: Subtotal Cents
      subtotalCents: {
        type: "column",
        name: "subtotal_cents",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1789,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: Tax Cents
      taxCents: {
        type: "column",
        name: "tax_cents",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1790,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: Total Cents
      totalCents: {
        type: "column",
        name: "total_cents",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1792,
        tableId: 185,
        baseType: "type/Integer"
      },
      // Display name: User Created At
      // Semantic type: type/CreationTimestamp
      userCreatedAt: {
        type: "column",
        name: "user_created_at",
        sourceName: "coupon_redemptions_enriched",
        jsType: "Date",
        fieldId: 1801,
        tableId: 185,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: User Email
      // Semantic type: type/Email
      userEmail: {
        type: "column",
        name: "user_email",
        sourceName: "coupon_redemptions_enriched",
        jsType: "string",
        fieldId: 1799,
        tableId: 185,
        baseType: "type/Text"
      },
      // Display name: User ID
      userId: {
        type: "column",
        name: "user_id",
        sourceName: "coupon_redemptions_enriched",
        jsType: "number",
        fieldId: 1798,
        tableId: 185,
        baseType: "type/BigInteger"
      },
      // Display name: Valid From
      validFrom: {
        type: "column",
        name: "valid_from",
        sourceName: "coupon_redemptions_enriched",
        jsType: "Date",
        fieldId: 1782,
        tableId: 185,
        baseType: "type/Date"
      },
      // Display name: Valid Until
      validUntil: {
        type: "column",
        name: "valid_until",
        sourceName: "coupon_redemptions_enriched",
        jsType: "Date",
        fieldId: 1783,
        tableId: 185,
        baseType: "type/Date"
      }
    }
  },
  // Database: neondb
  // Schema: public
  coupons: {
    type: "table",
    id: 190,
    name: "Coupons",
    fields: {
      // Display name: Code
      code: {
        type: "column",
        name: "code",
        sourceName: "coupons",
        jsType: "string",
        fieldId: 1804,
        tableId: 190,
        baseType: "type/Text"
      },
      // Display name: Discount Pct
      // Semantic type: type/Discount
      discountPct: {
        type: "column",
        name: "discount_pct",
        sourceName: "coupons",
        jsType: "number",
        fieldId: 1805,
        tableId: 190,
        baseType: "type/Integer"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "coupons",
        jsType: "number",
        fieldId: 1803,
        tableId: 190,
        baseType: "type/Integer"
      },
      // Display name: Max Redemptions
      maxRedemptions: {
        type: "column",
        name: "max_redemptions",
        sourceName: "coupons",
        jsType: "number",
        fieldId: 1808,
        tableId: 190,
        baseType: "type/Integer"
      },
      // Display name: Valid From
      validFrom: {
        type: "column",
        name: "valid_from",
        sourceName: "coupons",
        jsType: "Date",
        fieldId: 1806,
        tableId: 190,
        baseType: "type/Date"
      },
      // Display name: Valid Until
      validUntil: {
        type: "column",
        name: "valid_until",
        sourceName: "coupons",
        jsType: "Date",
        fieldId: 1807,
        tableId: 190,
        baseType: "type/Date"
      }
    }
  },
  // Database: neondb
  // Schema: public
  inventory: {
    type: "table",
    id: 191,
    name: "Inventory",
    fields: {
      // Display name: Product ID
      // Semantic type: type/FK
      productId: {
        type: "column",
        name: "product_id",
        sourceName: "inventory",
        jsType: "number",
        fieldId: 1809,
        tableId: 191,
        baseType: "type/BigInteger"
      },
      // Display name: Quantity
      // Semantic type: type/Quantity
      quantity: {
        type: "column",
        name: "quantity",
        sourceName: "inventory",
        jsType: "number",
        fieldId: 1810,
        tableId: 191,
        baseType: "type/Integer"
      },
      // Display name: Reorder Level
      reorderLevel: {
        type: "column",
        name: "reorder_level",
        sourceName: "inventory",
        jsType: "number",
        fieldId: 1811,
        tableId: 191,
        baseType: "type/Integer"
      },
      // Display name: Updated At
      // Semantic type: type/UpdatedTimestamp
      updatedAt: {
        type: "column",
        name: "updated_at",
        sourceName: "inventory",
        jsType: "Date",
        fieldId: 1812,
        tableId: 191,
        baseType: "type/DateTimeWithLocalTZ"
      }
    }
  },
  // Database: neondb
  // Schema: public
  // Table: order_items
  orderItems: {
    type: "table",
    id: 189,
    name: "Order Items",
    fields: {
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "order_items",
        jsType: "number",
        fieldId: 1813,
        tableId: 189,
        baseType: "type/BigInteger"
      },
      // Display name: Order ID
      // Semantic type: type/FK
      orderId: {
        type: "column",
        name: "order_id",
        sourceName: "order_items",
        jsType: "number",
        fieldId: 1814,
        tableId: 189,
        baseType: "type/BigInteger"
      },
      // Display name: Product ID
      // Semantic type: type/FK
      productId: {
        type: "column",
        name: "product_id",
        sourceName: "order_items",
        jsType: "number",
        fieldId: 1815,
        tableId: 189,
        baseType: "type/BigInteger"
      },
      // Display name: Quantity
      // Semantic type: type/Quantity
      quantity: {
        type: "column",
        name: "quantity",
        sourceName: "order_items",
        jsType: "number",
        fieldId: 1816,
        tableId: 189,
        baseType: "type/Integer"
      },
      // Display name: Unit Price Cents
      unitPriceCents: {
        type: "column",
        name: "unit_price_cents",
        sourceName: "order_items",
        jsType: "number",
        fieldId: 1817,
        tableId: 189,
        baseType: "type/Integer"
      }
    }
  },
  // Database: neondb
  // Schema: public
  orders: {
    type: "table",
    id: 180,
    name: "Orders",
    fields: {
      // Display name: Billing Address ID
      // Semantic type: type/FK
      billingAddressId: {
        type: "column",
        name: "billing_address_id",
        sourceName: "orders",
        jsType: "number",
        fieldId: 1820,
        tableId: 180,
        baseType: "type/BigInteger"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "orders",
        jsType: "number",
        fieldId: 1818,
        tableId: 180,
        baseType: "type/BigInteger"
      },
      // Display name: Placed At
      placedAt: {
        type: "column",
        name: "placed_at",
        sourceName: "orders",
        jsType: "Date",
        fieldId: 1827,
        tableId: 180,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: Shipping Address ID
      // Semantic type: type/FK
      shippingAddressId: {
        type: "column",
        name: "shipping_address_id",
        sourceName: "orders",
        jsType: "number",
        fieldId: 1821,
        tableId: 180,
        baseType: "type/BigInteger"
      },
      // Display name: Shipping Cents
      shippingCents: {
        type: "column",
        name: "shipping_cents",
        sourceName: "orders",
        jsType: "number",
        fieldId: 1825,
        tableId: 180,
        baseType: "type/Integer"
      },
      // Display name: Status
      // Semantic type: type/Category
      status: {
        type: "column",
        name: "status",
        sourceName: "orders",
        jsType: "string",
        fieldId: 1822,
        tableId: 180,
        baseType: "type/Text"
      },
      // Display name: Subtotal Cents
      subtotalCents: {
        type: "column",
        name: "subtotal_cents",
        sourceName: "orders",
        jsType: "number",
        fieldId: 1823,
        tableId: 180,
        baseType: "type/Integer"
      },
      // Display name: Tax Cents
      taxCents: {
        type: "column",
        name: "tax_cents",
        sourceName: "orders",
        jsType: "number",
        fieldId: 1824,
        tableId: 180,
        baseType: "type/Integer"
      },
      // Display name: Total Cents
      totalCents: {
        type: "column",
        name: "total_cents",
        sourceName: "orders",
        jsType: "number",
        fieldId: 1826,
        tableId: 180,
        baseType: "type/Integer"
      },
      // Display name: User ID
      // Semantic type: type/FK
      userId: {
        type: "column",
        name: "user_id",
        sourceName: "orders",
        jsType: "number",
        fieldId: 1819,
        tableId: 180,
        baseType: "type/BigInteger"
      }
    }
  },
  // Database: neondb
  // Schema: public
  payments: {
    type: "table",
    id: 193,
    name: "Payments",
    fields: {
      // Display name: Amount Cents
      amountCents: {
        type: "column",
        name: "amount_cents",
        sourceName: "payments",
        jsType: "number",
        fieldId: 1831,
        tableId: 193,
        baseType: "type/Integer"
      },
      // Display name: Currency
      // Semantic type: type/Category
      currency: {
        type: "column",
        name: "currency",
        sourceName: "payments",
        jsType: "string",
        fieldId: 1832,
        tableId: 193,
        baseType: "type/Text"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "payments",
        jsType: "number",
        fieldId: 1828,
        tableId: 193,
        baseType: "type/BigInteger"
      },
      // Display name: Order ID
      // Semantic type: type/FK
      orderId: {
        type: "column",
        name: "order_id",
        sourceName: "payments",
        jsType: "number",
        fieldId: 1829,
        tableId: 193,
        baseType: "type/BigInteger"
      },
      // Display name: Processed At
      processedAt: {
        type: "column",
        name: "processed_at",
        sourceName: "payments",
        jsType: "Date",
        fieldId: 1834,
        tableId: 193,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: Provider
      // Semantic type: type/Category
      provider: {
        type: "column",
        name: "provider",
        sourceName: "payments",
        jsType: "string",
        fieldId: 1830,
        tableId: 193,
        baseType: "type/Text"
      },
      // Display name: Status
      // Semantic type: type/Category
      status: {
        type: "column",
        name: "status",
        sourceName: "payments",
        jsType: "string",
        fieldId: 1833,
        tableId: 193,
        baseType: "type/Text"
      }
    }
  },
  // Database: neondb
  // Schema: public
  products: {
    type: "table",
    id: 186,
    name: "Products",
    fields: {
      // Display name: Category ID
      // Semantic type: type/FK
      categoryId: {
        type: "column",
        name: "category_id",
        sourceName: "products",
        jsType: "number",
        fieldId: 1836,
        tableId: 186,
        baseType: "type/Integer"
      },
      // Display name: Created At
      // Semantic type: type/CreationTimestamp
      createdAt: {
        type: "column",
        name: "created_at",
        sourceName: "products",
        jsType: "Date",
        fieldId: 1844,
        tableId: 186,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: Description
      // Semantic type: type/Description
      description: {
        type: "column",
        name: "description",
        sourceName: "products",
        jsType: "string",
        fieldId: 1840,
        tableId: 186,
        baseType: "type/Text"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "products",
        jsType: "number",
        fieldId: 1835,
        tableId: 186,
        baseType: "type/BigInteger"
      },
      // Display name: Is Active
      isActive: {
        type: "column",
        name: "is_active",
        sourceName: "products",
        jsType: "boolean",
        fieldId: 1843,
        tableId: 186,
        baseType: "type/Boolean"
      },
      // Display name: Name
      // Semantic type: type/Name
      name: {
        type: "column",
        name: "name",
        sourceName: "products",
        jsType: "string",
        fieldId: 1839,
        tableId: 186,
        baseType: "type/Text"
      },
      // Display name: Price Cents
      priceCents: {
        type: "column",
        name: "price_cents",
        sourceName: "products",
        jsType: "number",
        fieldId: 1841,
        tableId: 186,
        baseType: "type/Integer"
      },
      // Display name: Sku
      sku: {
        type: "column",
        name: "sku",
        sourceName: "products",
        jsType: "string",
        fieldId: 1838,
        tableId: 186,
        baseType: "type/Text"
      },
      // Display name: Supplier ID
      // Semantic type: type/FK
      supplierId: {
        type: "column",
        name: "supplier_id",
        sourceName: "products",
        jsType: "number",
        fieldId: 1837,
        tableId: 186,
        baseType: "type/Integer"
      },
      // Display name: Weight Grams
      weightGrams: {
        type: "column",
        name: "weight_grams",
        sourceName: "products",
        jsType: "number",
        fieldId: 1842,
        tableId: 186,
        baseType: "type/Integer"
      }
    }
  },
  // Database: neondb
  // Schema: public
  reviews: {
    type: "table",
    id: 183,
    name: "Reviews",
    fields: {
      // Display name: Body
      // Semantic type: type/Category
      body: {
        type: "column",
        name: "body",
        sourceName: "reviews",
        jsType: "string",
        fieldId: 1850,
        tableId: 183,
        baseType: "type/Text"
      },
      // Display name: Created At
      // Semantic type: type/CreationTimestamp
      createdAt: {
        type: "column",
        name: "created_at",
        sourceName: "reviews",
        jsType: "Date",
        fieldId: 1851,
        tableId: 183,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "reviews",
        jsType: "number",
        fieldId: 1845,
        tableId: 183,
        baseType: "type/BigInteger"
      },
      // Display name: Product ID
      // Semantic type: type/FK
      productId: {
        type: "column",
        name: "product_id",
        sourceName: "reviews",
        jsType: "number",
        fieldId: 1846,
        tableId: 183,
        baseType: "type/BigInteger"
      },
      // Display name: Rating
      // Semantic type: type/Score
      rating: {
        type: "column",
        name: "rating",
        sourceName: "reviews",
        jsType: "number",
        fieldId: 1848,
        tableId: 183,
        baseType: "type/Integer"
      },
      // Display name: Title
      // Semantic type: type/Title
      title: {
        type: "column",
        name: "title",
        sourceName: "reviews",
        jsType: "string",
        fieldId: 1849,
        tableId: 183,
        baseType: "type/Text"
      },
      // Display name: User ID
      // Semantic type: type/FK
      userId: {
        type: "column",
        name: "user_id",
        sourceName: "reviews",
        jsType: "number",
        fieldId: 1847,
        tableId: 183,
        baseType: "type/BigInteger"
      }
    }
  },
  // Database: neondb
  // Schema: public
  shipments: {
    type: "table",
    id: 178,
    name: "Shipments",
    fields: {
      // Display name: Carrier
      // Semantic type: type/Category
      carrier: {
        type: "column",
        name: "carrier",
        sourceName: "shipments",
        jsType: "string",
        fieldId: 1854,
        tableId: 178,
        baseType: "type/Text"
      },
      // Display name: Delivered At
      deliveredAt: {
        type: "column",
        name: "delivered_at",
        sourceName: "shipments",
        jsType: "Date",
        fieldId: 1857,
        tableId: 178,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "shipments",
        jsType: "number",
        fieldId: 1852,
        tableId: 178,
        baseType: "type/BigInteger"
      },
      // Display name: Order ID
      // Semantic type: type/FK
      orderId: {
        type: "column",
        name: "order_id",
        sourceName: "shipments",
        jsType: "number",
        fieldId: 1853,
        tableId: 178,
        baseType: "type/BigInteger"
      },
      // Display name: Shipped At
      shippedAt: {
        type: "column",
        name: "shipped_at",
        sourceName: "shipments",
        jsType: "Date",
        fieldId: 1856,
        tableId: 178,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: Status
      // Semantic type: type/Category
      status: {
        type: "column",
        name: "status",
        sourceName: "shipments",
        jsType: "string",
        fieldId: 1858,
        tableId: 178,
        baseType: "type/Text"
      },
      // Display name: Tracking Number
      trackingNumber: {
        type: "column",
        name: "tracking_number",
        sourceName: "shipments",
        jsType: "string",
        fieldId: 1855,
        tableId: 178,
        baseType: "type/Text"
      }
    }
  },
  // Database: neondb
  // Schema: public
  suppliers: {
    type: "table",
    id: 179,
    name: "Suppliers",
    fields: {
      // Display name: Country Code
      // Semantic type: type/Country
      countryCode: {
        type: "column",
        name: "country_code",
        sourceName: "suppliers",
        jsType: "string",
        fieldId: 1861,
        tableId: 179,
        baseType: "type/Text"
      },
      // Display name: Created At
      // Semantic type: type/CreationTimestamp
      createdAt: {
        type: "column",
        name: "created_at",
        sourceName: "suppliers",
        jsType: "Date",
        fieldId: 1862,
        tableId: 179,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "suppliers",
        jsType: "number",
        fieldId: 1859,
        tableId: 179,
        baseType: "type/Integer"
      },
      // Display name: Name
      // Semantic type: type/Name
      name: {
        type: "column",
        name: "name",
        sourceName: "suppliers",
        jsType: "string",
        fieldId: 1860,
        tableId: 179,
        baseType: "type/Text"
      }
    }
  },
  // Database: neondb
  // Schema: public
  // Table: upload_people_20260706184725
  uploadPeople20260706184725: {
    type: "table",
    id: 213,
    name: "Upload People 20260706184725",
    fields: {
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "upload_people_20260706184725",
        jsType: "number",
        fieldId: 2026,
        tableId: 213,
        baseType: "type/BigInteger"
      },
      // Display name: _mb_row_id
      // Semantic type: type/PK
      mbRowId: {
        type: "column",
        name: "_mb_row_id",
        sourceName: "upload_people_20260706184725",
        jsType: "number",
        fieldId: 2025,
        tableId: 213,
        baseType: "type/BigInteger"
      },
      // Display name: Name
      // Semantic type: type/Name
      name: {
        type: "column",
        name: "name",
        sourceName: "upload_people_20260706184725",
        jsType: "string",
        fieldId: 2027,
        tableId: 213,
        baseType: "type/Text"
      },
      // Display name: Signup Date
      signupDate: {
        type: "column",
        name: "signup_date",
        sourceName: "upload_people_20260706184725",
        jsType: "Date",
        fieldId: 2028,
        tableId: 213,
        baseType: "type/Date"
      }
    }
  },
  // Database: neondb
  // Schema: public
  users: {
    type: "table",
    id: 192,
    name: "Users",
    fields: {
      // Display name: Country Code
      // Semantic type: type/Country
      countryCode: {
        type: "column",
        name: "country_code",
        sourceName: "users",
        jsType: "string",
        fieldId: 1866,
        tableId: 192,
        baseType: "type/Text"
      },
      // Display name: Created At
      // Semantic type: type/CreationTimestamp
      createdAt: {
        type: "column",
        name: "created_at",
        sourceName: "users",
        jsType: "Date",
        fieldId: 1868,
        tableId: 192,
        baseType: "type/DateTimeWithLocalTZ"
      },
      // Display name: Email
      // Semantic type: type/Email
      email: {
        type: "column",
        name: "email",
        sourceName: "users",
        jsType: "string",
        fieldId: 1864,
        tableId: 192,
        baseType: "type/Text"
      },
      // Display name: Full Name
      // Semantic type: type/Name
      fullName: {
        type: "column",
        name: "full_name",
        sourceName: "users",
        jsType: "string",
        fieldId: 1865,
        tableId: 192,
        baseType: "type/Text"
      },
      // Display name: ID
      // Semantic type: type/PK
      id: {
        type: "column",
        name: "id",
        sourceName: "users",
        jsType: "number",
        fieldId: 1863,
        tableId: 192,
        baseType: "type/BigInteger"
      },
      // Display name: Is Active
      isActive: {
        type: "column",
        name: "is_active",
        sourceName: "users",
        jsType: "boolean",
        fieldId: 1867,
        tableId: 192,
        baseType: "type/Boolean"
      }
    }
  }
} as const;

const metrics = { } as const;

const schema = {
  schemaVersion: 2,
  generatedAt: "2026-07-07T15:52:34.767812Z",
  metabase: {
    instanceUrl: "http://localhost:3000"
  },
  questions: questions,
  models: models,
  tables: tables,
  metrics: metrics
} as const;

export default schema;
