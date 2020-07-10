export interface Mix {
  id: number;
  mix_name: string;
  rating: number;
  strength: number;
  compound: [{
    id: number,
    percentage: number;
    flavour: {id: number, flavour_name: string, in_stock: boolean}
  }]
}
