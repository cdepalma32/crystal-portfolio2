"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle, Mail, MessageSquare, User, X } from "lucide-react"
import emailjs from "@emailjs/browser"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })
  const [emailCopied, setEmailCopied] = useState(false)
  const [showSuccessToast, setShowSuccessToast] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "loading", message: "Sending message..." })

    try {
      // Check if environment variables are available
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      console.log("EmailJS Config Check:", {
        serviceId: serviceId ? "✓ Found" : "✗ Missing",
        templateId: templateId ? "✓ Found" : "✗ Missing",
        publicKey: publicKey ? "✓ Found" : "✗ Missing",
      })

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.")
      }

      // Initialize EmailJS with your public key
      emailjs.init(publicKey)

      // Send email using EmailJS with template variables that match your EmailJS template
      // Your template uses: {{user_name}}, {{user_email}}, {{message}}
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      }

      console.log("Sending email with template params:", templateParams)

      const result = await emailjs.send(serviceId, templateId, templateParams)

      console.log("EmailJS Success:", result)

      if (result.status === 200) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })

        // Show success toast
        setShowSuccessToast(true)
        setTimeout(() => setShowSuccessToast(false), 5000)
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`)
      }
    } catch (error) {
      console.error("EmailJS Error Details:", error)

      let errorMessage = "Failed to send message. Please try again or contact me directly at crystaldepalma@yahoo.com"

      if (error instanceof Error) {
        console.log("Error message:", error.message)

        if (error.message.includes("configuration is missing")) {
          errorMessage =
            "Email service is not properly configured. Please contact me directly at crystaldepalma@yahoo.com"
        } else if (error.message.includes("Invalid template ID")) {
          errorMessage = "Email template error. Please contact me directly at crystaldepalma@yahoo.com"
        } else if (error.message.includes("invalid login") || error.message.includes("auth")) {
          errorMessage =
            "Email service authentication failed. The service may need to be reconfigured. Please contact me directly at crystaldepalma@yahoo.com"
        } else if (error.message.includes("Bad Request")) {
          errorMessage = "Email service configuration error. Please contact me directly at crystaldepalma@yahoo.com"
        }
      }

      setStatus({
        type: "error",
        message: errorMessage,
      })
    }
  }

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("crystaldepalma@yahoo.com")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

  return (
    <>
      {/* Success Toast */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3 max-w-sm"
          >
            <CheckCircle className="h-6 w-6 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold">Message Sent!</p>
              <p className="text-sm opacity-90">Thanks for reaching out. I'll get back to you soon!</p>
            </div>
            <button
              onClick={() => setShowSuccessToast(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className="max-w-2xl mx-auto hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <motion.div
              className="flex justify-center mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h3>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </motion.div>

              {/* Status Message */}
              {status.type !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-600 border border-green-500/20"
                      : status.type === "error"
                        ? "bg-red-500/10 text-red-600 border border-red-500/20"
                        : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                  }`}
                >
                  {status.type === "success" && <CheckCircle className="h-5 w-5" />}
                  {status.type === "error" && <AlertCircle className="h-5 w-5" />}
                  {status.type === "loading" && (
                    <div className="h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  )}
                  <span className="text-sm font-medium">{status.message}</span>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid || status.type === "loading"}
                  className="w-full button-bounce hover-glow"
                >
                  {status.type === "loading" ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>

            {/* Alternative Contact Methods */}
            <motion.div
              className="mt-8 pt-6 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-center text-sm text-foreground/60 mb-4">Or reach out directly:</p>
              <div className="flex justify-center space-x-6">
                <button
                  onClick={copyEmailToClipboard}
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  crystaldepalma@yahoo.com
                </button>
                {emailCopied && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-green-600 flex items-center gap-1"
                  >
                    📋 Copied to clipboard!
                  </motion.span>
                )}
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  )
}
