import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { WorksSection } from "@/components/works-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Navigation } from "@/components/navigation"
import { CompaniesSection } from "@/components/companies-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CompaniesSection />
      <StorySection />
      <WorksSection />
      <SuccessStoriesSection />
      <FinalCTASection />
    </main>
  )
}
