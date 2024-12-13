export const fetchHomes = async () => {
    try {
      const response = await fetch("https://dinmaegler.onrender.com/homes", {
        method: "GET",
      });
      
      const data = await response.json();
      console.log("Homes response:", data);  // Console log for at se JSON-strukturen
      return data;
    } catch (error) {
      console.error("Error fetching homes:", error);
      throw error;
    }
  };
  
  export const fetchHomesCount = async () => {
    try {
      const response = await fetch("https://dinmaegler.onrender.com/homes/count", {
        method: "GET",
      });
      
      const data = await response.json();
      console.log("Home count response:", data);  // Console log for at se JSON-strukturen
      return data;
    } catch (error) {
      console.error("Error fetching home count:", error);
      throw error;
    }
  };
  
  export const fetchHomesByType = async (type: string) => {
    try {
      const response = await fetch(`https://dinmaegler.onrender.com/homes?type_eq=${type}`, {
        method: "GET",
      });
      
      const data = await response.json();
      console.log("Homes by type response:", data);  // Console log for at se JSON-strukturen
      return data;
    } catch (error) {
      console.error("Error fetching homes by type:", error);
      throw error;
    }
  };
  