"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Code, Brain, Server, Heart, Github } from "lucide-react"

const upcomingTopics = [
  {
    icon: Brain,
    title: "Prompt Engineering & LLMs",
    description: "Designing effective prompts and integrating AI into real applications",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Building scalable APIs, database design, and system patterns",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Code,
    title: "JavaScript Problem Solving",
    description: "Algorithm challenges, debugging techniques, and code optimization",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Heart,
    title: "Dev Tools & Retrospectives",
    description: "Project insights, favorite tools, and lessons learned along the way",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
]

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-earth">Latest Insights</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto font-medium"
          >
            Curated thoughts on code, AI, and creative problem-solving.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8 text-center">
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 bg-primary/10 rounded-full">
                    <motion.div
                      animate={{ rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                    >
                      📚
                    </motion.div>
                  </div>
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold mb-4 text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Blog posts coming soon!
                </motion.h3>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="outline"
                    className="button-bounce hover:scale-105 hover:bg-primary hover:bg-opacity-90 hover:text-primary-foreground bg-transparent transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com/cdepalma32?tab=repositories" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Projects
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="button-bounce hover:scale-105 hover:bg-primary hover:bg-opacity-90 hover:text-primary-foreground bg-transparent transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/crystal-depalma-496710304/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Topics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-foreground mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Topics I'm excited to dive into
              </motion.h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {upcomingTopics.map((topic, index) => {
                const Icon = topic.icon
                return (
                  <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover-lift hover:shadow-md hover:scale-105 border-border/50 bg-card/30 backdrop-blur-sm h-full group cursor-default transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`p-3 rounded-lg ${topic.bgColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className={`h-6 w-6 ${topic.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                              {topic.title}
                            </h4>
                            <p className="text-sm text-foreground/70 leading-relaxed">{topic.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Developer Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <motion.blockquote
                  className="text-lg md:text-xl font-medium text-foreground/80 italic mb-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  "If debugging is the process of removing bugs, then programming must be the process of putting them
                  in."
                </motion.blockquote>

                <motion.cite
                  className="text-sm text-foreground/60 not-italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  viewport={{ once: true }}
                >
                  —often attributed to Edsger W. Dijkstra
                </motion.cite>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
