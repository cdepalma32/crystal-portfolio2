"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code, Database, Brain, BookOpen } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "IntPrepApp",
    description:
      "Full-stack MERN application designed for interactive technical interview preparation with custom scrambling logic, topic filters, and user progress tracking.",
    longDescription:
      "A fully custom interview preparation platform built using the MERN stack. It features unique scrambling logic for anagram-style quizzes, real-time topic filtering, and user progress tracking. Designed with secure JWT authentication and REST APIs, the app mirrors enterprise login flows. Frontend is styled with Tailwind and ShadCN UI, offering a clean, modern dashboard experience tailored for practicing technical interviews.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-22%20193944-7zrh8CpBD6P0uISCM3RxEkIMUwWkf4.png", // Updated to use the purple background MERN stack banner
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Radix UI",
      "JWT",
      "REST APIs",
    ],
    category: "Full-Stack",
    featured: true,
    github: "https://github.com/cdepalma32/intPrepApp",
    live: null,
    status: "In Development",
  },
  {
    id: 2,
    title: "TaxBuddy AI",
    description:
      "AI-powered app delivering personalized tax-saving suggestions using Angular, FastAPI, and Azure OpenAI.",
    longDescription:
      "A cloud-native, full-stack AI application that uses Angular on the frontend and FastAPI on the backend to provide users with personalized, LLM-powered tax advice. It demonstrates enterprise-level architectural patterns including secure JWT-based authentication, Azure SQL for structured data storage, and OpenAI integration for intelligent insights. Built as a showcase of scalable backend logic, modular service design, and real-world AI use cases.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/promptEngineerIMG-RIWJd6UJO5U1Hag4lGSCcj6Gu0tmQj.webp",
    technologies: [
      "Angular",
      "FastAPI",
      "Python",
      "Azure SQL",
      "JWT",
      "Pydantic",
      "Azure OpenAI",
      "Bootstrap",
      "TypeScript",
    ],
    category: "AI Integration",
    featured: false,
    github: "https://github.com/cdepalma32/TaxBuddyAI",
    live: null,
    status: "In Development",
  },
  {
    id: 3,
    title: "Get-LiTerary-extended",
    description:
      "Full-stack group project where I served as the primary backend developer, implementing authentication, API endpoints, and data flow.",
    longDescription:
      "An earlier project during my bootcamp days to show my growth.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gitLITIMG.jpg-yNpCbPuYTXrDlCQbg7VReeNXUC3oTi.jpeg",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Handlebars", "JavaScript"],
    category: "Backend",
    featured: false,
    github: "https://github.com/cdepalma32/Get-LITerary-extended",
    live: null,
    status: "Legacy Project",
  },
  {
    id: 4,
    title: "CodeLab",
    description:
      "A personal JavaScript study guide designed to document and test algorithmic thinking and core logic patterns.",
    longDescription:
      "CodeLab functions as an interactive JavaScript reference and problem-solving journal. It was built to reinforce my understanding of core programming concepts like recursion, sorting, and data structures. Through live code testing, I could prototype logic, annotate patterns, and revisit solved challenges—all in one cohesive tool. Created to deepen technical clarity while preparing for real-world interview scenarios and algorithmic assessments.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-22%20195022-5YR5y2lxZEIJANekRUJOUWJU9VOzDq.png", // Updated to use the simplified CodeLab banner
    technologies: [
      "JavaScript",
      "Node.js",
      "VS Code + Console",
      "Modular File Structure",
      "Comment-based Documentation",
    ],
    category: "Technical Guide",
    featured: true,
    github: "https://github.com/cdepalma32/CodeLab",
    live: null,
    status: "In Development",
  },
]

const categories = ["All", "Full-Stack", "Backend", "AI Integration", "Technical Guide"]

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full-Stack":
        return Code
      case "Backend":
        return Database
      case "AI Integration":
        return Brain
      case "Technical Guide":
        return BookOpen
      default:
        return Code
    }
  }

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-nature">Featured Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A showcase of full-stack applications, backend systems, and AI-integrated solutions that demonstrate my
            expertise in building scalable, user-focused software.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = getCategoryIcon(category)
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="button-bounce"
              >
                {category !== "All" && <Icon className="mr-2 h-4 w-4" />}
                {category}
              </Button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const Icon = getCategoryIcon(project.category)
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={project.featured ? "lg:col-span-2" : ""}
                >
                  <Card className="h-full hover-lift border-border/50 bg-card/50 backdrop-blur-sm group overflow-hidden">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className={`w-full transition-transform duration-500 group-hover:scale-105 object-cover h-64`} // Use standard height for all projects
                        style={
                          project.id === 1
                            ? { objectPosition: "center center" } // Center positioning for the simplified banner
                            : project.id === 4
                              ? { objectPosition: "center center" } // Ensure CodeLab banner is perfectly centered
                              : { objectPosition: "center center" } // Center positioning for all other projects
                        }
                        draggable={false}
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-background/90 text-foreground">{project.status}</Badge>
                       {/*} {project.featured && <Badge className="bg-primary/90 text-primary-foreground">Featured</Badge>} */}
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-background/90">
                          <Icon className="mr-1 h-3 w-3" />
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {selectedProject === project.id ? project.longDescription : project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs tech-badge-hover">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-3">
                          {project.github && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.live ? (
                      <Button size="sm" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                            </a>
                              </Button>
                          ) : project.id !== 3 && project.id !== 4 ? ( // Only show "Coming Soon" for others
                        <Button size="sm" variant="outline" disabled>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo (Coming Soon)
                          </Button>
                          ) : null}

                          {!project.github && !project.live && (
                            <Button size="sm" variant="outline" disabled>
                              <Github className="mr-2 h-4 w-4" />
                              Code (Coming Soon)
                            </Button>
                          )}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                        >
                          {selectedProject === project.id ? "Less" : "More"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* View All Projects on GitHub Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="button-bounce hover:bg-primary hover:text-primary-foreground bg-transparent"
            asChild
          >
            <a href="https://github.com/cdepalma32" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
