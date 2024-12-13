// app/details/[id]/components/ImageModal.tsx
import Image from "next/image";

interface ImageModalProps {
  currentImage: string;
  onClose: () => void;
}

const ImageModal = ({ currentImage, onClose }: ImageModalProps) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div className="relative max-w-4xl w-full">
      <button
        onClick={onClose}
        className="absolute -top-12 right-0 text-white text-4xl"
      >
        ×
      </button>
      <Image
        src={currentImage}
        alt="Stort billede"
        className="w-full h-auto rounded-lg"
        width={800}
        height={600}
      />
    </div>
  </div>
);

export default ImageModal;
