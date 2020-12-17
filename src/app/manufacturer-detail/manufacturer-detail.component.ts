import { Component, OnInit } from '@angular/core';
import {ManufacturerService} from "../_services/manufacturer.service";
import {ActivatedRoute} from "@angular/router";
import {Manufacturer} from "../_models/manufacturer";
import {Location} from "@angular/common";

@Component({
  selector: 'app-manufacturer-detail',
  templateUrl: './manufacturer-detail.component.html',
  styleUrls: ['./manufacturer-detail.component.css']
})
export class ManufacturerDetailComponent implements OnInit {

  manufacturer: Manufacturer;

  constructor(private manufacturerService: ManufacturerService,
              private route: ActivatedRoute,
              private location: Location

  ) { }

  ngOnInit(): void {
    this.getManufacturer();
  }

  getManufacturer(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.manufacturerService.getManufacturer(id)
    .subscribe(manufacturer => this.manufacturer = manufacturer);
  }

  goBack(): void {
    this.location.back();
  }
}
