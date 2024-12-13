import React from 'react';
import Image from 'next/image';

export default function InfoSection() {
  return (
    <section className="py-16 px-4">
      {/* Wrapper for at sikre flugtning med resten */}
      <div className="max-w-screen-lg mx-auto">
        {/* Familie billede + Tekst - I en række */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="relative w-full max-w-[450px]">
            <div className="relative overflow-hidden">
              <Image 
                src="/assets/family.svg"
                alt="Familie billede"
                width={450} // Justeret billede størrelse
                height={450} // Justeret billede størrelse
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h3 className="text-[#1a2942] text-3xl font-bold leading-tight">
              Vi har fulgt danskerne hjem i snart 4 årtier
            </h3>
            <p className="text-gray-600 italic">
              Det synes vi siger noget om os!
            </p>
            <p className="text-gray-600 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.
            </p>
            <p className="text-gray-600 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            
            {/* SVG + Tekst i en grid */}
            <div className="flex flex-col sm:flex-row gap-8 pt-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#e8f4ff] p-4">
                  <Image 
                    src="/assets/4829.svg" 
                    alt="4829 boliger solgt"
                    width={28}
                    height={28}
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1a2942]">4829</div>
                  <div className="text-gray-600">boliger solgt</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#e8f4ff] p-4 ">
                  <Image 
                    src="/assets/158.svg" 
                    alt="158 boliger til salg"
                    width={28}
                    height={28}
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1a2942]">158</div>
                  <div className="text-gray-600">boliger til salg</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Underline Sektion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#e8f4ff] p-4">
              <Image 
                src="/assets/bestil.svg" 
                alt="Bestil et salgstjek"
                width={28}
                height={28}
              />
            </div>
            <p className="text-xl font-semibold text-[#1a2942]">Bestil et salgstjek</p>
            <p className="text-gray-600 text-sm">Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#e8f4ff] p-4">
              <Image 
                src="/assets/pin.svg" 
                alt="74 butikker"
                width={28}
                height={28}
              />
            </div>
            <p className="text-xl font-semibold text-[#1a2942]">74 butikker</p>
            <p className="text-gray-600 text-sm">Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="bg-[#e8f4ff] p-4">
              <Image 
                src="/assets/tilmeld.svg" 
                alt="Tilmeld køberkartotek"
                width={28}
                height={28}
              />
            </div>
            <p className="text-xl font-semibold text-[#1a2942]">Tilmeld køberkartotek</p>
            <p className="text-gray-600 text-sm">Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
