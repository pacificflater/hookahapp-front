import { Component, OnInit, Input } from '@angular/core';
import { Manufacturer } from "../manufacturer";
import {ActivatedRoute, Route} from '@angular/router';
import { Location } from '@angular/common';
import { ManufacturerService} from "../_services/manufacturer.service";
import {ManufacturerTypeService} from "../_services/manufacturer-type.service";
import {ManufacturerType} from "../manufacturer-type";

@Component({
  selector: 'app-manufacturer-detail',
  templateUrl: './manufacturer-detail.component.html',
  styleUrls: ['./manufacturer-detail.component.css']
})

export class ManufacturerDetailComponent implements OnInit {

  manufacturer: Manufacturer;
  panelOpenState = false;


  constructor(
    private route: ActivatedRoute,
    private manufacturerServuce: ManufacturerService,
    private location: Location,
    private manufacturerTypeService: ManufacturerTypeService
  ) { }

  manufacturerTypes: ManufacturerType[];

  ngOnInit(): void {
    this.getManufacturer();
    this.getManufacturerType()
  }

  getManufacturer(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.manufacturerServuce.getManufacturer(id)
    .subscribe(manufacturer => this.manufacturer = manufacturer);
  }

  save(): void {
    this.manufacturerServuce.updateManufacturer(this.manufacturer)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getManufacturerType(): void {
    this.manufacturerTypeService.getManufacturerType()
      .subscribe(manufacturerTypes => this.manufacturerTypes = manufacturerTypes)
  }
}
