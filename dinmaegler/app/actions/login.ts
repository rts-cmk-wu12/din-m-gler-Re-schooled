export default async function login(formData: FormData) {
    const { identifier, password } = Object.fromEntries(formData);
  
    try {
      const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return { success: false, errors: errorData };
      }
  
      const data = await response.json();
  
      // Set cookies for user and token
      document.cookie = `dm_token=${data.jwt}; Path=/; Max-Age=3600;`;
      document.cookie = `dm_userid=${data.user.id}; Path=/; Max-Age=3600;`;
  
      return { success: true, user: data.user };
    } catch (error) {
      console.error("Login error", error);
      return { success: false, errors: { general: "Der opstod en fejl under login" } };
    }
  }
  