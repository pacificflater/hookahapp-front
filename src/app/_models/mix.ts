export interface Mix {
  id: number;
  mix_name: string;
  rating: number;
  strength: number;
  bowl: {id: number, type: {id: number, type: string}, name: string};
  compound: [{
    id: number,
    percentage: number;
    flavour: {id: number, flavour_name: string, in_stock: boolean}
  }];
  description: string;
}

export interface NewMix {
  mix_name: string;
  rating: number;
  strength: number;
  bowl: number;
  description: string;
}
