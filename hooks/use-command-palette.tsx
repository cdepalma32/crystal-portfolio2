"use client"

import { create } from "zustand"
import { useEffect } from "react"

interface CommandPaletteStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  toggle: () => void
}

export const useCommandPalette = create<CommandPaletteStore>((set, get) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggle: () => set({ isOpen: !get().isOpen }),
}))

// Hook to handle keyboard shortcuts
export function useCommandPaletteShortcuts() {
  const { toggle } = useCommandPalette()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        toggle()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [toggle])
}
