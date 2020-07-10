import { Component, OnInit, Input } from '@angular/core';
import { Manufacturer } from "../manufacturer";
import {ActivatedRoute, Route} from '@angular/router';
import { Location } from '@angular/common';
import { ManufacturerService} from "../_services/manufacturer.service";

@Component({
  selector: 'app-manufacturer-detail',
  templateUrl: './manufacturer-detail.component.html',
  styleUrls: ['./manufacturer-detail.component.css']
})

export class ManufacturerDetailComponent implements OnInit {

  @Input() manufacturer: Manufacturer;
  panelOpenState = false;


  constructor(
    private route: ActivatedRoute,
    private manufacturerServuce: ManufacturerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getManufacturer();
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
}
