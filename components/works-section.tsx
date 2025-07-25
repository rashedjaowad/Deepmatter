"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Healthcare AI Assistant",
    category: "Healthcare",
    description:
      "Automated patient scheduling and medical record analysis system that reduced administrative workload by 60%.",
    impact: "60% reduction in admin time",
    tags: ["NLP", "Automation", "Healthcare"],
  },
  {
    title: "Supply Chain Optimizer",
    category: "Manufacturing",
    description:
      "Predictive analytics platform that optimizes inventory management and reduces waste across multiple facilities.",
    impact: "35% cost reduction",
    tags: ["Predictive Analytics", "IoT", "Optimization"],
  },
  {
    title: "Customer Service Bot",
    category: "E-commerce",
    description: "Intelligent chatbot handling 80% of customer inquiries with natural language understanding.",
    impact: "80% query automation",
    tags: ["Chatbot", "NLP", "Customer Service"],
  },
  {
    title: "Financial Risk Assessment",
    category: "Finance",
    description: "ML-powered risk analysis tool that improved loan approval accuracy while reducing processing time.",
    impact: "45% faster processing",
    tags: ["Machine Learning", "Risk Analysis", "Finance"],
  },
  {
    title: "Educational Content Generator",
    category: "Non-Profit",
    description: "AI system that creates personalized learning materials for underserved communities.",
    impact: "10,000+ students reached",
    tags: ["Education", "Content Generation", "Social Impact"],
  },
  {
    title: "Smart Energy Management",
    category: "Utilities",
    description: "IoT and AI solution that optimizes energy consumption across corporate facilities.",
    impact: "25% energy savings",
    tags: ["IoT", "Energy", "Sustainability"],
  },
]

export function WorksSection() {
  return (
    <section id="works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our Recent
            <span className="block font-medium">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real solutions for real businesses. See how we've helped organizations across industries leverage AI for
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {project.category}
                  </Badge>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {project.impact}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
