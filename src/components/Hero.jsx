import { Play, Info, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

// The hero is the site's thesis: a full-bleed cinematic backdrop,
// bracketed top and bottom by a sprocket-hole strip — the film-reel
// signature motif carried throughout the site.
function Hero({ movie }) {
  const navigate = useNavigate()
  if (!movie) return null

  return (
    <section className="relative h-[86vh] min-h-[520px] w-full">
      <div className="sprocket-strip absolute top-16 z-20 w-full" />

      <img
        src={movie.backdrop}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/20 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end gap-4 px-4 pb-16 sm:px-8 sm:pb-20 md:w-2/3 lg:w-1/2">
        <span className="font-mono text-xs tracking-widest text-accent">FEATURED PRESENTATION</span>
        <h1 className="font-display text-5xl leading-none tracking-wide text-text sm:text-6xl md:text-7xl">
          {movie.title}
        </h1>

        <div className="flex items-center gap-3 font-mono text-sm text-text-muted">
          <span className="flex items-center gap-1 font-semibold text-accent">
            <Star size={14} fill="currentColor" />
            {movie.rating}
          </span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <span className="truncate">{movie.genre.join(" \u00b7 ")}</span>
        </div>

        <p className="line-clamp-3 max-w-lg text-sm text-text/90 sm:text-base">
          {movie.description}
        </p>

        <div className="flex gap-3 pt-2">
          <Button variant="primary" icon={Play} onClick={() => navigate(`/movie/${movie.id}`)}>
            Play
          </Button>
          <Button variant="secondary" icon={Info} onClick={() => navigate(`/movie/${movie.id}`)}>
            More Info
          </Button>
        </div>
      </div>

      <div className="sprocket-strip absolute bottom-0 z-20 w-full" />
    </section>
  )
}

export default Hero
