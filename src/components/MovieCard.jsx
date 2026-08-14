import { useNavigate } from "react-router-dom"
import { Play, Plus, Check, Star } from "lucide-react"
import { useApp } from "../context/AppContext"

// MovieCard receives all its data through props (the `movie` object).
// It's used everywhere a poster grid or row shows up, so it stays
// self-contained: it knows how to navigate to details and how to
// toggle itself in My List.
function MovieCard({ movie }) {
  const navigate = useNavigate()
  const { isInList, toggleMyList } = useApp()
  const saved = isInList(movie.id)

  return (
    <div
      className="group relative w-full cursor-pointer"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <div className="relative overflow-hidden rounded-md bg-bg-card transition-transform duration-300 ease-out group-hover:scale-105 group-hover:z-10 group-hover:shadow-2xl group-hover:shadow-black/60">
        <img
          src={movie.poster}
          alt={movie.title}
          loading="lazy"
          className="aspect-2/3 w-full object-cover"
        />

        {/* Hover overlay with quick actions */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center gap-2 p-3">
            <button
              aria-label={`Play ${movie.title}`}
              onClick={(e) => {
                e.stopPropagation()
                navigate(`/movie/${movie.id}`)
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-text text-bg hover:bg-accent"
            >
              <Play size={15} fill="currentColor" />
            </button>
            <button
              aria-label={saved ? `Remove ${movie.title} from My List` : `Add ${movie.title} to My List`}
              onClick={(e) => {
                e.stopPropagation()
                toggleMyList(movie)
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-text-muted text-text hover:border-text"
            >
              {saved ? <Check size={15} /> : <Plus size={15} />}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-2 space-y-0.5">
        <p className="truncate text-sm font-semibold text-text">{movie.title}</p>
        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <span className="flex items-center gap-1 text-accent">
            <Star size={11} fill="currentColor" />
            {movie.rating}
          </span>
          <span>{movie.year}</span>
          <span className="truncate">{movie.genre[0]}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
