// components/Footer/FooterLinks.tsx
import React from 'react';

const FooterLinks: React.FC = () => {
  return (
    <section className="row-start-2 row-span-1 col-span-2 p-4">
      <h3 className="text-sm font-semibold text-gray-800 text-center md:text-left">QUICK LINKS</h3>
      <ul className="mt-4 text-gray-600 text-xs space-y-2">
        <li>
          <a href="#" className="hover:text-blue-500 transition duration-300">Boliger til salg</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition duration-300">Mæglere</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition duration-300">Kontakt os</a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500 transition duration-300">Login / bliv bruger</a>
        </li>
      </ul>
    </section>
  );
};

export default FooterLinks;
