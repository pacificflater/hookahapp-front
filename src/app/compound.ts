export interface Compound {
  id: number,
  persentage: number;
  mix: number;
  flavour: {
    id: number,
    flavour_name: string,
    manufacturer: {name: string}
    in_stock: boolean,
  }
}
