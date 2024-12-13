'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import for navigation
import { Property } from '../../utils/interfaces/property';
import Filters from './Filters';
import PropertyList from './PropertyList';

export default function AllProperties() {
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState({ type: '', priceRange: [0, 12000000] });
  const router = useRouter(); // Brug router til navigation

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch('https://dinmaegler.onrender.com/homes?_limit=100');
      const data = await response.json();
      setAllProperties(data);
      setFilteredProperties(data);
    };
    fetchProperties();
  }, []);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    let filtered = [...allProperties];
    if (newFilters.type) {
      filtered = filtered.filter((property) => property.type === newFilters.type);
    }
    if (newFilters.priceRange) {
      const [minPrice, maxPrice] = newFilters.priceRange;
      filtered = filtered.filter(
        (property) => property.price >= minPrice && property.price <= maxPrice
      );
    }
    setFilteredProperties(filtered);
  };

  const handleLikeToggle = async (propertyId: string, isLiked: boolean) => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('dm_token='))
      ?.split('=')[1];

    if (!token) {
      router.push('/login'); // Send brugeren til login, hvis de ikke er logget ind
      return;
    }

    try {
      const endpoint = isLiked
        ? `https://dinmaegler.onrender.com/favorites/add`
        : `https://dinmaegler.onrender.com/favorites/remove`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ propertyId }),
      });

      if (!response.ok) {
        throw new Error('Failed to update favorites');
      }

      console.log(`${isLiked ? 'Added to' : 'Removed from'} favorites: ${propertyId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="all-properties px-4 py-8 bg-gray-100">
      <Filters onFilterChange={handleFilterChange} />

      <h2 className="text-3xl font-semibold text-center mb-4">Alle Boliger</h2>
      <p className="text-lg text-center mb-8">Her finder du et overblik over alle boliger til salg.</p>

      <PropertyList
        properties={filteredProperties}
        onLikeToggle={handleLikeToggle}
      />
    </div>
  );
}
