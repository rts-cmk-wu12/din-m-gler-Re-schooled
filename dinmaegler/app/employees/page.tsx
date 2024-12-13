'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Banner from '../../components/ui/Banner'; // Importer Banner-komponenten
import { TeamMember } from "../../utils/interfaces/teamMember"; // Importer interfacet
import { fetchAgents } from "../../utils/api/agents"; // Importer fetchAgents-funktionen

export default function AgentsPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    async function loadAgents() {
      try {
        const agents = await fetchAgents(); // Brug helper-funktionen
        setTeamMembers(agents); // Opdater state med resultaterne
      } catch (error) {
        console.error("Fejl ved hentning af agenter:", error);
      }
    }

    loadAgents(); // Kald funktionen til at hente data
  }, []);

  return (
    <>
      {/* Placer Banner udenfor section */}
      <Banner title="Medarbejdere i Roskilde" /> {/* Dynamisk titel: "Medarbejdere i Roskilde" */}

      <section className="py-16 px-4">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Mød vores mæglere</h2>
          <p className="text-lg text-gray-600 mb-8">
            Her kan du finde vores dygtige mæglere.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <div className="relative h-[25vh]">
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
                  <Link href={`/agents/${member.id}`} className="text-blue-600 hover:underline">
                    Se detaljer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
