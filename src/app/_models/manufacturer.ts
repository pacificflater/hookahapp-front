export interface Manufacturer {
  id: number;
  name: string;
  type: {id: number, type: string};
  flavour: [{id: number, flavour_name: string, in_stock: boolean}];
}
