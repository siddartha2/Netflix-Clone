import Hero from "../components/Hero"
import MovieRow from "../components/MovieRow"
import { movies, featuredMovie, getMoviesByCategory } from "../data/movies"

// Each row on the homepage is labeled like a reel on a film canister —
// ties back to the site's signature motif and gives the numbering
// real meaning (this is the Nth shelf of titles on the page).
function Home() {
  const trending = getMoviesByCategory("Trending")
  const popular = getMoviesByCategory("Popular")
  const topRated = getMoviesByCategory("Top Rated")
  const recentlyAdded = getMoviesByCategory("Recently Added")
  const action = movies.filter((m) => m.genre.includes("Action"))
  const comedy = movies.filter((m) => m.genre.includes("Comedy"))
  const scifi = movies.filter((m) => m.genre.includes("Sci-Fi"))

  return (
    <div>
      <Hero movie={featuredMovie} />

      <div className="relative z-10 -mt-10 pb-10">
        <MovieRow reelNumber="REEL 01" title="Trending Now" movies={trending} />
        <MovieRow reelNumber="REEL 02" title="Popular Movies" movies={popular} />
        <MovieRow reelNumber="REEL 03" title="Top Rated" movies={topRated} />
        <MovieRow reelNumber="REEL 04" title="Action" movies={action} />
        <MovieRow reelNumber="REEL 05" title="Comedy" movies={comedy} />
        <MovieRow reelNumber="REEL 06" title="Sci-Fi" movies={scifi} />
        <MovieRow reelNumber="REEL 07" title="Recently Added" movies={recentlyAdded} />
      </div>
    </div>
  )
}

export default Home
