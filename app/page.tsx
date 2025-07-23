"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Menu, X, Code } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import TechStackVisualization from "@/components/tech-stack-visualization"
import ProjectShowcase from "@/components/project-showcase"
import BlogPreview from "@/components/blog-preview"
import AboutSection from "@/components/about-section"
import ContactForm from "@/components/contact-form"
import EndorsementsTestimonials from "@/components/endorsements-testimonials"
import { useCommandPaletteShortcuts } from "@/hooks/use-command-palette"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Enable command palette shortcuts
  useCommandPaletteShortcuts()

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.div
      className="min-h-screen transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Hamburger Menu - Left Side */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 p-3 w-12 h-12"
              >
                {isMenuOpen ? (
                  <X className="h-8 w-8 text-gray-800 dark:text-white" />
                ) : (
                  <Menu className="h-8 w-8 text-gray-800 dark:text-white" />
                )}
              </Button>
            </div>

            {/* Theme Toggle - Right Side */}
            <div className="flex items-center">
              <div className="scale-125">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Horizontal Dropdown Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-16 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-lg shadow-2xl py-4"
            >
              {/* Mobile: Vertical Layout */}
              <div className="flex flex-col space-y-2 md:hidden">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 font-bold text-lg tracking-wide hover:scale-105 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 rounded-md mx-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Desktop: Horizontal Layout */}
              <div className="hidden md:flex md:justify-between md:items-center md:px-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 font-bold text-base tracking-wide hover:scale-105 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section - Mountain Background */}
      <motion.section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{
          backgroundImage: "url('/images/main-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        {/* Parallax effect */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-6xl md:text-7xl lg:text-8xl text-white font-extrabold tracking-wide"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
                }}
              >
                CRYSTAL DEPALMA
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-medium leading-relaxed"
                style={{
                  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                }}
              >
                Prompt-first Full-Stack Engineer specializing in backend architecture, building secure, AI-powered tools
                with Node.js, MongoDB, and React. Passionate about resilient APIs, seamless data flow, and
                human-centered system design.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 shadow-2xl button-bounce hover-glow border-0 font-semibold"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Code className="mr-2 h-5 w-5" />
                Explore My Builds
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex justify-center space-x-8 pt-4"
            >
              {[
                { href: "https://github.com/cdepalma32", icon: Github },
                { href: "https://www.linkedin.com/in/crystal-depalma-496710304/", icon: Linkedin },
                {
                  onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
                  icon: Mail,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-14 w-14 hover:bg-white/10 hover-lift bg-white/5 backdrop-blur-sm rounded-full border border-white/20"
                    {...(item.href ? { asChild: true } : { onClick: item.onClick })}
                  >
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <item.icon className="h-7 w-7 text-white drop-shadow-lg" />
                      </a>
                    ) : (
                      <item.icon className="h-7 w-7 text-white drop-shadow-lg" />
                    )}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section - Nature Room */}
      <motion.div
        className="room-about mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <AboutSection />
      </motion.div>

      {/* Tech Stack Visualization - Creative Room */}
      <motion.section
        id="tech"
        className="py-24 room-tech mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TechStackVisualization />
        </div>
      </motion.section>

      {/* Projects Section - Professional Room */}
      <motion.div
        className="room-projects mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ProjectShowcase />
      </motion.div>

      {/* Endorsements & Testimonials Section - Trust Room */}
      <motion.div
        className="room-contact mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <EndorsementsTestimonials />
      </motion.div>

      {/* Blog Preview - Cozy Room */}
      <motion.div
        className="room-blog mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <BlogPreview />
      </motion.div>

      {/* Contact Section - Fresh Room */}
      <motion.section
        id="contact"
        className="py-24 room-contact mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-nature">Let's Connect</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-medium">
              Whether you're building something new, hiring for your team, or just want to chat tech — I'd love to hear
              from you.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-8 bg-background/80 backdrop-blur-sm border-t border-border mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground/60">
            © 2025 Crystal DePalma.
            <br />
            Crafted with <span className="inline-block">❤️</span> & ☕︎
          </p>
        </div>
      </motion.footer>
    </motion.div>
  )
}
