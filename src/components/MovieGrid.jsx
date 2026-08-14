import MovieCard from "./MovieCard"
import { FilmIcon } from "lucide-react"

// MovieGrid is used on the Movies / TV Shows / Search pages where
// results are shown as a responsive grid rather than a scroll row.
function MovieGrid({ movies, emptyMessage = "No results found" }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-24 text-center text-text-muted">
        <FilmIcon size={40} className="opacity-40" />
        <p className="text-lg font-semibold text-text">{emptyMessage}</p>
        <p className="max-w-sm text-sm">Try adjusting your search or filters to find what you're looking for.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {movies.map((movie) => (
        <div key={movie.id} className="w-full">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  )
}

export default MovieGrid
