import { Component, OnInit} from '@angular/core';
import {Flavour, UpdateFlavour} from "../flavour";
import { NewFlavour } from "../flavour";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import { FlavourService } from "../_services/flavour.service"
import { ManufacturerService } from "../_services/manufacturer.service";
import { Manufacturer } from "../manufacturer";
import {FlavourTypeService} from "../_services/flavour-type.service";
import {FlavourType} from "../flavour-type";

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
    private flavourTypeService: FlavourTypeService
  ) { }

  flavour: Flavour;
  manufacturer: Manufacturer;
  manufacturers: Manufacturer[];
  flavourTypes: FlavourType[];
  manufacturerName: string;
  manufacturerId: number;
  selectedManufacturer: number;
  checked: boolean;

  ngOnInit(): void {
    this.getFlavour();
    this.getManufacturerList();
    this.getFlavourTypeList()
  }

  getFlavour(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.flavourServuce.getFlavour(id)
    .subscribe(flavour => this.flavour = flavour);
  }

  save(): void {
    this.flavourServuce.updateFlavour(this.flavour)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getManufacturerList(): void {
      this.manufacturerService.getManufacturers().subscribe(manufacturers => this.manufacturers = manufacturers);
  }

  changeValue() {
    if(this.flavour.in_stock === true){
      this.checked = false;
    }else{
      this.checked = true;
    }
    this.flavour.in_stock = this.checked;
  }
  getFlavourTypeList(): void {
    this.flavourTypeService.getFlavourTypes()
      .subscribe(flavourTypes => this.flavourTypes = flavourTypes);
  }
}

