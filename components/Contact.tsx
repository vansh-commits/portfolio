"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { personalInfo } from "../data/data"
import { toast } from "@/hooks/use-toast"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isValidEmail = (value: string) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value)
  const isFormValid = name.trim().length > 1 && isValidEmail(email) && message.trim().length >= 10

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isFormValid) {
      toast({ title: "Incomplete form", description: "Please fill all fields correctly." })
      return
    }
    try {
      setIsSubmitting(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message")
      }
      toast({ title: "Message sent", description: data?.id ? `Ref: ${data.id}` : "Thanks! I will get back to you soon." })
      setName("")
      setEmail("")
      setMessage("")
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Please try again later."
      toast({ title: "Could not send", description: message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Let&apos;s discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="border-2"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={2}
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="border-2"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="border-2 resize-none"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    minLength={10}
                  />
                  <Button type="submit" className="w-full hover-lift" disabled={isSubmitting}>
                    <Mail className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always interested in hearing about new opportunities, interesting projects, or just having a chat
                about technology and development.
              </p>
            </div>

            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start hover-lift bg-transparent" asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-5 h-5 mr-3" />
                  {personalInfo.email}
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start hover-lift bg-transparent" asChild>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start hover-lift bg-transparent" asChild>
                <a href={personalInfo.twitter || "https://x.com"} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 mr-3" />
                  X
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start hover-lift bg-transparent" asChild>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-3" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
