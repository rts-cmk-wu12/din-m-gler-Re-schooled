import { useState, useEffect } from "react";

let updateUserStatus: (() => void) | null = null; // Global trigger

const useCurrentUser = () => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("dm_token="))
      ?.split("=")[1];

    if (token) {
      fetchUser(token);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const fetchUser = async (token: string) => {
    try {
      const response = await fetch("https://dinmaegler.onrender.com/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch {
      setIsLoggedIn(false);
    }
  };

  // Opret forbindelse til global trigger
  useEffect(() => {
    updateUserStatus = () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("dm_token="))
        ?.split("=")[1];
      if (token) fetchUser(token);
      else setIsLoggedIn(false);
    };

    return () => {
      updateUserStatus = null;
    };
  }, []);

  return { user, isLoggedIn };
};

// Global trigger-funktion
export const triggerUserUpdate = () => {
  updateUserStatus?.();
};

export default useCurrentUser;
