// components/Footer/FooterContact.tsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaStore } from 'react-icons/fa';

const FooterContact: React.FC = () => {
  return (
    <section className="row-start-2 row-span-2 col-span-1 bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-sm font-semibold text-gray-800 text-center md:text-left">Kontakt os</h3>
      <ul className="mt-4 text-gray-600 text-xs space-y-3">
        <li className="flex items-center">
          <FaPhoneAlt className="w-5 h-5 mr-3 text-blue-600" />
          <div>
            <span className="font-semibold">Ring til os:</span><br />
            <span className="ml-6 text-gray-700">+45 7070 4000</span>
          </div>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="w-5 h-5 mr-3 text-blue-600" />
          <div>
            <span className="font-semibold">Send en mail:</span><br />
            <span className="ml-6 text-gray-700">4000@dinmaegler.com</span>
          </div>
        </li>
        <li className="flex items-center">
          <FaStore className="w-5 h-5 mr-3 text-blue-600" />
          <div>
            <span className="font-semibold">Butik:</span><br />
            <span className="ml-6 text-gray-700">Stændertorvet 78, 4000 Roskilde</span>
          </div>
        </li>
      </ul>
      <p className="mt-4 text-xs text-gray-500 text-center md:text-left">
        Din Mægler Roskilde er din boligbutik i lokalområdet.
      </p>
    </section>
  );
};

export default FooterContact;
