export interface PropertyDetailsProps {
    id: string;
    livingspace: number;
    landArea: number;
    rooms: string | number; // F.eks. "5/4"
    numberOfFloors: number;
    energylabel: string;
    buildYear: number;
    renovatedYear: number | null;
    basementsize: number | null;
    gross: number;
    netto: number;
    payment: number;
    cost: number;
  }