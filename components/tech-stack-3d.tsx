"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface TechNode {
  id: string
  name: string
  category: "frontend" | "backend" | "database" | "tools"
  icon: string
  description: string
  proficiency: number
  x: number
  y: number
  z: number
  connections: string[]
  color: string
  learningJourney: {
    startDate: string
    milestones: string[]
  }
}

interface TechItem {
  name: string
  color: string
  x: number
  y: number
  z: number
  rotationSpeed: number
}

const techStack: TechNode[] = [
  // Frontend
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    icon: "⚛️",
    description: "Building dynamic user interfaces with modern React patterns",
    proficiency: 90,
    x: 0,
    y: 0,
    z: 0,
    connections: ["javascript", "jsx", "vite", "tailwind"],
    color: "text-powder-blue",
    learningJourney: {
      startDate: "2023-06",
      milestones: ["First component", "Hooks mastery", "State management", "Performance optimization"],
    },
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    icon: "🟨",
    description: "ES6+ features, async programming, and modern JavaScript",
    proficiency: 95,
    x: -150,
    y: -100,
    z: 50,
    connections: ["react", "node", "express"],
    color: "text-warm-orange",
    learningJourney: {
      startDate: "2023-04",
      milestones: ["ES6 syntax", "Async/await", "DOM manipulation", "Advanced patterns"],
    },
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    icon: "🎨",
    description: "Utility-first CSS framework for rapid UI development",
    proficiency: 85,
    x: 150,
    y: 100,
    z: -50,
    connections: ["css3", "shadcn", "react"],
    color: "text-soft-purple",
    learningJourney: {
      startDate: "2023-07",
      milestones: ["Utility classes", "Responsive design", "Custom components", "Design systems"],
    },
  },
  // Add more nodes with 3D positioning...
]

const techItems: TechItem[] = [
  { name: "React", color: "#61DAFB", x: 0, y: 0, z: 0, rotationSpeed: 0.01 },
  { name: "Node.js", color: "#339933", x: 100, y: 50, z: -50, rotationSpeed: 0.015 },
  { name: "MongoDB", color: "#47A248", x: -80, y: -30, z: 40, rotationSpeed: 0.012 },
  { name: "TypeScript", color: "#3178C6", x: 60, y: -60, z: 30, rotationSpeed: 0.008 },
  { name: "Next.js", color: "#000000", x: -50, y: 80, z: -30, rotationSpeed: 0.014 },
  { name: "Python", color: "#3776AB", x: 90, y: -20, z: 60, rotationSpeed: 0.011 },
  { name: "Docker", color: "#2496ED", x: -70, y: -70, z: -40, rotationSpeed: 0.009 },
  { name: "AWS", color: "#FF9900", x: 30, y: 70, z: 50, rotationSpeed: 0.013 },
]

