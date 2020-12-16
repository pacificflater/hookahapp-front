import { Component, OnInit } from '@angular/core';
import {FlavourService} from "../_services/flavour.service";
import {Flavour} from "../_models/flavour";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-flavour-detail',
  templateUrl: './flavour-detail.component.html',
  styleUrls: ['./flavour-detail.component.css']
})
export class FlavourDetailComponent implements OnInit {

  constructor(private flavourService: FlavourService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getFlavour()
  }

  flavour: Flavour

  getFlavour(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.flavourService.getFlavour(id)
    .subscribe(flavour => this.flavour = flavour);
  }

  goBack(): void {
    this.location.back();
  }

}
