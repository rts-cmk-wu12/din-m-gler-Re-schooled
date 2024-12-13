// components/Footer/FooterTop.tsx
import React from 'react';

const FooterTop: React.FC = () => {
  return (
    <section className="col-span-2 row-start-1 text-center md:text-left">
      <img
        src="/assets/frame.svg"
        alt="Din Mægler"
        className="mx-auto md:mx-0 max-w-[120px] md:max-w-[150px] h-auto"
      />
      <p className="mt-2 text-gray-600 text-xs md:text-sm px-4 md:px-0">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta dolorum
        asperiores tempore similique saepe omnis atque, voluptas fugit minima
        laboriosam quod illo voluptates rem itaque odit eveniet recusandae ipsum
        consectetur.
      </p>
    </section>
  );
};

export default FooterTop;
