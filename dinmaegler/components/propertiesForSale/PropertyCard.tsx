import Image from 'next/image';
// import Heart from '../Heart';
import { getEnergyColor } from '../../utils/interfaces/energyColor'; // Importer funktionen

type PropertyCardProps = {
  property: any;
  onLikeToggle: (propertyId: string, isLiked: boolean) => void;
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onLikeToggle }) => {
  return (
    <div className="property-card bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 w-full">
      {/* Billede med Heart-knap */}
      {property.images && property.images[0]?.url ? (
        <div className="relative h-[25vh] aspect-auto">
          <Image
            src={property.images[0].url}
            alt={property.title || 'Property Image'}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          {/* <Heart propertyId={property.id} onLikeToggle={onLikeToggle} /> */}
        </div>
      ) : (
        <div className="bg-gray-200 w-full h-48 rounded-t-lg flex items-center justify-center">
          <p className="text-gray-500">No image available</p>
        </div>
      )}

      {/* Adresse og Postnummer */}
      <div className="px-4 py-3">
        <p className="text-lg font-semibold text-gray-900">{property.adress1}</p>
        <p className="text-sm text-gray-600">
          {property.postalcode} {property.city}
        </p>
      </div>

      {/* Type og Ejerudgift */}
      <div className="px-4 py-3 text-sm text-gray-600">
        {property.type} • Ejerudgift: {property.cost ? property.cost.toLocaleString() : 'N/A'} kr.
      </div>

      <hr className="my-4 border-gray-300 m-4" />

      {/* Energi mærke */}
      <div className="flex justify-between items-center text-gray-700 px-4 py-3">
        <div className="flex items-center space-x-2">
          <div
            className={`w-8 h-8 ${getEnergyColor(property.energylabel)} flex items-center justify-center`}
          >
            <span className="font-semibold">{property.energylabel}</span>
          </div>
          <p className="text-sm">
            {property.rooms} værelser • {property.livingspace} m²
          </p>
        </div>
        <p className="text-xl font-semibold text-black">
          {property.price.toLocaleString()} kr.
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
