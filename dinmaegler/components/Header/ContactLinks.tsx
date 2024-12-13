'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export function ContactLinks() {
  return (
    <div className="flex space-x-6 text-white">
      <Link
        href="mailto:4000@dinmaegler.com"
        className="flex items-center space-x-2 hover:underline"
        aria-label="Send email to 4000@dinmaegler.com"
      >
        <Mail className="h-4 w-4" />
        <span className="text-xs sm:text-sm">4000@dinmaegler.com</span>
      </Link>
      <Link
        href="tel:+4570704000"
        className="flex items-center space-x-2 hover:underline"
        aria-label="Call +45 7070 4000"
      >
        <Phone className="h-4 w-4" />
        <span className="text-xs sm:text-sm">+45 7070 4000</span>
      </Link>
    </div>
  );
}
