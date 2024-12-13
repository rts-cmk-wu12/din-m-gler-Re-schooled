// app/contact-us/page.tsx

'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from 'lucide-react';

export default function ContactUsPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Funktion til at håndtere form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For at sende en besked kan du bruge en API, e-mail service eller et backend script
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          We would love to hear from you! Please reach out to us if you have any questions.
        </p>

        {/* Kontakt informationer */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>+45 7070 4000</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <span>4000@dinmaegler.com</span>
          </div>
        </div>

        {/* Kontaktformular */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded-lg"
              placeholder="Your email address"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded-lg"
              placeholder="Write your message here"
              rows={4}
            />
          </div>

          <Button type="submit" variant="default" className="bg-[#1B365D] hover:bg-[#1B365D]/90 text-white">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
