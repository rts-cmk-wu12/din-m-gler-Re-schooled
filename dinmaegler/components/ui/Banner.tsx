'use client';

import Image from 'next/image';

interface BannerProps {
  title?: string; // 'title' er nu valgfri
}

export default function Banner({ title = "Standard Titel" }: BannerProps) {
  return (
    <div className="relative w-full h-[15vh] flex items-center justify-center">
      {/* Baggrund med SVG */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/BG.svg)' }}
      />

      {/* Billede uden drop shadow, men tekst med sort stroke */}
      <Image
        src="/assets/morepropperties.png"
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
        style={{
          filter: 'brightness(0.35)', // Ingen drop shadow her
        }}
      />

      {/* Tekst i midten med sort stroke */}
      <h1
        className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center"
        style={{
        }}
      >
        {title}
      </h1>
    </div>
  );
}
