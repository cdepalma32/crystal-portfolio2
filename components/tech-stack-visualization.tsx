"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Brain } from "lucide-react"

// Updated tech categories with realistic percentages
const techCategories = [
  {
    title: "Actively Used Technologies",
    subtitle: "Technologies I've used hands-on in real projects and am confident working with",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    technologies: [
      { name: "Node.js", level: 90, description: "Backend runtime for IntPrepApp and portfolio APIs" },
      { name: "Express.js", level: 90, description: "Server framework powering all my full-stack routes" },
      { name: "MongoDB", level: 85, description: "Primary database for user data and quiz content" },
      { name: "JWT Authentication", level: 90, description: "Secure login with refresh token rotation" },
      { name: "React", level: 85, description: "Frontend library for IntPrepApp and components" },
      { name: "Tailwind CSS", level: 80, description: "Styling framework for responsive designs" },
      { name: "Next.js", level: 70, description: "Framework for portfolio and SSR applications" },
      { name: "TypeScript", level: 60, description: "Type safety in IntPrepApp2 refactor" },
      { name: "EmailJS / Resend", level: 60, description: "Contact form integration and email services" },
    ],
  },
  {
    title: "Exploring / Learning Next",
    subtitle: "Actively studying and prototyping with these tools as I expand my skillset",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    technologies: [
      { name: "OpenAI API", level: 50, description: "Integrating AI hints and resume guidance features" },
      { name: "Prompt Engineering", level: 50, description: "Optimizing AI responses for user interactions" },
      { name: "LangChain", level: 40, description: "Exploring AI application frameworks and chains" },
      { name: "Docker", level: 40, description: "Learning containerization for app deployment" },
      { name: "AWS", level: 30, description: "Cloud hosting and services for scalable apps" },
      { name: "Vector Databases", level: 30, description: "Studying for future AI-powered search features" },
    ],
  },
]

const coreCategories = [
  {
    label: "Frontend",
    icon: "💻",
    description: "Building responsive, interactive user interfaces",
    techs: [
      {
        name: "React.js",
        icon: "⚛️",
        color: "text-blue-500",
        level: "proficient",
        description: "Main frontend library for IntPrepApp",
      },
      {
        name: "Next.js",
        icon: "▲",
        color: "text-gray-800 dark:text-white",
        level: "comfortable",
        description: "Framework for portfolio and AI integrations",
      },
      {
        name: "Tailwind CSS",
        icon: "🎨",
        color: "text-cyan-500",
        level: "proficient",
        description: "Styling framework actively using and customizing",
      },
      {
        name: "TypeScript",
        icon: "🔷",
        color: "text-blue-600",
        level: "comfortable",
        description: "Used in IntPrepApp2 and upskilling path",
      },
      {
        name: "ShadCN UI",
        icon: "🧩",
        color: "text-slate-600 dark:text-slate-400",
        level: "comfortable",
        description: "Component library for forms and layouts",
      },
    ],
  },
  {
    label: "Backend",
    icon: "🛠️",
    description: "Server-side architecture and API development",
    techs: [
      {
        name: "Node.js",
        icon: "🟢",
        color: "text-green-500",
        level: "proficient",
        description: "Primary backend runtime for IntPrepApp",
      },
      {
        name: "Express.js",
        icon: "🚀",
        color: "text-gray-700 dark:text-gray-300",
        level: "proficient",
        description: "Main server framework powering full-stack routes",
      },
      {
        name: "MongoDB",
        icon: "🍃",
        color: "text-green-600",
        level: "proficient",
        description: "Primary database for all projects",
      },
      {
        name: "JWT",
        icon: "🔐",
        color: "text-yellow-600",
        level: "proficient",
        description: "Access + refresh token auth with rotation",
      },
      {
        name: "Mongoose",
        icon: "📊",
        color: "text-green-700",
        level: "proficient",
        description: "Schema-based modeling for MongoDB",
      },
    ],
  },
  {
    label: "AI & Prompt Engineering",
    icon: "🧠",
    description: "Integrating AI capabilities into applications",
    techs: [
      {
        name: "OpenAI API",
        icon: "🤖",
        color: "text-purple-600",
        level: "learning",
        description: "Integrating hint generation into IntPrepApp",
      },
      {
        name: "Prompt Engineering",
        icon: "💭",
        color: "text-indigo-500",
        level: "learning",
        description: "Building AI résumé guide and studying LLM behavior",
      },
      {
        name: "LangChain",
        icon: "🔗",
        color: "text-purple-500",
        level: "learning",
        description: "Future upskilling for real-time AI tools",
      },
      {
        name: "Vector DB",
        icon: "🗄️",
        color: "text-cyan-600",
        level: "learning",
        description: "Future integration for AI applications",
      },
    ],
  },
  {
    label: "Development Tools & Infrastructure",
    icon: "⚙️",
    description: "Essential tools for development workflow and deployment",
    techs: [
      {
        name: "VS Code",
        icon: "💻",
        color: "text-blue-500",
        level: "proficient",
        description: "Primary code editor with extensions",
      },
      {
        name: "Git/GitHub",
        icon: "🌿",
        color: "text-orange-600",
        level: "proficient",
        description: "Version control and collaboration",
      },
      {
        name: "Postman",
        icon: "📮",
        color: "text-orange-500",
        level: "proficient",
        description: "API testing and development",
      },
      {
        name: "MongoDB Compass",
        icon: "🍃",
        color: "text-green-600",
        level: "proficient",
        description: "Database management and visualization",
      },
      {
        name: "Jest",
        icon: "🧪",
        color: "text-red-500",
        level: "comfortable",
        description: "Unit and integration testing",
      },
      {
        name: "Vercel",
        icon: "🔺",
        color: "text-black dark:text-white",
        level: "proficient",
        description: "Portfolio deployment optimized for Next.js",
      },
      {
        name: "Docker",
        icon: "🐳",
        color: "text-blue-400",
        level: "learning",
        description: "Learning roadmap to containerize apps",
      },
      {
        name: "AWS",
        icon: "☁️",
        color: "text-orange-500",
        level: "learning",
        description: "S3/EC2 for scalable cloud deployment",
      },
    ],
  },
]

