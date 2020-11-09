import { Component, OnInit } from '@angular/core';
import {Manufacturer} from '../_models/manufacturer';
import { ManufacturerService} from '../_services/manufacturer.service';
import {ManufacturerTypeService} from '../_services/manufacturer-type.service';
import {ManufacturerType} from '../_models/manufacturer-type';

@Component({
  selector: 'app-manufacturer-add',
  templateUrl: './manufacturer-add.component.html',
  styleUrls: ['./manufacturer-add.component.css']
})
export class ManufacturerAddComponent implements OnInit {

  constructor(private manufacturerService: ManufacturerService,
              private manufacturerTypeService: ManufacturerTypeService) { }

  manufacturers: Manufacturer[];
  manufacturerTypes: ManufacturerType[];
  selectedType: any;
  types: string[] = ['TC', 'TE'];
  ngOnInit(): void {
    this.getManufacturerType();
  }

  addManufacturer(name: string, type): void {
    name = name.trim();
    console.log(type);
    if (!name) { return; }
    this.manufacturerService.addManufacturer({ name, type } as Manufacturer)
    .subscribe(manufacturer => {
      this.manufacturers.push(manufacturer);
    });
  }
  getManufacturerType(): void {
    this.manufacturerTypeService.getManufacturerType()
      .subscribe(manufacturerTypes => this.manufacturerTypes = manufacturerTypes);
  }

}
