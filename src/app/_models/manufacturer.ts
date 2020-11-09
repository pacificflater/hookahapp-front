export interface Manufacturer {
  id: number;
  name: string;
  type: {id: number, type: string};
  flavours: [{flavour_name: string, in_stock: boolean}];
}
