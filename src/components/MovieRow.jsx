import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MovieCard from "./MovieCard"

// MovieRow renders one horizontally-scrollable shelf of movies.
// "reelNumber" is optional flavor text that ties into the film-reel
// motif used across the site (e.g. "REEL 01").
function MovieRow({ title, reelNumber, movies }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.8
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  if (!movies || movies.length === 0) return null

  return (
    <section className="group/row relative py-4">
      <div className="mb-3 flex items-baseline gap-3 px-4 sm:px-8">
        {reelNumber && (
          <span className="font-mono text-xs tracking-widest text-accent">{reelNumber}</span>
        )}
        <h2 className="text-lg font-bold text-text sm:text-xl">{title}</h2>
      </div>

      <div className="relative">
        <button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 z-20 hidden h-full w-10 items-center justify-center bg-gradient-to-r from-bg to-transparent text-text opacity-0 transition-opacity duration-200 group-hover/row:opacity-100 sm:flex"
        >
          <ChevronLeft size={28} />
        </button>

        <div
          ref={scrollRef}
          className="row-scroll flex gap-3 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-8"
        >
          {movies.map((movie) => (
            <div key={movie.id} className="w-40 shrink-0 sm:w-48">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 z-20 hidden h-full w-10 items-center justify-center bg-gradient-to-l from-bg to-transparent text-text opacity-0 transition-opacity duration-200 group-hover/row:opacity-100 sm:flex"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  )
}

export default MovieRow
