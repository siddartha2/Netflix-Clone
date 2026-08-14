import { createContext, useContext, useState, useEffect } from "react"

// AppContext holds state that many components need to share:
// the user's "My List" of saved titles. We keep it simple with
// useState + useEffect + localStorage instead of a state library.

const AppContext = createContext(null)

const STORAGE_KEY = "streamflix-my-list"

export function AppProvider({ children }) {
  // Lazy init: read from localStorage once, on first render.
  const [myList, setMyList] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Whenever myList changes, write it back to localStorage.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(myList))
  }, [myList])

  const isInList = (id) => myList.some((m) => m.id === id)

  const toggleMyList = (movie) => {
    setMyList((prev) =>
      prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    )
  }

  const removeFromList = (id) => {
    setMyList((prev) => prev.filter((m) => m.id !== id))
  }

  return (
    <AppContext.Provider
      value={{ myList, isInList, toggleMyList, removeFromList }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom hook so components just call useApp() instead of
// importing useContext + AppContext everywhere.
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error("useApp must be used within an AppProvider")
  return ctx
}
