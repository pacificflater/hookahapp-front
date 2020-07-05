import {Manufacturer} from "./manufacturer";

export interface Flavour {
  id: number;
  flavour_name: string;
  in_stock: boolean;
  manufacturer: {id: number, name: string};
  add_time: string;
}
