"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import PropertyHero from "../../../components/details/PropertyHero";
import PropertyHeader from "../../../components/details/PropertyHeader";
import PropertyDetails from "../../../components/details/PropertyDetails";
import PropertyDescription from "../../../components/details/PropertyDescription";
import AgentInfo from "../../../components/details/AgentInfo";
import ImageModal from "../../../components/details/ImageModal";
import { Property } from "../../../utils/interfaces/property";


export default function PropertyDetailPage() {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>("");

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://dinmaegler.onrender.com/homes/${id}`)
      .then((response) => {
        setProperty(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fejl ved hentning af boligdata", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Indlæser...</div>;
  }

  if (!property) {
    return <div className="flex items-center justify-center min-h-screen">Bolig ikke fundet</div>;
  }

  // Parse rooms
  const [totalRooms, bedrooms] = property.rooms.split("/").map(Number);

  return (
    <main className="max-w-7xl mx-auto px-4">
      <PropertyHero
        imageUrl={property.images[0]?.url || ""}
        onImageClick={() => setModalOpen(true)}
      />
      <PropertyHeader
        title={property.title}
        address={property.adress1}
        postalcode={property.postalcode}
        city={property.city}
        price={property.price}
      />
      <PropertyDetails
        id={property.id}
        livingspace={property.livingspace}
        landArea={property.lotsize}
        rooms={totalRooms}
        numberOfFloors={property.basementsize || 1} 
        basementsize={property.basementsize} // Send basementsize prop
        energylabel={property.energylabel}
        buildYear={property.built}
        renovatedYear={property.remodel || null}
        gross={property.gross}
        netto={property.netto}
        payment={property.payment}
        cost={property.cost}
      />
      {/* New section for side-by-side layout */}
      <div className="flex flex-col lg:flex-row gap-8 mt-12">
  <div className="w-[34rem]">
    <PropertyDescription description={property.description} />
  </div>
  <div className="flex-1 lg:max-w-sm"> {/* Flex-1 to make this container flexible */}
    <AgentInfo agent={property.agent} />
  </div>
</div>
      {modalOpen && (
        <ImageModal currentImage={currentImage} onClose={() => setModalOpen(false)} />
      )}
    </main>
  );
}
