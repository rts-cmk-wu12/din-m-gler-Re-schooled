import { Instagram, Linkedin, Facebook } from "lucide-react"; // Importing Lucide icons for social media
import { Phone, Mail } from "lucide-react"; // Lucide icons for phone and email
import Image from "next/image";

interface AgentInfoProps {
  agent: {
    image: { formats: { thumbnail: { url: string } } };
    name: string;
    title: string;
    phone: string;
    email: string;
  };
}

const AgentInfo = ({ agent }: AgentInfoProps) => (
  <div className="w-full"> {/* Ensure this wrapper takes up full width */}
    {/* Overskrift udenfor container */}
    <div>
      <h2>Ansvarlig Mægler</h2>
    </div>

    {/* Agent information container */}
    <div className="border p-6 w-full"> {/* Added w-full here to make the border container fill the available space */}
      <div className="flex gap-8">
        {/* Billede Container */}
        <div>
          <Image
            src={agent.image?.formats?.thumbnail?.url || "/default-avatar.jpg"}
            alt={agent.name}
            width={600}  // Størrelse på billede
            height={600}  // Størrelse på billede
          />
        </div>

        {/* Sociale Medier Container med blå baggrund */}
        <div className="bg-[#162A41] p-4">
          <div>
            <a href="https://instagram.com">
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a href="https://linkedin.com">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a href="https://facebook.com">
              <Facebook className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Navn og Kontaktoplysninger Container */}
      <div>
        <h3>{agent.name}</h3>
        <p>{agent.title}</p>

        <div>
          <div>
            <Phone />
            <a href={`tel:${agent.phone}`}>{agent.phone}</a>
          </div>
          <div>
            <Mail />
            <a href={`mailto:${agent.email}`}>{agent.email}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AgentInfo;
