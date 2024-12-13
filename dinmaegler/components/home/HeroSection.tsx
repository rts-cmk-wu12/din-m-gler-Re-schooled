export default function HeroSection() {
  return (
    <section
      className="bg-gray-100 py-20 text-center relative h-[600px]"
      style={{
        backgroundImage: "url('/assets/house2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for mørkere effekt */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header med introduktion */}
      <header className="relative z-10">
        <h1 className="text-4xl font-bold text-white">
          Søg efter din drømmebolig
        </h1>
      </header>

      {/* Hvid boks med venstrestillet indhold */}
      <div className="relative z-10 mx-auto max-w-3xl bg-white p-6 mt-8 shadow-lg">
        {/* Søg tekst og underline */}
        <p className="text-2xl font-bold text-black mb-4 text-left">
          <span className="inline-block relative pb-2">
            Søg
            <span className="absolute left-0 bottom-0 w-full h-1 bg-black"></span>
          </span>{" "}
          blandt 158 boliger til salg i 74 butikker
        </p>

        {/* Ekstra linje */}
        <p className="text-lg text-gray-700 mb-6 text-left">Hvad skal din næste bolig indeholde</p>

        {/* Formular til søgning */}
        <form className="flex items-center">
          <label htmlFor="search" className="sr-only">
            Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende
          </label>
          <input
            id="search"
            type="text"
            placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
            className="flex-1 border border-gray-300 px-4 py-2"
          />
          <button type="submit" className="ml-2 bg-blue-600 px-4 py-2 text-white">
            Søg
          </button>
        </form>
      </div>
    </section>
  );
}
