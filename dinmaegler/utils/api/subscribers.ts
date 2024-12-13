export const createSubscriber = async (email: string) => {
    try {
      const response = await fetch("https://dinmaegler.onrender.com/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      console.log("Create subscriber response:", data);  // Console log for at se JSON-strukturen
      return data;
    } catch (error) {
      console.error("Error creating subscriber:", error);
      throw error;
    }
  };
  
  export const deleteSubscriber = async (email: string) => {
    try {
      const response = await fetch(`https://dinmaegler.onrender.com/subscribers/${email}`, {
        method: "DELETE",
      });
      
      const data = await response.json();
      console.log("Delete subscriber response:", data);  // Console log for at se JSON-strukturen
      return data;
    } catch (error) {
      console.error("Error deleting subscriber:", error);
      throw error;
    }
  };
  