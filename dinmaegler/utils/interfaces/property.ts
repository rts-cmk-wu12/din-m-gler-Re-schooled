export interface Property {
    id: string;
    title: string;
    images: { url: string }[];
    price: number;
    type: string;
    adress1: string; // Bemærk stavningen
    postalcode: string;
    city: string;
    energylabel: string;
    rooms: string; // Streng, f.eks. "5/4"
    livingspace: number;
    lotsize: number;
    basementsize: number;
    built: number;
    remodel: number | null;
    description: string;
    agent: {
      name: string;
      title: string;
      phone: string;
      email: string;
      image: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
      };
    };
    floorplan: {
      name: string;
      url: string;
      size: number;
    };
    lat: number;
    long: number;
    gross: number;
    netto: number;
    payment: number;
    cost: number;
    users: {
      email: string;
      blocked: boolean;
      confirmed: boolean;
    }[];
  }