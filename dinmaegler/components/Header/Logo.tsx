'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex justify-start">
      <Link href="/">
        <Image
          src="/assets/Frame.svg"
          alt="Design Frame logo"
          width={250}
          height={60}
          className="object-contain mt-8"
        />
      </Link>
    </div>
  );
}
