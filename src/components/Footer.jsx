import { Clapperboard } from "lucide-react"

function Footer() {
  return (
    <footer className="mt-16 border-t border-line px-4 py-10 sm:px-8">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-1.5">
          <Clapperboard className="text-accent" size={20} />
          <span className="font-display text-xl tracking-wide text-text">
            STREAM<span className="text-accent">FLIX</span>
          </span>
        </div>
        <p className="max-w-md text-xs text-text-muted">
          StreamFlix is a portfolio project built to demonstrate frontend
          development skills. All titles, images, and data are fictional
          placeholders used for demonstration purposes only.
        </p>
        <p className="font-mono text-xs text-text-muted">© 2026 StreamFlix Demo</p>
      </div>
    </footer>
  )
}

export default Footer
