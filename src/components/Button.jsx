export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary-dark",
    secondary: "bg-brand-secondary text-white hover:opacity-90",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 bg-white",
    danger: "bg-brand-danger text-white hover:opacity-90",
    ghost: "text-brand-primary hover:bg-green-50",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
