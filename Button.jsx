export default function Button({ label, ...props }) {
  return (
    <button {...props} className="button">
      {label}
    </button>
  );
}
