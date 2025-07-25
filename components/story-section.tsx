"use client"

import { useEffect, useRef } from "react"
import { Brain, Target, Zap, Users } from "lucide-react"

const storySteps = [
  {
    icon: Brain,
    title: "We Understand Your Challenge",
    description:
      "Every business faces unique obstacles. We start by deeply understanding your specific needs, processes, and goals.",
  },
  {
    icon: Target,
    title: "We Design Smart Solutions",
    description:
      "Our team crafts AI solutions tailored to your industry, ensuring seamless integration with your existing workflows.",
  },
  {
    icon: Zap,
    title: "We Implement & Optimize",
    description: "From deployment to fine-tuning, we ensure your AI solutions deliver measurable results from day one.",
  },
  {
    icon: Users,
    title: "We Support Your Growth",
    description:
      "Our partnership doesn't end at implementation. We provide ongoing support to help you scale and evolve.",
  },
]

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".story-step")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="story" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            How We Transform
            <span className="block font-medium">Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful AI integration that delivers real value to your organization.
          </p>
        </div>

        <div className="space-y-32">
          {storySteps.map((step, index) => (
            <div
              key={index}
              className={`story-step opacity-0 transition-all duration-1000 flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6">
                  <step.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-3xl font-medium text-gray-900 mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">{step.description}</p>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <step.icon className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
