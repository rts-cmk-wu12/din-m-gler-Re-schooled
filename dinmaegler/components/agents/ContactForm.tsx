const ContactForm = () => {
    return (
      <div className="mt-6 border border-gray-300  p-4">
        <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
        <form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Navn</label>
              <input id="name" type="text" placeholder="Indtast navn" className="w-full px-3 py-2 border " />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" type="email" placeholder="Indtast email" className="w-full px-3 py-2 border " />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Emne</label>
            <input id="subject" type="text" placeholder="Hvad ønsker du henvendelse sig om?" className="w-full px-3 py-2 border " />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Besked</label>
            <textarea id="message" placeholder="Skriv din besked her..." rows={4} className="w-full px-3 py-2 border "></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-[#1e2c3c] text-white">Send besked</button>
        </form>
      </div>
    )
  }
  
  export default ContactForm
  