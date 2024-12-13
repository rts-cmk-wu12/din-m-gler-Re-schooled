'use client';

import Link from 'next/link';

export function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-8 mt-6">
        <li>
          <Link
            href="/propertiesForSale"
            className="text-[#162A41] hover:underline font-medium"
          >
            Boliger til salg
          </Link>
        </li>
        <li>
          <Link
            href="/employees"
            className="text-[#162A41] hover:underline font-medium"
          >
            Mæglere
          </Link>
        </li>
        <li>
          <Link
            href="/mine-favoritter"
            className="text-[#162A41] hover:underline font-medium"
          >
            Mine favoritter
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className="text-[#162A41] hover:underline font-medium"
          >
            Kontakt os
          </Link>
        </li>
      </ul>
    </nav>
  );
}
