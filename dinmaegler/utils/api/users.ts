// export const getUserDetails = async (token: string) => {
//     try {
//       const response = await fetch("https://dinmaegler.onrender.com/users/me", {
//         method: "GET",
//         headers: {
//           "Authorization": `Bearer ${token}`, // Token skal bruges til autentificering
//         },
//       });
      
//       const data = await response.json();
//       console.log("User details response:", data);  // Console log for at se JSON-strukturen
//       return data;
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//       throw error;
//     }
//   };
  