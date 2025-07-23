"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Lauren B.",
    role: "Data Engineering Manager",
    company: "",
    content:
      "I have had the pleasure of working with Crystal in a mentoring capacity, and I am continually impressed by her dedication to learning and growth. Her ability to work independently, coupled with her exceptional communication skills, makes her a standout collaborator. Crystal's deep technical understanding of full stack development, AI, and more ensures she consistently delivers high-quality results.",
    rating: 5,
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LaurenBeaver_headshot.jpg-L5Nvg80quQaS9vbQio2juvwjJUtmL1.jpeg",
    relationship: "Mentor",
  },
]

export default function EndorsementsTestimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-earth">Endorsements & Testimonials</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium tracking-wide mb-6">
            Words like these remind me why I love what I do.
          </p>
        </motion.div>

        {/* Featured Testimonials */}
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-amber-800/8 to-teal-800/10 rounded-2xl blur-xl transform scale-105 opacity-60" />

              <Card className="relative hover-lift border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl group">
                <CardContent className="p-8">
                  {/* Quote Icon with Animation */}
                  <motion.div
                    className="flex justify-center mb-6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/15 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Quote className="h-6 w-6 text-primary group-hover:text-primary/90 transition-colors duration-300" />
                    </motion.div>
                  </motion.div>

                  {/* Stars */}
                  <motion.div
                    className="flex justify-center space-x-1 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.15 + 0.3 + i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Content */}
                  <motion.blockquote
                    className="text-lg text-foreground/80 italic leading-relaxed mb-8 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    "{testimonial.content}"
                  </motion.blockquote>

                  {/* Subtle divider line */}
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-8" />

                  {/* Author Info */}
                  <motion.div
                    className="flex flex-col items-center space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover object-center border-2 border-border/50 shadow-md"
                    />
                    <div className="text-center">
                      <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                      <div className="text-sm text-foreground/70 mb-2">{testimonial.role}</div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {testimonial.relationship}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
