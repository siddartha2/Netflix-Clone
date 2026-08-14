import { useState } from "react"
import { User, LogOut, Moon, Globe, Tv } from "lucide-react"
import Button from "../components/Button"

// This is UI only — there's no real auth or backend behind it.
// State here just demonstrates controlled inputs / conditional rendering.
function Profile() {
  const [language, setLanguage] = useState("English")
  const [autoplay, setAutoplay] = useState(true)
  const [maturePreview, setMaturePreview] = useState(false)

  return (
    <div className="min-h-screen px-4 pb-16 pt-28 sm:px-8">
      <h1 className="font-display text-4xl tracking-wide text-text sm:text-5xl">Profile</h1>

      <div className="mt-8 flex max-w-2xl flex-col gap-8">
        <div className="flex items-center gap-4 rounded-md border border-line bg-bg-elevated p-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-md bg-accent text-bg">
            <User size={28} />
          </div>
          <div>
            <p className="text-lg font-bold text-text">Vallam Siddartha Yadav</p>
            <p className="text-sm text-text-muted">vallam.siddartha@example.com</p>
          </div>
        </div>

        <div className="rounded-md border border-line bg-bg-elevated p-5">
          <h2 className="mb-4 font-mono text-xs tracking-widest text-accent">VIEWING PREFERENCES</h2>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-text">
                <Globe size={16} className="text-text-muted" /> Language
              </div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded-md border border-line bg-bg px-3 py-1.5 text-sm text-text focus:border-accent focus:outline-none"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-text">
                <Tv size={16} className="text-text-muted" /> Autoplay next episode
              </div>
              <button
                onClick={() => setAutoplay((v) => !v)}
                aria-pressed={autoplay}
                className={`h-6 w-11 rounded-full transition-colors ${autoplay ? "bg-accent" : "bg-line"}`}
              >
                <span
                  className={`block h-5 w-5 translate-y-0.5 rounded-full bg-bg transition-transform ${
                    autoplay ? "translate-x-[22px]" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-text">
                <Moon size={16} className="text-text-muted" /> Dark mode
              </div>
              <span className="font-mono text-xs text-accent">Always on</span>
            </div>
          </div>
        </div>

        <Button variant="secondary" icon={LogOut} className="w-fit">
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default Profile
