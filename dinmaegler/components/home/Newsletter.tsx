"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSignup() {
  return (
    <section className="relative w-full bg-slate-800 py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/nyhedsbrev.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          {/* Tekst på to linjer */}
          <h2 className="text-2xl font-semibold text-white sm:mb-0 mb-4 text-center sm:text-left">
            Tilmeld dig vores nyhedsbrev og <br />
            hold dig opdateret på boligmarkedet
          </h2>

          {/* Form med Input og Knap */}
          <div className="relative flex sm:w-auto w-full">
            {/* Input field */}
            <Input
              type="email"
              placeholder="Indtast din email adresse"
              className="w-full sm:w-auto bg-white border border-white rounded-none pl-4 pr-16" // Firkantet input (fjernet rounded)
            />
            {/* Button inside input */}
            <button
              type="button"
              className="absolute right-0 top-0 bottom-0 bg-transparent text-white hover:bg-transparent rounded-none focus:outline-none focus:ring-0"
            >
              <span className="sr-only">Tilmeld</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="black"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
