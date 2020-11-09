import {Manufacturer} from './manufacturer';

export interface Flavour {
  id: number;
  flavour_name: string;
  in_stock: boolean;
  flavour_type: [{id: number, type: string}];
  manufacturer: {id: number, name: string};
  add_time: string;
}

export interface NewFlavour {
  flavour_name: string;
  flavour_type: number[];
  in_stock: boolean;
  manufacturer: number;
  add_time: string;
}

export interface UpdateFlavour {
  id: number;
  flavour_name: string;
  in_stock: boolean;
  manufacturer: number;
  add_time: string;
}
