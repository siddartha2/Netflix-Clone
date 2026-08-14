import { useNavigate } from "react-router-dom"
import { Bookmark } from "lucide-react"
import MovieGrid from "../components/MovieGrid"
import Button from "../components/Button"
import { useApp } from "../context/AppContext"

function MyList() {
  const { myList } = useApp()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen px-4 pb-16 pt-28 sm:px-8">
      <h1 className="font-display text-4xl tracking-wide text-text sm:text-5xl">My List</h1>
      <p className="mt-1 font-mono text-xs text-text-muted">{myList.length} saved title{myList.length !== 1 ? "s" : ""}</p>

      <div className="mt-8">
        {myList.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-24 text-center text-text-muted">
            <Bookmark size={40} className="opacity-40" />
            <p className="text-lg font-semibold text-text">Your list is empty</p>
            <p className="max-w-sm text-sm">
              Tap the + icon on any movie or show to save it here for later.
            </p>
            <Button variant="accent" onClick={() => navigate("/")}>Browse Titles</Button>
          </div>
        ) : (
          <MovieGrid movies={myList} />
        )}
      </div>
    </div>
  )
}

export default MyList
