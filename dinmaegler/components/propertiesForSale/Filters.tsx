import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Filters({ onFilterChange }: { onFilterChange: (filters: any) => void }) {
  const [type, setType] = useState('');
  const [priceRange, setPriceRange] = useState([1100000, 5410000]);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
    onFilterChange({ type: event.target.value, priceRange });
  };

  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange(value);
      onFilterChange({ type, priceRange: value });
    }
  };

  return (
    <div className="filter-container mb-6 p-6 max-w-screen-lg mx-auto">
      <h3 className="text-xl font-medium mb-2">Søg efter dit drømmehus</h3>
      {/* Underline */}
      <div className="w-16 h-1 bg-gray-700 rounded mb-4"></div>

      {/* Flex-container for Ejendomstype og Pris-interval */}
      <div className="flex items-center gap-4">
        {/* Ejendomstype (Dropdown) */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2 text-gray-600">Ejendomstype</label>
          <select
            value={type}
            onChange={handleTypeChange}
            className="border border-gray-300 p-2 rounded w-full text-sm focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Alle</option>
            <option value="Ejerlejlighed">Ejerlejlighed</option>
            <option value="Villa">Villa</option>
            <option value="Landejendom">Landejendom</option>
            <option value="Byhus">Byhus</option>
          </select>
        </div>

        {/* Pris-interval (Slider) */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2 text-gray-600">Pris-interval</label>
          <div>
            <div className="flex justify-between text-xs text-gray-600 mb-2">
              <span>{priceRange[0].toLocaleString()} kr.</span>
              <span>{priceRange[1].toLocaleString()} kr.</span>
            </div>

            {/* rc-slider */}
            <Slider
              range
              min={0}
              max={9000000}
              step={10000}
              value={priceRange}
              onChange={handlePriceChange}
              trackStyle={{ backgroundColor: '#ccc', height: 4 }}
              railStyle={{ backgroundColor: '#e0e0e0', height: 4 }}
              handleStyle={{
                borderColor: '#ccc',
                backgroundColor: '#f5f5f5',
                height: 16,
                width: 16,
                marginTop: -6,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
