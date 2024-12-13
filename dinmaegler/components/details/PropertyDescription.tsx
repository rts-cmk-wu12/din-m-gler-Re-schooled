interface PropertyDescriptionProps {
  description: string;
}

const PropertyDescription = ({ description }: PropertyDescriptionProps) => (
  <article className="w-full max-w-prose mx-auto py-6 mb-48">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Beskrivelse</h2>
    <p className="text-gray-700 leading-relaxed space-y-4">{description}</p>
  </article>
);

export default PropertyDescription;
