"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, X, Upload, Building2 } from "lucide-react"

interface Company {
  id: string
  name: string
  logo?: string
}

export function CompaniesSection() {
  const [companies, setCompanies] = useState<Company[]>([
    { id: "1", name: "TechFlow Solutions" },
    { id: "2", name: "Global Manufacturing Corp" },
    { id: "3", name: "Education First Foundation" },
    { id: "4", name: "HealthCare Innovations" },
    { id: "5", name: "Financial Services Group" },
    { id: "6", name: "Retail Dynamics" },
  ])

  const [isEditing, setIsEditing] = useState(false)
  const [newCompanyName, setNewCompanyName] = useState("")

  const addCompany = () => {
    if (newCompanyName.trim()) {
      const newCompany: Company = {
        id: Date.now().toString(),
        name: newCompanyName.trim(),
      }
      setCompanies([...companies, newCompany])
      setNewCompanyName("")
    }
  }

  const removeCompany = (id: string) => {
    setCompanies(companies.filter((company) => company.id !== id))
  }

  const handleLogoUpload = (companyId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const logoUrl = e.target?.result as string
        setCompanies(companies.map((company) => (company.id === companyId ? { ...company, logo: logoUrl } : company)))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Trusted by Industry Leaders</p>
          <div className="flex justify-center items-center gap-4 mb-8">
            <h3 className="text-2xl font-light text-gray-900">Companies We&apos;ve Worked With</h3>
            <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)} className="ml-4">
              {isEditing ? "Done" : "Edit"}
            </Button>
          </div>
        </div>

        {isEditing && (
          <Card className="mb-8 border-dashed border-2 border-gray-300">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="flex-1">
                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Add New Company
                  </label>
                  <Input
                    id="company-name"
                    value={newCompanyName}
                    onChange={(e) => setNewCompanyName(e.target.value)}
                    placeholder="Enter company name"
                    onKeyPress={(e) => e.key === "Enter" && addCompany()}
                  />
                </div>
                <Button onClick={addCompany} className="bg-gray-900 hover:bg-gray-800">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Company
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company) => (
            <div key={company.id} className="relative group">
              <div className="flex flex-col items-center justify-center p-6 h-24 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                {company.logo ? (
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                ) : (
                  <div className="flex flex-col items-center text-gray-400">
                    <Building2 className="w-8 h-8 mb-1" />
                    <span className="text-xs text-center font-medium text-gray-600">{company.name}</span>
                  </div>
                )}
              </div>

              {isEditing && (
                <div className="absolute -top-2 -right-2 flex gap-1">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleLogoUpload(company.id, e)}
                      className="hidden"
                    />
                    <div className="w-6 h-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                      <Upload className="w-3 h-3" />
                    </div>
                  </label>
                  <button
                    onClick={() => removeCompany(company.id)}
                    className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {!company.logo && !isEditing && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded shadow-sm">{company.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {isEditing && (
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">i</span>
                </div>
              </div>
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Tips for best results:</p>
                <ul className="list-disc list-inside space-y-1 text-blue-700">
                  <li>Upload logo images in PNG or SVG format for best quality</li>
                  <li>Logos should be on transparent or white backgrounds</li>
                  <li>Recommended size: 200x100px or similar aspect ratio</li>
                  <li>Company names will show on hover if no logo is uploaded</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">Join these industry leaders in transforming their business with AI</p>
        </div>
      </div>
    </section>
  )
}
