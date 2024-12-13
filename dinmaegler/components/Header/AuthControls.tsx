'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';
import useCurrentUser from '@/utils/api/users/useCurrentUser';

export function AuthControls() {
  const { isLoggedIn: initialLoggedInStatus } = useCurrentUser();
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInStatus);

  // Effekt der opdaterer loginstatus, når `initialLoggedInStatus` ændrer sig
  useEffect(() => {
    setIsLoggedIn(initialLoggedInStatus);
  }, [initialLoggedInStatus]);

  const handleLogout = () => {
    document.cookie = 'dm_token=; Path=/; Max-Age=0;';
    document.cookie = 'dm_userid=; Path=/; Max-Age=0;';
    setIsLoggedIn(false); // Opdaterer UI direkte
  };

  return (
    <div className="flex items-center space-x-4">
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="text-white flex items-center space-x-2 hover:underline"
          aria-label="Log ud"
        >
          <User className="h-4 w-4" />
          <span>Log ud</span>
        </button>
      ) : (
        <Link
          href="/login"
          className="text-white flex items-center space-x-2 hover:underline"
          aria-label="Log ind"
        >
          <User className="h-4 w-4" />
          <span>Log ind</span>
        </Link>
      )}
    </div>
  );
}
