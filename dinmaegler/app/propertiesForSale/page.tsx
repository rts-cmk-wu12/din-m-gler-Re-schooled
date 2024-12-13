'use client';

import AllProperties from '../../components/propertiesForSale/AllProperties';
import Banner from '../../components/ui/Banner'

export default function PropertiesForSalePage() {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      <div className="w-full max-w-screen-xxl">
        <Banner title='Boliger til salg'/>
        <AllProperties />
      </div>
    </main>
  );
}
