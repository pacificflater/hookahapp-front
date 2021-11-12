import { Component, OnInit } from '@angular/core';
import {FlavourService} from "../../_services/flavour.service";
import { Mix} from '../../_models/mix';
import {Flavour} from "../../_models/flavour";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-flavour-detail',
  templateUrl: './flavour-detail-mobile.component.html',
  styleUrls: ['./flavour-detail-mobile.component.css']
})
export class FlavourDetailMobileComponent implements OnInit {

  constructor(private flavourService: FlavourService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
    this.getFlavour();
    this.getMixes();
  }

  params: any;
  flavour: Flavour
  mixes: Mix[];

  getFlavour(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.flavourService.getFlavour(id)
    .subscribe(flavour => this.flavour = flavour);
  }

  getMixes(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.flavourService.getMixes(id)
      .subscribe(mixes => this.mixes = mixes)
  }

  goBack(): void {
    this.location.back();
  }

}
