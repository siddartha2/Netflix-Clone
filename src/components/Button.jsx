// A single reusable button so every CTA in the app looks and behaves
// the same way. "variant" swaps the visual style; everything else
// (onClick, type, etc.) is passed straight through via ...props.

function Button({ children, variant = "primary", icon: Icon, className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-semibold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary: "bg-text text-bg hover:bg-accent hover:text-bg",
    accent: "bg-accent text-bg hover:bg-accent-hover",
    secondary: "bg-bg-elevated/80 text-text hover:bg-bg-elevated border border-line",
    ghost: "bg-transparent text-text hover:bg-white/10",
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  )
}

export default Button
