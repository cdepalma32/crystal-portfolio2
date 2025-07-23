"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "Crystal's full-stack expertise and attention to detail made our project a huge success. Her ability to integrate AI features seamlessly was impressive.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content:
      "Working with Crystal was fantastic. She delivered a robust backend system that scaled perfectly with our growing user base.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Developer",
    company: "InnovateLab",
    content:
      "Crystal's prompt-first approach to development is refreshing. She understands both the technical and business sides perfectly.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            {/* Stars */}
            <div className="flex justify-center space-x-1">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-lg md:text-xl text-foreground/80 italic leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-foreground/60">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button variant="ghost" size="icon" onClick={goToPrevious} className="hover:bg-foreground/5">
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>

          <Button variant="ghost" size="icon" onClick={goToNext} className="hover:bg-foreground/5">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
