const BASE_URL = "https://dinmaegler.onrender.com";

export const login = async (credentials: { email: string, password: string }) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    
    const data = await response.json();
    console.log("Login response:", data);  // Console log for at se JSON-strukturen
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
