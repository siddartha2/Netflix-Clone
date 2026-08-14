// A row of <select> filters. `filters` describes each dropdown so
// this one component can be reused on both the Movies and TV Shows
// pages without duplicating markup.
function FilterBar({ filters, values, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <select
          key={filter.key}
          value={values[filter.key]}
          onChange={(e) => onChange(filter.key, e.target.value)}
          className="rounded-md border border-line bg-bg-elevated px-3 py-2 text-sm text-text focus:border-accent focus:outline-none"
        >
          <option value="">{filter.label}</option>
          {filter.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ))}
    </div>
  )
}

export default FilterBar
