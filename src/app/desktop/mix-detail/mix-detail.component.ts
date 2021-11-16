import { Component, OnInit } from '@angular/core';
import {MixService} from "../../_services/mix.service";
import {ActivatedRoute} from "@angular/router";
import {Mix} from "../../_models/mix";
import {Location} from "@angular/common";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-mix-detail',
  templateUrl: './mix-detail.component.html',
  styleUrls: ['./mix-detail.component.css']
})
export class MixDetailDesctopComponent implements OnInit {

  constructor(
    private mixService: MixService,
    private route: ActivatedRoute,
    private location: Location,
    public userService: UserService
  ) { }

  mix: Mix;

  percentageArray: Array<any>;
  flavourNameArray: Array<any>;
  type = 'PieChart';
  options = {
      pieHole:0.4,
      chartArea: {
          top: 4,
          width: 400,
          height: 300
      },
      legend: 'right',
   };

  ngOnInit(): void {
    this.getMix()
    this.getPercentageList()
    this.getFlavoursList()
  }

  getMix(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.mixService.getMix(id)
    .subscribe(mix => this.mix = mix);
  }

  getPercentageList(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mixService.getMixPercentageList(id)
      .subscribe(percentageArray => this.percentageArray = percentageArray)
  }

  getFlavoursList(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mixService.getMixFlavoursList(id)
      .subscribe(flavourNameArray => this.flavourNameArray = flavourNameArray)
  }

  goBack(): void {
    this.location.back();
  }
}