const getLevelBadge = (level: string) => {
  switch (level) {
    case "proficient":
      return { icon: "★", color: "text-yellow-500", bg: "bg-yellow-500/10" }
    case "comfortable":
      return { icon: "⚡", color: "text-blue-500", bg: "bg-blue-500/10" }
    case "learning":
      return { icon: "🧪", color: "text-green-500", bg: "bg-green-500/10" }
    default:
      return { icon: "★", color: "text-yellow-500", bg: "bg-yellow-500/10" }
  }
}

export default function TechStackVisualization() {
  return (
    <div className="space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="gradient-sky">Tech Stack & Expertise</span>
        </h2>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my technical skills, from backend systems to AI integration and deployment.
        </p>
      </motion.div>

      {/* Progress Bars - Updated with realistic categories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-foreground">Current Skill Assessment</h3>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {techCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-6">
                      <div className={`p-3 rounded-lg ${category.bgColor} mr-4 flex-shrink-0`}>
                        <Icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-foreground mb-1">{category.title}</h3>
                        <p className="text-sm text-foreground/60 leading-relaxed">{category.subtitle}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-foreground">{tech.name}</span>
                            <span className="text-sm text-foreground/60">{tech.level}%</span>
                          </div>
                          <div className="w-full bg-secondary/30 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full bg-gradient-to-r ${
                                category.color.includes("blue")
                                  ? "from-blue-500 to-blue-600"
                                  : category.color.includes("purple")
                                    ? "from-purple-500 to-purple-600"
                                    : "from-green-500 to-green-600"
                              }`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.level}%` }}
                              transition={{ duration: 1, delay: techIndex * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <p className="text-xs text-foreground/60">{tech.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Only show the note for the "Exploring / Learning Next" category */}
                    {category.title === "Exploring / Learning Next" && (
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <p className="text-sm text-foreground/70 italic">
                          💡 <strong>Currently exploring:</strong> Modern AI tools and deployment infrastructure
                          (LangChain, Docker, AWS) as I design my next wave of app integrations.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Consolidated Tech Stack - Updated with combined categories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border/50 p-6 md:p-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 gradient-nature">My Complete Tech Toolkit</h3>
            <p className="text-foreground/60 text-sm">
              Technologies, tools, and frameworks I use to build full-stack applications
            </p>
          </div>

          <div className="space-y-12">
            {coreCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h4 className="text-lg font-bold text-foreground">{category.label}</h4>
                  </div>
                  <p className="text-sm text-foreground/60 text-center">{category.description}</p>
                </div>

                {/* Divider Line */}
                <div className="flex justify-center">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>

                {/* Tech Grid - Updated with consistent spacing */}
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14">
                  {category.techs.map((tech, index) => {
                    const levelBadge = getLevelBadge(tech.level)
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center space-y-3 group cursor-pointer relative"
                      >
                        {/* Tech Icon */}
                        <motion.div
                          whileHover={{
                            scale: 1.15,
                            y: -6,
                            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                          }}
                          className="relative w-16 h-16 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 flex items-center justify-center text-2xl md:text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:border-primary/30"
                        >
                          {tech.icon}

                          {/* Level Badge */}
                          <div
                            className={`absolute -top-2 -right-2 w-6 h-6 ${levelBadge.bg} rounded-full flex items-center justify-center text-xs ${levelBadge.color}`}
                          >
                            {levelBadge.icon}
                          </div>
                        </motion.div>

                        {/* Tech Name */}
                        <motion.div className="text-center space-y-1" whileHover={{ y: -2 }}>
                          <span
                            className={`text-sm font-medium ${tech.color} group-hover:scale-105 transition-all duration-300 block`}
                          >
                            {tech.name}
                          </span>
                        </motion.div>

                        {/* Tooltip on Hover */}
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          whileHover={{ opacity: 1, y: 0, scale: 1 }}
                          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg p-2 shadow-xl z-10 w-48 pointer-events-none"
                        >
                          <p className="text-xs text-foreground/80 text-center leading-relaxed">{tech.description}</p>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-border/30"
          >
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">★</span>
                <span className="text-foreground/60">Proficient</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-500">⚡</span>
                <span className="text-foreground/60">Comfortable</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">🧪</span>
                <span className="text-foreground/60">Learning</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
