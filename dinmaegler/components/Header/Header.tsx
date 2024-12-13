'use client';

import { ContactLinks } from './ContactLinks';
import { AuthControls } from './AuthControls';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export default function Header() {
  return (
    <header
      className="w-full h-[16vh]"
      style={{
        background: "linear-gradient(180deg, #162A41 35%, #ffffff 30%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto py-6 px-8 flex flex-col space-y-6">
        {/* Øverste sektion med kontaktlinks og login/logud */}
        <div className="flex justify-between items-center">
          <ContactLinks />
          <AuthControls />
        </div>

        {/* Logo og navigation */}
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
