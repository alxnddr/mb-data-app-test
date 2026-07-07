export default function Spinner({ label }: { label?: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: 32,
        color: "#6b7280",
      }}
    >
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          border: "2px solid #d1d5db",
          borderTopColor: "#4D96FF",
          animation: "coupon-spin 0.8s linear infinite",
        }}
      />
      <style>{"@keyframes coupon-spin { to { transform: rotate(360deg); } }"}</style>
      {label ?? "Loading…"}
    </div>
  );
}
