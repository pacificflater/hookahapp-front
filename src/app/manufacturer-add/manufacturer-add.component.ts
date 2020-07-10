import { Component, OnInit } from '@angular/core';
import {Manufacturer} from "../manufacturer";
import { ManufacturerService} from "../_services/manufacturer.service";

@Component({
  selector: 'app-manufacturer-add',
  templateUrl: './manufacturer-add.component.html',
  styleUrls: ['./manufacturer-add.component.css']
})
export class ManufacturerAddComponent implements OnInit {

  constructor(private manufacturerService: ManufacturerService) { }

  manufacturers: Manufacturer[]

  ngOnInit(): void {
  }

  addManufacturer(name: string): void {
    name = name.trim();
    if (!name) { return; }
      this.manufacturerService.addManufacturer({ name } as Manufacturer)
    .subscribe(manufacturer => {
      this.manufacturers.push(manufacturer);
    });
  }
}
