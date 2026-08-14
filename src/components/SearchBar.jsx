import { Search } from "lucide-react"

// A controlled input: the parent page owns the value/state and
// passes it down, so SearchBar itself stays "dumb" and reusable.
function SearchBar({ value, onChange, placeholder = "Search titles..." }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-line bg-bg-elevated px-4 py-3 focus-within:border-accent">
      <Search size={18} className="text-text-muted" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-text placeholder:text-text-muted focus:outline-none"
      />
    </div>
  )
}

export default SearchBar
