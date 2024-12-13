'use client';

import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: {
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
  email: string;
  linkedin: string;
}

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]); // Alle hentede medlemmer
  const [visibleMembers, setVisibleMembers] = useState(3); // Start med at vise 3 medlemmer
  const [allMembersLoaded, setAllMembersLoaded] = useState(false); // Om alle medlemmer er hentet
  const router = useRouter();

  useEffect(() => {
    // Funktion der henter teammedlemmer
    async function fetchAgentsData() {
      try {
        const response = await fetch("https://dinmaegler.onrender.com/agents");
        if (!response.ok) {
          throw new Error("Fejl ved hentning af data");
        }
        const agents = await response.json();
        setTeamMembers(agents); // Gem alle medlemmer i state
      } catch (error) {
        console.error("Fejl ved hentning af agenter:", error);
      }
    }

    fetchAgentsData();
  }, []);

  // Funktion til at håndtere klik på knappen
  const showMoreMembers = () => {
    if (visibleMembers + 3 >= teamMembers.length) {
      setAllMembersLoaded(true); // Hvis alle medlemmer er vist
    }
    setVisibleMembers((prev) => Math.min(prev + 3, teamMembers.length)); // Øg med 3 medlemmer ad gangen
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Mød vores engagerede medarbejdere</h2>
        <p className="text-lg text-gray-600 mb-8">
          Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
          Kontakt en af vores medarbejdere.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(0, visibleMembers).map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => router.push(`/agents/${member.id}`)} // Naviger til detaljesiden
            >
              <div className="relative h-[25vh]">
                {/* Billede */}
                <Image
                  src={member.image.formats.thumbnail.url}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>

              <div className="px-4 py-3">
                <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>

              <div className="flex justify-center gap-4 px-4 pb-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-600 hover:text-gray-900"
                  aria-label={`Send email til ${member.name}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={member.linkedin}
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Besøg ${member.name}s LinkedIn profil`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Vis knap kun, hvis der er flere medlemmer at vise */}
        {!allMembersLoaded && (
          <Button
            variant="default"
            className="bg-[#1B365D] hover:bg-[#1B365D]/90 text-white mt-6"
            onClick={showMoreMembers}
          >
            Se alle mæglere
          </Button>
        )}
      </div>
    </section>
  );
}
