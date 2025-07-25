"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "The AI solution transformed our customer service completely. We're now handling 3x more inquiries with the same team size.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow Solutions",
    rating: 5,
    metric: "300% efficiency increase",
  },
  {
    quote:
      "Their predictive analytics platform helped us reduce inventory costs by 40% while improving customer satisfaction.",
    author: "Michael Rodriguez",
    role: "Supply Chain Director",
    company: "Global Manufacturing Corp",
    rating: 5,
    metric: "40% cost reduction",
  },
  {
    quote:
      "As a non-profit, we needed cost-effective solutions. Their AI tools helped us reach 10x more beneficiaries with our programs.",
    author: "Dr. Amanda Foster",
    role: "Executive Director",
    company: "Education First Foundation",
    rating: 5,
    metric: "10x program reach",
  },
]

export function SuccessStoriesSection() {
  return (
    <section id="stories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Success
            <span className="block font-medium">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about the impact of our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {testimonial.metric}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 text-gray-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">2M+</div>
              <div className="text-sm">Hours Automated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
