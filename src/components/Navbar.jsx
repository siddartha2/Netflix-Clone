import { useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Search, Menu, X, Clapperboard } from "lucide-react"
import ProfileMenu from "./ProfileMenu"

const links = [
  { to: "/", label: "Home" },
  { to: "/movies", label: "Movies" },
  { to: "/tv-shows", label: "TV Shows" },
  { to: "/my-list", label: "My List" },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  // Track scroll position so the navbar can pick up a solid
  // background once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-accent ${
      isActive ? "text-accent" : "text-text/80"
    }`

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur-sm shadow-lg shadow-black/40" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-8">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center gap-1.5">
            <Clapperboard className="text-accent" size={24} />
            <span className="font-display text-2xl tracking-wide text-text">STREAM<span className="text-accent">FLIX</span></span>
          </NavLink>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            onClick={() => navigate("/search")}
            className="text-text/90 transition-colors hover:text-accent"
          >
            <Search size={20} />
          </button>
          <div className="hidden sm:block">
            <ProfileMenu />
          </div>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="text-text md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="flex flex-col gap-1 border-t border-line bg-bg px-4 py-3 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="rounded px-2 py-2 text-sm font-medium text-text/90 hover:bg-white/5"
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/profile"
            onClick={() => setMobileOpen(false)}
            className="rounded px-2 py-2 text-sm font-medium text-text/90 hover:bg-white/5"
          >
            Profile
          </NavLink>
        </nav>
      )}
    </header>
  )
}

export default Navbar
