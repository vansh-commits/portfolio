"use client"

import { motion } from "framer-motion"
import { education } from "../data/data"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { GraduationCap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Education</h2>
          <p className="text-xl text-muted-foreground text-balance">Building a strong foundation in computer science</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover-lift h-full border-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-6 h-6" />
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium mb-2">{edu.degree}</p>
                  <p className="text-muted-foreground">{edu.duration}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
