import Image from "next/image";

interface PropertyHeroProps {
  imageUrl: string;
  onImageClick: () => void;
}

const PropertyHero = ({ imageUrl, onImageClick }: PropertyHeroProps) => (
  <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
    {/* Container for image with border */}
    <div className="relative w-full h-[60vh] overflow-hidden border-4 border-gray-300">
      <Image
        src={imageUrl}
        alt="Property Image"
        layout="fill" // Fills the container's space
        objectFit="contain" // Ensure the entire image fits within the container without cropping
        className="w-full h-full" // Make sure the image stretches to fit the container
        onClick={onImageClick}
      />
    </div>
  </div>
);

export default PropertyHero;
