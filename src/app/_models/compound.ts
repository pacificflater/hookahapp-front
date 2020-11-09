export interface Compound {
  id: number;
  percentage: number;
  mix: number;
  flavour: {
    id: number,
    flavour_name: string,
    manufacturer: {name: string}
    in_stock: boolean,
  };
}

export  interface NewCompound {
  percentage: number;
  mix: number;
  flavour: number;
}
