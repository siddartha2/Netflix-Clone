import { useState, useMemo } from "react"
import SearchBar from "../components/SearchBar"
import MovieGrid from "../components/MovieGrid"
import { movies } from "../data/movies"
import { SearchIcon } from "lucide-react"

function Search() {
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return movies.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.genre.some((g) => g.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <div className="min-h-screen px-4 pb-16 pt-28 sm:px-8">
      <h1 className="font-display text-4xl tracking-wide text-text sm:text-5xl">Search</h1>

      <div className="mt-6 max-w-lg">
        <SearchBar value={query} onChange={setQuery} placeholder="Search movies and TV shows..." />
      </div>

      <div className="mt-8">
        {!query.trim() ? (
          <div className="flex flex-col items-center gap-3 py-24 text-center text-text-muted">
            <SearchIcon size={40} className="opacity-40" />
            <p className="text-lg font-semibold text-text">Find something to watch</p>
            <p className="max-w-sm text-sm">Search by title or genre across movies and TV shows.</p>
          </div>
        ) : (
          <>
            <p className="mb-4 font-mono text-xs text-text-muted">
              {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
            </p>
            <MovieGrid movies={results} emptyMessage={`No results found for "${query}"`} />
          </>
        )}
      </div>
    </div>
  )
}

export default Search
