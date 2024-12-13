import Image from "next/image"
import { LinkedinIcon as LinkedIn, Mail, Phone } from 'lucide-react'

interface AgentImageProps {
  imageUrl: string
  agentName: string
  title: string
  linkedinUrl: string
  email: string
  phone: string
}

const AgentImage = ({ imageUrl, agentName, title, linkedinUrl, email, phone }: AgentImageProps) => {
  return (
    <div className="flex mb-6 space-x-6">
      {/* Billede og sociale ikoner */}
      <div className="relative w-64 h-64">
        <Image
          src={imageUrl}
          alt={agentName}
          fill
          className="object-cover"
        />
        <ul className="bg-[#1e2c3c] p-2 w-2/4 relative top-48 flex text-white justify-evenly align-middle">
          <li>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <LinkedIn className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href={`mailto:${email}`}>
              <Mail className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href={`tel:${phone}`}>
              <Phone className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>

      {/* Navn, Titel og Kontaktinfo */}
      <div className="flex flex-col">
        {/* Agentens Navn med underline */}
        <h1 className="text-2xl font-bold pb-2">{agentName}</h1>
        
        {/* Agentens Titel med forkortet underline */}
        <p className="text-gray-600 border-b-2 border-gray-300 pb-2 max-w-[3rem] ">{title}</p>

        {/* Kontaktinformationer med ikoner */}
        <div className="mt-4 space-y-2 text-center">
          {/* Email */}
          <div className="flex items-center justify-start space-x-2">
            <Mail className="w-5 h-5 text-gray-600" />
            <p className="text-gray-600">
              Email: <a href={`mailto:${email}`} className="text-black">{email}</a>
            </p>
          </div>
          
          {/* Phone */}
          <div className="flex items-center justify-start space-x-2">
            <Phone className="w-5 h-5 text-gray-600" />
            <p className="text-gray-600">
              Phone: <a href={`tel:${phone}`} className="text-black">{phone}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentImage
