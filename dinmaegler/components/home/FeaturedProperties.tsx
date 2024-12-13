'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Property } from '../../utils/interfaces/property';

const getEnergyColor = (energyLabel: string) => {
  switch (energyLabel) {
    case 'A':
      return 'bg-green-500 text-white';
    case 'B':
      return 'bg-yellow-500 text-black';
    case 'C':
      return 'bg-orange-500 text-white';
    case 'D':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const FeaturedProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    async function fetchProperties() {
      const response = await fetch('https://dinmaegler.onrender.com/homes?_limit=4');
      const data = await response.json();
      
      // Log API response to debug
      console.log('API Response:', data);
      
      // Log each property to check individual fields
      data.forEach((property: Property) => {
        console.log('Property Data:', property);
      });

      // Set properties state with fetched data
      setProperties(data);
    }

    fetchProperties();
  }, []);

  return (
    <div className="featured-properties px-4 py-8 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-4">Udvalgte Boliger</h2>
      <p className="text-lg text-center mb-8">
        There are many variations of passages of Lorem Ipsum available, but this in the majority have suffered alteration in some.
      </p>

      <div className="property-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-screen-lg mx-auto">

        {properties.length === 0 ? (
          <p>Ingen boliger fundet</p>
        ) : (
          properties.map((property) => (
            <div key={property.id} className="property-card bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 w-full">
              {/* Billede */}
              {property.images && property.images[0]?.url ? (
                <div className="relative h-[25vh] aspect-auto">
                <Image
                  src={property.images[0].url}
                  alt={property.title || 'Property Image'}
                  layout="fill"
                  objectFit="fill"
                  className="w-full h-full"
                  
                  
                />
              </div>
              ) : (
                <div className="bg-gray-200 w-full h-48 rounded-t-lg flex items-center justify-center">
                  <p className="text-gray-500">No image available</p>
                </div>
              )}

              {/* Adresse og Postnummer */}
              <div className="px-4 py-3">
                <p className="text-lg font-semibold text-gray-900">{property.adress1}</p>
                <p className="text-sm text-gray-600">{property.postalcode} {property.city}</p>
              </div>

              {/* Type og Ejerudgift */}
              <div className="px-4 py-3 text-sm text-gray-600">
                {property.type} • Ejerudgift: {property.cost ? property.cost.toLocaleString() : 'N/A'} kr.
              </div>

              <hr className="my-4 border-gray-300 m-4" />

              {/* Energi mærke */}
              <div className="flex justify-between items-center text-gray-700 px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 ${getEnergyColor(property.energylabel)} flex items-center justify-center`}>
                    <span className="font-semibold">{property.energylabel}</span>
                  </div>
                  <p className="text-sm">
                    {property.rooms} værelser • {property.livingspace} m²
                  </p>
                </div>
                <p className="text-xl font-semibold text-black">{property.price.toLocaleString()} kr.</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedProperties;
