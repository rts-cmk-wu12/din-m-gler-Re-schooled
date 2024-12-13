export interface Agent {
    id: string;
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedin: string;
    description: string;
    image: {
      formats: {
        thumbnail: {
          url: string;
        };
      };
    };
  }
  