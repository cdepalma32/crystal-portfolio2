"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const milestones = [
  {
    date: "Dec 2023",
    title: "Enrolled in Rutgers Full-Stack Coding Bootcamp",
    description: "Part-Time, 400+ hours",
  },
  {
    date: "Feb 2024",
    title: "Built foundational backend skills",
    description: "REST APIs, Express routing, MongoDB CRUD",
  },
  {
    date: "Mar 2024",
    title: "Completed first full-stack group project Get-LITerary",
    description: "As Backend Developer",
    projectLink: "https://github.com/cdepalma32/Get-LITerary-extended",
    projectName: "Get-LITerary",
  },
  {
    date: "June 2024",
    title: "Graduated bootcamp",
    description: "400+ total hours including projects + team collab",
  },
  {
    date: "Nov 2024",
    title: "Began building IntPrepApp (In Progress)",
    description: "Full-stack interview prep app with quizzes, tracking, and secure login",
    projectLink: "https://github.com/cdepalma32/intPrepApp",
    projectName: "IntPrepApp",
  },
  {
    date: "Mar 2025",
    title: "Launched first developer portfolio",
    description:
      "Showcasing backend-focused case studies. Deepened skills in backend optimization, AI prompting, and real-world debugging",
  },
  {
    date: "Apr 2025",
    title: "Refactored IntPrepApp & began mentorship with Corey Bott",
    description:
      "Refresh token rotation, progress tracking, quiz logic. Focused on resume polish, LinkedIn strategy, and networking",
    projectLink: "https://github.com/cdepalma32/intPrepApp",
    projectName: "IntPrepApp",
  },
  {
    date: "May 2025",
    title: "Mentorship with Seif Dorani",
    description: "Technical guidance, mock interviews, and role alignment",
  },
  {
    date: "June 2025",
    title: "Mentorship with Lauren Beaver & launched CodeLab",
    description:
      "Interview readiness and outreach expansion. Prototyping 10+ JavaScript algorithms and SQL joins for interview prep. Integrated **Augment Code** (VS Code extension) for auto-generated **Jest** unit tests",
    projectLink: "https://github.com/cdepalma32/CodeLab",
    projectName: "CodeLab",
  },
  {
    date: "July 2025",
    title: "AI exploration & portfolio redesign",
    description:
      "**OpenAI APIs**, **LangChain**, vector databases. Built AI-ready portfolio with **Next.js 14**, **Tailwind**, **ShadCN UI**, **EmailJS** — includes dark mode, keyboard command palette, animations, and mobile optimization",
  },
]

export default function AboutSection() {
  const renderDescription = (description: string, link?: string, linkText?: string) => {
    if (!link || !linkText) {
      // Bold tech names and tools
      return description.split(/(\*\*[^*]+\*\*)/).map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          )
        }
        return part
      })
    }

    // Handle links within descriptions
    const parts = description.split(linkText)
    if (parts.length === 1) return description

    return (
      <>
        {parts[0]}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/60"
        >
          {linkText}
        </a>
        {parts[1]?.split(/(\*\*[^*]+\*\*)/).map((part, index) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={index} className="font-semibold text-foreground">
                {part.slice(2, -2)}
              </strong>
            )
          }
          return part
        })}
      </>
    )
  }

  const renderTitle = (title: string, projectLink?: string, projectName?: string) => {
    if (!projectLink || !projectName) {
      return title
    }

    const parts = title.split(projectName)
    if (parts.length === 1) return title

    return (
      <>
        {parts[0]}
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/60"
        >
          {projectName}
        </a>
        {parts[1]}
      </>
    )
  }

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-earth">About Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Headshot + Mentorship Matters + Beyond the Code */}
          <div className="space-y-20">
            {/* Headshot - Enhanced for better quality */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-border/20 hover-lift">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aboutMeImg.jpg-ozGCmBUxpZ28HtCfbVLAvvFeXoJKcD.jpeg"
                  alt="Crystal DePalma - Full-Stack Developer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  style={{
                    imageRendering: "high-quality",
                    filter: "contrast(1.05) brightness(1.02) saturate(1.1)",
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* Beyond the Code */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 gradient-sky">Beyond the Code</h3>
              <Card className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-foreground/70 leading-relaxed">
                    When I'm not deep in backend architecture, exploring AI capabilities, or designing scalable systems,
                    I recharge through movement, creativity, and connection. As a lifelong athlete — whether I'm on the
                    tennis court, in the gym, or swimming laps — I thrive on challenge, focus, and flow.
                  </p>
                  <p className="text-foreground/70 leading-relaxed mt-4">
                    I love learning about the world. My travels through Italy — from Capri to Positano and Bari —
                    deepened my appreciation for culture and design, and I'm excited to explore Greece and southern
                    Italy next.
                  </p>
                  <p className="text-foreground/70 leading-relaxed mt-4">
                    My friends know me as equal parts goofball and grounding presence. When I'm not coding, you'll find
                    me spending time with family, learning new recipes, exploring the outdoors, or dreaming up my next
                    big adventure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mentorship Matters */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 gradient-earth">Mentorship Matters</h3>
              <Card className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    Throughout 2025, I've actively sought out mentorship from seasoned professionals to sharpen my
                    technical abilities and prepare for the job market. These connections have shaped how I approach
                    interviews, build systems, and communicate my value:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-foreground">Corey B.</span>
                        <span className="text-foreground/70">
                          {" "}
                          – Guided me in credential positioning, resume clarity, and portfolio storytelling
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-foreground">Seif D.</span>
                        <span className="text-foreground/70">
                          {" "}
                          – Provided detailed feedback on backend architecture, mock interviews, and confidence-building
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-foreground">Lauren B.</span>
                        <span className="text-foreground/70">
                          {" "}
                          – Helped strengthen my outreach strategy and refine my interview process
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/60 text-sm mt-6 italic">
                    These relationships reflect my commitment to continuous growth, proactive networking, and building
                    alongside those who inspire me.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column: Notable Wins & Milestones Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-sky">Notable Wins & Milestones</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-primary/20"></div>

              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start space-x-4"
                  >
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-xs font-medium">
                          {milestone.date}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-foreground mb-1 leading-tight">
                        {renderTitle(milestone.title, milestone.projectLink, milestone.projectName)}
                      </h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {renderDescription(milestone.description, milestone.link, milestone.linkText)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
