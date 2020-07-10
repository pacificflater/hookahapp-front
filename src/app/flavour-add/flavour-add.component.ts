import { Component, OnInit } from '@angular/core';
import {Flavour} from "../flavour";
import { FlavourService} from "../_services/flavour.service";
import {ManufacturerService} from "../_services/manufacturer.service";
import {Manufacturer} from "../manufacturer";

@Component({
  selector: 'app-flavour-add',
  templateUrl: './flavour-add.component.html',
  styleUrls: ['./flavour-add.component.css']
})
export class FlavourAddComponent implements OnInit {

  constructor(private flavourService: FlavourService,
              private manufacturerService: ManufacturerService) { }

  flavours: Flavour[];
  manufacturer: Manufacturer;
  manufacturers: Manufacturer[];
  selectedManufacturer: number;
  checked: boolean = false;


  ngOnInit(): void {
    this.getFlavours();
    this.getManufacturerList();
  }

  getFlavours(): void {
    this.flavourService.getFlavours()
        .subscribe(flavours => this.flavours = flavours);
  }

  addFlavour(flavour_name: string, in_stock: boolean, manufacturer: number): void {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var add_time = yyyy + '-' + mm + '-' + dd;

    flavour_name = flavour_name.trim();
    if (!flavour_name) { return; }
      this.flavourService.addFlavour({ flavour_name, in_stock, manufacturer, add_time } as Flavour)
    .subscribe(flavour => {
      this.flavours.push(flavour);
    });
  }

  getManufacturerList(): void {
      this.manufacturerService.getManufacturers().subscribe(manufacturers => this.manufacturers = manufacturers);
    }

  changeValue(value) {
    this.checked = !value;
  }
}
