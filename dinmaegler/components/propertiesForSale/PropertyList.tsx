import PropertyCard from './PropertyCard';

type PropertyListProps = {
  properties: any[];
  onLikeToggle: (propertyId: string, isLiked: boolean) => void;
};

const PropertyList: React.FC<PropertyListProps> = ({ properties, onLikeToggle }) => {
  return (
    <div className="property-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
      {properties.length === 0 ? (
        <p>Ingen boliger fundet</p>
      ) : (
        properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onLikeToggle={onLikeToggle}
          />
        ))
      )}
    </div>
  );
};

export default PropertyList;
