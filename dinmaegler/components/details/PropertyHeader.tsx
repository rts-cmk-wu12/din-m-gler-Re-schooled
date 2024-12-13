import { Heart, MapPin, Layers, Image as GalleryIcon } from "lucide-react"; // Importer de nye ikoner

interface PropertyHeaderProps {
  title: string;
  address: string;
  postalcode: string;
  city: string;
  price: number;
}

const PropertyHeader = ({
  title,
  address,
  postalcode,
  city,
  price,
}: PropertyHeaderProps) => (
  <div className="mt-8">
    <div className="flex items-center justify-between">
      {/* Venstre kolonne: Adresse og postnummer */}
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-xl font-bold text-black mt-2">{address}</p>
        <p className="text-xl font-bold text-black mt-1">
          {postalcode} {city}
        </p>
      </div>

      {/* Midterste kolonne: Ikoner (vandret) */}
      <div className="flex gap-6 items-center">
        <button>
          <GalleryIcon className="w-8 h-8 text-gray-600" />
        </button>
        <button>
          <Layers className="w-8 h-8 text-gray-600" />
        </button>
        <button>
          <MapPin className="w-8 h-8 text-gray-600" />
        </button>
        <button>
          <Heart className="w-8 h-8 text-gray-600" />
        </button>
      </div>

      {/* Højre kolonne: Pris */}
      <div className="text-right">
        <p className="text-3xl font-bold text-gray-900">Kr. {price.toLocaleString()}</p>
      </div>
    </div>

    {/* Underline for address */}
    <div className="border-b border-gray-300 mt-2"></div>
  </div>
);

export default PropertyHeader;
