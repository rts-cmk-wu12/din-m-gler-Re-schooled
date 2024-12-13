export const fetchAgents = async () => {
    try {
      const response = await fetch("https://dinmaegler.onrender.com/agents", {
        method: "GET",
      });
      
      const data = await response.json();
      console.log("Agents response:", data);  // Console log for at se JSON-strukturen
      return data;
    } catch (error) {
      console.error("Error fetching agents:", error);
      throw error;
    }
  };
  
  export const fetchAgentById = async (id: string) => {
    try {
      const response = await fetch(`https://dinmaegler.onrender.com/agents/${id}`, {
        method: "GET",
      });
      
      const data = await response.json();
      console.log("Agent by id response:", data);  // Console log for at se JSON-strukturen
      return data;
    } catch (error) {
      console.error("Error fetching agent by id:", error);
      throw error;
    }
  };
  