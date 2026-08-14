import { useState, useMemo } from "react"
import SearchBar from "../components/SearchBar"
import FilterBar from "../components/FilterBar"
import MovieGrid from "../components/MovieGrid"
import Button from "../components/Button"
import { movies, genres } from "../data/movies"

const PAGE_SIZE = 12

const years = [...new Set(movies.map((m) => m.year))].sort((a, b) => b - a)
const ratings = ["9+", "8+", "7+", "6+"]

function Movies() {
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState({ genre: "", year: "", rating: "" })
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const onlyMovies = useMemo(() => movies.filter((m) => m.type === "movie"), [])

  const filtered = useMemo(() => {
    return onlyMovies.filter((m) => {
      const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase())
      const matchesGenre = !filters.genre || m.genre.includes(filters.genre)
      const matchesYear = !filters.year || String(m.year) === filters.year
      const matchesRating = !filters.rating || m.rating >= parseInt(filters.rating)
      return matchesSearch && matchesGenre && matchesYear && matchesRating
    })
  }, [onlyMovies, search, filters])

  const visible = filtered.slice(0, visibleCount)

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <div className="min-h-screen px-4 pb-16 pt-28 sm:px-8">
      <h1 className="font-display text-4xl tracking-wide text-text sm:text-5xl">Movies</h1>
      <p className="mt-1 font-mono text-xs text-text-muted">{filtered.length} titles found</p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:max-w-xs">
          <SearchBar
            value={search}
            onChange={(v) => {
              setSearch(v)
              setVisibleCount(PAGE_SIZE)
            }}
            placeholder="Search movies..."
          />
        </div>
        <FilterBar
          filters={[
            { key: "genre", label: "All Genres", options: genres },
            { key: "year", label: "All Years", options: years.map(String) },
            { key: "rating", label: "All Ratings", options: ratings },
          ]}
          values={filters}
          onChange={handleFilterChange}
        />
      </div>

      <div className="mt-8">
        <MovieGrid movies={visible} emptyMessage="No movies match your filters" />
      </div>

      {visibleCount < filtered.length && (
        <div className="mt-10 flex justify-center">
          <Button variant="secondary" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}

export default Movies
