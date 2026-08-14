import MovieRow from "../components/MovieRow"
import { movies } from "../data/movies"

function TVShows() {
  const shows = movies.filter((m) => m.type === "tv")
  const byCategory = (cat) => shows.filter((s) => s.category === cat)
  const byGenre = (g) => shows.filter((s) => s.genre.includes(g))

  return (
    <div className="min-h-screen pb-16 pt-24">
      <div className="px-4 pt-4 sm:px-8">
        <h1 className="font-display text-4xl tracking-wide text-text sm:text-5xl">TV Shows</h1>
        <p className="mt-1 font-mono text-xs text-text-muted">{shows.length} shows available</p>
      </div>

      <div className="mt-6">
        <MovieRow reelNumber="REEL 01" title="Popular Shows" movies={byCategory("Popular Shows")} />
        <MovieRow reelNumber="REEL 02" title="Trending Shows" movies={byCategory("Trending Shows")} />
        <MovieRow reelNumber="REEL 03" title="Drama" movies={byGenre("Drama")} />
        <MovieRow reelNumber="REEL 04" title="Comedy" movies={byGenre("Comedy")} />
        <MovieRow reelNumber="REEL 05" title="Crime" movies={byGenre("Crime")} />
        <MovieRow reelNumber="REEL 06" title="Sci-Fi" movies={byGenre("Sci-Fi")} />
        <MovieRow reelNumber="REEL 07" title="Documentary" movies={byGenre("Documentary")} />
      </div>
    </div>
  )
}

export default TVShows