export default function TechStack3D() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [viewMode, setViewMode] = useState<"3d" | "timeline">("3d")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const selectedTech = selectedNode ? techStack.find((tech) => tech.id === selectedNode) : null

  // Mouse interaction for 3D rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.movementX
    const deltaY = e.movementY

    setRotation((prev) => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }))
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        setMousePosition({
          x: (e.clientX - centerX) / rect.width,
          y: (e.clientY - centerY) / rect.height,
        })
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Auto-rotation when not interacting
  useEffect(() => {
    if (isDragging || selectedNode) return

    const interval = setInterval(() => {
      setRotation((prev) => ({
        ...prev,
        y: prev.y + 0.5,
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [isDragging, selectedNode])

  const get3DTransform = (node: TechNode) => {
    const { x, y, z } = node
    const rotX = (rotation.x * Math.PI) / 180
    const rotY = (rotation.y * Math.PI) / 180

    // Apply 3D rotation
    const newX = x * Math.cos(rotY) - z * Math.sin(rotY)
    const newZ = x * Math.sin(rotY) + z * Math.cos(rotY)
    const newY = y * Math.cos(rotX) - newZ * Math.sin(rotX)
    const finalZ = y * Math.sin(rotX) + newZ * Math.cos(rotX)

    // Perspective projection
    const perspective = 1000
    const scale = perspective / (perspective + finalZ)

    return {
      transform: `translate(${newX * scale}px, ${newY * scale}px) scale(${scale})`,
      zIndex: Math.round(finalZ + 1000),
      opacity: scale > 0.3 ? 1 : 0.3,
    }
  }

  return (
    <div className="relative w-full">
      {/* View Mode Toggle */}
      <div className="flex justify-center mb-8">
        <div className="glass rounded-full p-1">
          <button
            onClick={() => setViewMode("3d")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              viewMode === "3d" ? "bg-earth-warm text-white shadow-lg" : "text-foreground/70 hover:text-foreground"
            }`}
          >
            3D Network
          </button>
          <button
            onClick={() => setViewMode("timeline")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              viewMode === "timeline"
                ? "bg-earth-warm text-white shadow-lg"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            Learning Timeline
          </button>
        </div>
      </div>

      {viewMode === "3d" ? (
        /* 3D Network View */
        <div
          ref={containerRef}
          className="relative w-full h-[700px] glass rounded-3xl overflow-hidden border border-white/20 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ perspective: "1000px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* 3D Tech Nodes */}
              {techStack.map((node, index) => {
                const style = get3DTransform(node)
                const isSelected = selectedNode === node.id

                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: style.opacity, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: style.transform,
                      zIndex: style.zIndex,
                    }}
                    onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        relative p-4 rounded-2xl glass shadow-lg
                        transition-all duration-300
                        ${isSelected ? "ring-4 ring-earth-warm shadow-2xl bg-earth-warm/20" : ""}
                      `}
                    >
                      <div className="w-16 h-16 flex items-center justify-center text-3xl mb-2">{node.icon}</div>
                      <div className="text-xs font-medium text-center text-foreground/80 whitespace-nowrap">
                        {node.name}
                      </div>

                      {/* Proficiency Ring */}
                      <div className="absolute -top-2 -right-2 w-8 h-8">
                        <svg className="w-8 h-8 transform -rotate-90">
                          <circle
                            cx="16"
                            cy="16"
                            r="14"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            className="text-foreground/20"
                          />
                          <circle
                            cx="16"
                            cy="16"
                            r="14"
                            stroke="hsl(var(--earth-warm))"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 14}`}
                            strokeDashoffset={`${2 * Math.PI * 14 * (1 - node.proficiency / 100)}`}
                            className="transition-all duration-500"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-earth-warm">
                          {node.proficiency}
                        </div>
                      </div>

                      {/* Connection Lines */}
                      {isSelected &&
                        node.connections.map((connId) => {
                          const connectedNode = techStack.find((n) => n.id === connId)
                          if (!connectedNode) return null

                          const connStyle = get3DTransform(connectedNode)

                          return (
                            <motion.div
                              key={connId}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.6 }}
                              className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-r from-earth-warm to-warm-orange origin-left"
                              style={{
                                height: "2px",
                                transform: `rotate(${Math.atan2(
                                  connectedNode.y - node.y,
                                  connectedNode.x - node.x,
                                )}rad)`,
                                width: `${Math.sqrt(
                                  Math.pow(connectedNode.x - node.x, 2) + Math.pow(connectedNode.y - node.y, 2),
                                )}px`,
                              }}
                            />
                          )
                        })}
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute top-4 right-4 text-xs text-foreground/60 text-right space-y-1">
            <p>🖱️ Drag to rotate the 3D space</p>
            <p>🖱️ Click nodes to explore details</p>
            <p>📊 Rings show proficiency levels</p>
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 left-4 space-y-2">
            <Button size="sm" variant="ghost" onClick={() => setRotation({ x: 0, y: 0 })} className="glass text-xs">
              Reset View
            </Button>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Learning Timeline View */
        <div className="space-y-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-earth-warm to-warm-orange rounded-full" />

            {techStack
              .sort(
                (a, b) =>
                  new Date(a.learningJourney.startDate).getTime() - new Date(b.learningJourney.startDate).getTime(),
              )
              .map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6 pb-8"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-earth-warm to-warm-orange rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {tech.icon}
                  </div>

                  {/* Content */}
                  <Card className="flex-1 glass border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{tech.name}</h3>
                          <p className="text-sm text-foreground/60">
                            Started:{" "}
                            {new Date(tech.learningJourney.startDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                            })}
                          </p>
                        </div>
                        <Badge className="bg-earth-warm text-white">{tech.proficiency}% Proficiency</Badge>
                      </div>

                      <p className="text-foreground/70 mb-4">{tech.description}</p>

                      {/* Learning Milestones */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Learning Milestones:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {tech.learningJourney.milestones.map((milestone, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-earth-warm rounded-full" />
                              <span className="text-sm text-foreground/70">{milestone}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Proficiency Bar */}
                      <div className="mt-4">
                        <div className="flex justify-between text-sm text-foreground/60 mb-1">
                          <span>Current Proficiency</span>
                          <span>{tech.proficiency}%</span>
                        </div>
                        <div className="w-full bg-foreground/10 rounded-full h-3">
                          <motion.div
                            className="bg-gradient-to-r from-earth-warm to-warm-orange h-3 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.proficiency}%` }}
                            transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      )}

      {/* Selected Tech Details */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8"
          >
            <Card className="glass border-0 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{selectedTech.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{selectedTech.name}</h3>
                      <Badge className="bg-earth-warm text-white">{selectedTech.proficiency}% Proficiency</Badge>
                    </div>
                    <p className="text-foreground/70 mb-4">{selectedTech.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Learning Journey</h4>
                        <p className="text-sm text-foreground/60 mb-2">
                          Started: {new Date(selectedTech.learningJourney.startDate).toLocaleDateString()}
                        </p>
                        <div className="space-y-1">
                          {selectedTech.learningJourney.milestones.map((milestone, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-earth-warm rounded-full" />
                              <span className="text-sm text-foreground/70">{milestone}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {selectedTech.connections.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-2">Connected Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedTech.connections.map((connId) => {
                              const connTech = techStack.find((t) => t.id === connId)
                              return connTech ? (
                                <Badge key={connId} variant="secondary" className="text-xs">
                                  {connTech.icon} {connTech.name}
                                </Badge>
                              ) : null
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
