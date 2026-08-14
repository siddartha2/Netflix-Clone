import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { User, LogOut, Settings } from "lucide-react"

// Small avatar dropdown used in the navbar. Closes itself when the
// user clicks anywhere outside of it.
function ProfileMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        aria-label="Open profile menu"
        onClick={() => setOpen((o) => !o)}
        className="flex h-8 w-8 items-center justify-center rounded bg-accent text-bg"
      >
        <User size={16} />
      </button>

      {open && (
        <div className="absolute right-0 top-11 w-44 rounded-md border border-line bg-bg-elevated py-2 shadow-xl shadow-black/50">
          <button
            onClick={() => {
              navigate("/profile")
              setOpen(false)
            }}
            className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-text hover:bg-white/5"
          >
            <Settings size={15} /> Profile & Settings
          </button>
          <button
            onClick={() => setOpen(false)}
            className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-text hover:bg-white/5"
          >
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default ProfileMenu
