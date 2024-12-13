// components/Footer/FooterDms.tsx
import React from 'react';

const FooterDms: React.FC = () => {
  return (
    <section className="col-start-2 row-start-3 row-span-3 text-center mt-6 md:mt-12">
      <img
        src="/assets/dms.svg"
        alt="Medlem af DMS Dansk Mægler Sammenslutning"
        className="mx-auto max-w-[120px]"
      />
    </section>
  );
};

export default FooterDms;
