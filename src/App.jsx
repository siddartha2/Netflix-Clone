import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import TVShows from "./pages/TVShows"
import MovieDetails from "./pages/MovieDetails"
import Search from "./pages/Search"
import MyList from "./pages/MyList"
import Profile from "./pages/Profile"

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
