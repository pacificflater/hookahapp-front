export interface Manufacturer {
  id: number;
  name: string;
  flavours: [{flavour_name: string, in_stock: boolean}];
}
