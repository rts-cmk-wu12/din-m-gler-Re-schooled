import React from 'react';
import { PropertyDetailsProps } from '../../utils/interfaces/propertyDetailsProps'; // Import af typen

const PropertyDetails = ({
  id,
  livingspace,
  landArea,
  rooms,
  numberOfFloors,
  energylabel,
  buildYear,
  renovatedYear,
  basementsize,
  gross,
  netto,
  payment,
  cost,
}: PropertyDetailsProps) => {
  let totalRooms = rooms;
  let bedrooms = null;

  if (typeof rooms === "string" && rooms.includes("/")) {
    const [roomCount, bedroomCount] = rooms.split("/").map(Number);
    totalRooms = roomCount;
    bedrooms = bedroomCount;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-32">
      {/* Venstre kolonne */}
      <section className="space-y-8 text-left">
        <h2 className="sr-only">Venstre Kolonne</h2>
        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Sagsnummer:</p>
          <p className="font-semibold">{id}</p>
        </div>

        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Boligareal:</p>
          <p className="font-semibold">{livingspace} m²</p>
        </div>

        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Grundareal:</p>
          <p className="font-semibold">{landArea} m²</p>
        </div>

        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Værelser:</p>
          <p className="font-semibold">
            {bedrooms !== null ? `${totalRooms} / ${bedrooms}` : totalRooms}
          </p>
        </div>

        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Antal Plan:</p>
          <p className="font-semibold">{numberOfFloors}</p>
        </div>
      </section>

      {/* Midterste kolonne */}
      <section className="space-y-8 text-center">
        <h2 className="sr-only">Midterste Kolonne</h2>
        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Kælder:</p>
          <p className="font-semibold">{basementsize ? basementsize : "Ikke angivet"}</p>
        </div>

        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Byggeår:</p>
          <p className="font-semibold">{buildYear}</p>
        </div>

        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Ombygget:</p>
          <p className="font-semibold">{renovatedYear || "Ikke angivet"}</p>
        </div>

        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Energimærke:</p>
          <p className="font-semibold">{energylabel}</p>
        </div>
      </section>

      {/* Højre kolonne */}
      <section className="space-y-8 text-right">
        <h2 className="sr-only">Højre Kolonne</h2>
        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Udbetaling:</p>
          <p className="font-semibold">Kr. {payment.toLocaleString()}</p>
        </div>

        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Brutto ex ejerudgift:</p>
          <p className="font-semibold">Kr. {gross.toLocaleString()}</p>
        </div>

        <div className="flex justify-between mb-6">
          <p className="text-gray-600">Netto ex ejerudgift:</p>
          <p className="font-semibold">Kr. {netto.toLocaleString()}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600">Ejerudgift:</p>
          <p className="font-semibold">Kr. {cost.toLocaleString()}</p>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
