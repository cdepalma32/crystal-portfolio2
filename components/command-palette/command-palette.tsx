"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Home, User, Code, Briefcase, BookOpen, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCommandPalette } from "@/hooks/use-command-palette"

const commands = [
  {
    id: "home",
    label: "Go to Home",
    icon: Home,
    action: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "about",
    label: "Go to About",
    icon: User,
    action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "tech",
    label: "Go to Tech Stack",
    icon: Code,
    action: () => document.getElementById("tech")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "projects",
    label: "Go to Projects",
    icon: Briefcase,
    action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "blog",
    label: "Go to Blog",
    icon: BookOpen,
    action: () => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "contact",
    label: "Go to Contact",
    icon: Mail,
    action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "github",
    label: "Open GitHub",
    icon: Github,
    action: () => window.open("https://github.com/cdepalma32", "_blank"),
  },
  {
    id: "linkedin",
    label: "Open LinkedIn",
    icon: Linkedin,
    action: () => window.open("https://www.linkedin.com/in/crystal-depalma-496710304/", "_blank"),
  },
]

export function CommandPalette() {
  const { isOpen, setIsOpen } = useCommandPalette()
  const [search, setSearch] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filteredCommands = commands.filter((command) => command.label.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    setSelectedIndex(0)
  }, [search])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedIndex((prev) => (prev + 1) % filteredCommands.length)
          break
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length)
          break
        case "Enter":
          e.preventDefault()
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action()
            setIsOpen(false)
            setSearch("")
          }
          break
        case "Escape":
          setIsOpen(false)
          setSearch("")
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, filteredCommands, selectedIndex, setIsOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-lg mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center px-4 py-3 border-b border-border">
              <Search className="h-5 w-5 text-foreground/50 mr-3" />
              <input
                type="text"
                placeholder="Search commands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-foreground/50"
                autoFocus
              />
            </div>

            {/* Commands */}
            <div className="max-h-80 overflow-y-auto">
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-8 text-center text-foreground/50">No commands found</div>
              ) : (
                filteredCommands.map((command, index) => {
                  const Icon = command.icon
                  return (
                    <Button
                      key={command.id}
                      variant="ghost"
                      className={`w-full justify-start px-4 py-3 rounded-none hover:bg-foreground/5 ${
                        index === selectedIndex ? "bg-foreground/5" : ""
                      }`}
                      onClick={() => {
                        command.action()
                        setIsOpen(false)
                        setSearch("")
                      }}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {command.label}
                    </Button>
                  )
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-border bg-foreground/5 text-xs text-foreground/50">
              Use ↑↓ to navigate, Enter to select, Esc to close
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
