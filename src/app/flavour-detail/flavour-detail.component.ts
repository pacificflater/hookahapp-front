import { Component, OnInit} from '@angular/core';
import { Flavour } from "../flavour";
import { FlavourUpdate } from "../flavour";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import { FlavourService } from "../_services/flavour.service"
import { ManufacturerService } from "../_services/manufacturer.service";
import { Manufacturer } from "../manufacturer";

@Component({
  selector: 'app-flavour-detail',
  templateUrl: './flavour-detail.component.html',
  styleUrls: ['./flavour-detail.component.css']
})

export class FlavourDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private flavourServuce: FlavourService,
    private location: Location,
    private manufacturerService: ManufacturerService,
  ) { }

  flavour: Flavour;
  manufacturer: Manufacturer;
  manufacturers: Manufacturer[];
  manufacturerName: string;
  manufacturerId: number;
  selectedManufacturer: number;
  checked: boolean = false;

  ngOnInit(): void {
    this.getFlavour();
    this.getManufacturerList();
  }

  getFlavour(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.flavourServuce.getFlavour(id)
    .subscribe(flavour => this.flavour = flavour);
      // this.manufacturerService.getManufacturer(this.flavour.manufacturer).subscribe(manufacturer => this.manufacturer = manufacturer)
  }

  save(): void {
    this.flavour.in_stock = this.checked;
    this.flavour.manufacturer = this.flavour.manufacturer.id
    this.flavourServuce.updateFlavour(this.flavour)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }


  getManufacturerList(): void {
      this.manufacturerService.getManufacturers().subscribe(manufacturers => this.manufacturers = manufacturers);
  }

  changeValue(value) {
    if(this.flavour.in_stock === true){
      this.checked = value;
    }else{
      this.checked = !value;
    }
  }
}

