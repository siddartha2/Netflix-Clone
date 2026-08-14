import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Play, Plus, Check, Star } from "lucide-react"
import Button from "../components/Button"
import MovieRow from "../components/MovieRow"
import { getMovieById, getRecommended } from "../data/movies"
import { useApp } from "../context/AppContext"

function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isInList, toggleMyList } = useApp()
  const movie = getMovieById(id)

  // Scroll to top whenever we navigate to a new movie's detail page.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!movie) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="font-display text-4xl text-text">Title Not Found</p>
        <p className="text-text-muted">We couldn't find the title you're looking for.</p>
        <Button variant="accent" onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    )
  }

  const saved = isInList(movie.id)
  const recommended = getRecommended(movie)

  return (
    <div className="min-h-screen">
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <img src={movie.backdrop} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-bg/10 to-transparent" />
      </div>

      <div className="relative z-10 -mt-40 px-4 pb-16 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-40 shrink-0 rounded-md shadow-2xl shadow-black/60 sm:w-56"
          />

          <div className="flex flex-col justify-end gap-3">
            <span className="font-mono text-xs tracking-widest text-accent">
              {movie.type === "tv" ? "SERIES" : "FEATURE FILM"}
            </span>
            <h1 className="font-display text-4xl leading-none tracking-wide text-text sm:text-6xl">
              {movie.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-text-muted">
              <span className="flex items-center gap-1 font-semibold text-accent">
                <Star size={14} fill="currentColor" />
                {movie.rating}
              </span>
              <span>{movie.year}</span>
              <span>{movie.duration}</span>
              <span>{movie.genre.join(" \u00b7 ")}</span>
            </div>

            <p className="max-w-2xl text-sm text-text/90 sm:text-base">{movie.description}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="primary" icon={Play}>Play</Button>
              <Button
                variant="secondary"
                icon={saved ? Check : Plus}
                onClick={() => toggleMyList(movie)}
              >
                {saved ? "In My List" : "Add to My List"}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:max-w-xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Cast</p>
            <p className="mt-1 text-sm text-text">{movie.cast.join(", ")}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Director</p>
            <p className="mt-1 text-sm text-text">{movie.director}</p>
          </div>
        </div>
      </div>

      {recommended.length > 0 && (
        <MovieRow title="More Like This" movies={recommended} />
      )}
    </div>
  )
}

export default MovieDetails
