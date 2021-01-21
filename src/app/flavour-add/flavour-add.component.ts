import { Component, OnInit } from '@angular/core';
import {Flavour, NewFlavour} from '../_models/flavour';
import { FlavourType } from '../_models/flavour-type';
import { FlavourService} from '../_services/flavour.service';
import {ManufacturerService} from '../_services/manufacturer.service';
import {Manufacturer} from '../_models/manufacturer';
import {FlavourTypeService} from '../_services/flavour-type.service';

@Component({
  selector: 'app-flavour-add',
  templateUrl: './flavour-add.component.html',
  styleUrls: ['./flavour-add.component.css']
})
export class FlavourAddComponent implements OnInit {

  constructor(private flavourService: FlavourService,
              private manufacturerService: ManufacturerService,
              private flavourTypeService: FlavourTypeService) { }

  flavours: Flavour[];
  newFlavour: NewFlavour[];
  flavourTypes: FlavourType[];
  manufacturer: Manufacturer;
  manufacturers: Manufacturer[];
  selectedManufacturer: number;
  selectedOptions: number[];
  checked = false;
  // tslint:disable-next-line:variable-name
  flavour_type: number[];


  ngOnInit(): void {
    this.getFlavours();
    this.getFlavourTypeList();
    this.getManufacturerList();
  }

  getFlavours(): void {
    this.flavourService.getFlavours()
        .subscribe(flavours => this.flavours = flavours);
  }

  // tslint:disable-next-line:variable-name
  addFlavour(flavour_name: string, in_stock: boolean, manufacturer: number, flavour_type: number[], description: string): void {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    // tslint:disable-next-line:variable-name
    const add_time = yyyy + '-' + mm + '-' + dd;
    flavour_name = flavour_name.trim();
    if (!flavour_name) { return; }
    this.flavourService.addFlavour({ flavour_name, flavour_type, in_stock, manufacturer, add_time,  description} as NewFlavour)
    .subscribe(flavour => {
      this.newFlavour.push(flavour);
    });
  }

  getManufacturerList(): void {
      this.manufacturerService.getManufacturers().subscribe(manufacturers => this.manufacturers = manufacturers);
    }
  getFlavourTypeList(): void {
    this.flavourTypeService.getFlavourTypes()
      .subscribe(flavourTypes => this.flavourTypes = flavourTypes);
  }

  changeValue(value) {
    this.checked = !value;
  }

}
