'use client'

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import AgentImage from '../../../components/agents/AgentImage'
import AgentInfo from '../../../components/agents/AgentInfo'
import ContactForm from '../../../components/agents/ContactForm'
import SearchSection from '../../../components/agents/SearchSection'
import ContactInfoSection from '../../../components/agents/ContactInfoSection'
import Banner from '../../../components/ui/Banner'  // Importér Banner-komponenten

interface Agent {
  id: string
  name: string
  title: string
  email: string
  phone: string
  linkedin: string
  description: string
  image: {
    formats: {
      thumbnail: {
        url: string
      }
    }
  }
}

export default function AgentDetailsPage() {
  const { id } = useParams()
  const [agent, setAgent] = useState<Agent | null>(null)

  useEffect(() => {
    async function fetchAgent() {
      const response = await fetch(`/api/employees/${id}`)
      const data: Agent = await response.json()
      setAgent(data)
    }

    if (id) fetchAgent()
  }, [id])

  if (!agent) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-white">
      {/* Placer Banner udenfor containeren */}
      <Banner title="Kontakt en medarbejder" /> {/* Her sender vi "Kontakt en medarbejder" som titel */}

      <div className="flex justify-center items-start py-8 mt-24">
        <div className="relative container mx-auto flex justify-center gap-8 px-4">
          <div className="bg-white border border-gray-300 shadow-md p-6 w-full max-w-3xl">
            <AgentImage
              imageUrl={agent.image.formats.thumbnail.url}
              agentName={agent.name}
              title={agent.title} // Her sender vi 'title' til AgentImage
              linkedinUrl={agent.linkedin}
              email={agent.email}
              phone={agent.phone}
            />
            <AgentInfo
              name={agent.name}
              description={agent.description}
            />
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6 w-full max-w-xs">
            <SearchSection />
            <ContactInfoSection />
          </div>
        </div>
      </div>
    </div>
  )
}
