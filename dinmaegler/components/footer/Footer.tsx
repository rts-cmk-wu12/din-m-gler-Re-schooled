// components/Footer/Footer.tsx
import React from 'react';
import FooterTop from './FooterTop';
import FooterContact from './FooterContact';
import FooterLinks from './FooterLinks';
import FooterDms from './FooterDms';
import FooterBottom from './FooterBottom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full custom-gradient-horizontal pt-4 pb-4">
      <div className="max-w-screen-lg mx-auto grid grid-cols-2 grid-rows-4 gap-8 h-auto">
        <FooterTop />
        <FooterContact />
        <FooterLinks />
        <FooterDms />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
