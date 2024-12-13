import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function SalesProcess() {
  return (
    <section className="bg-gradient-to-b from-[#162A41] to-[#1B2537] relative overflow-hidden min-h-[400px] flex items-center">
      <div className="container mx-auto flex justify-center">
        {/* Wrapper for content */}
        <div className="grid lg:grid-cols-2 items-center gap-16 h-full max-w-6xl">
          {/* Text and buttons */}
          <div className="text-white max-w-lg space-y-8">
            {/* Headings */}
            <div>
              <h2 className="text-4xl lg:text-5xl">
                Hold dig opdateret
              </h2>
              <h3 className="text-3xl lg:text-4xl font-semibold text-gray-200 mt-2">
                på salgsprocessen
              </h3>
            </div>
            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik via vores app. Her kan du også se statistik over interessen for din bolig i alle vores salgskanaler.
            </p>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="bg-white text-[#1B2537] px-5 py-3 flex items-center gap-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <FaGooglePlay className="text-xl" />
                <span className="font-medium">Google Play</span>
              </Link>
              <Link
                href="#"
                className="bg-white text-[#1B2537] px-5 py-3 flex items-center gap-2 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <FaApple className="text-xl" />
                <span className="font-medium">Apple Store</span>
              </Link>
            </div>
          </div>

          {/* Phone images */}
          <div className="relative flex justify-center items-end">
            <div className="relative flex items-end lg:h-[400px]">
              {/* Left phone */}
              <div className="w-[180px] lg:w-[220px] flex-shrink-0 z-10">
                <Image
                  src="/assets/phoneleft.png"
                  alt="App Screenshot Left"
                  width={240}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Right phone */}
              <div className="w-[180px] lg:w-[220px] -ml-8 lg:-ml-10 flex-shrink-0">
                <Image
                  src="/assets/phoneright.svg"
                  alt="App Screenshot Right"
                  width={240}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
