"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Transforming businesses with AI
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            AI Solutions That
            <span className="block font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We help businesses, corporates, and non-profits unlock their potential through intelligent AI integrations
            that streamline operations and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToDemo}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 text-lg border-gray-300 hover:bg-gray-50"
            >
              See How We Work
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-200 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </section>
  )
}
