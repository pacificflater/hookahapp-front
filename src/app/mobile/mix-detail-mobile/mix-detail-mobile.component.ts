import { Component, OnInit } from '@angular/core';
import {MixService} from "../../_services/mix.service";
import {ActivatedRoute} from "@angular/router";
import {Mix} from "../../_models/mix";
import {Location} from "@angular/common";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-mix-detail',
  templateUrl: './mix-detail-mobile.component.html',
  styleUrls: ['./mix-detail-mobile.component.css']
})
export class MixDetailMobileComponent implements OnInit {

  constructor(
    private mixService: MixService,
    private route: ActivatedRoute,
    private location: Location,
    public userService: UserService,
  ) { }

  mix: Mix;

  percentageArray: Array<any>;
  flavourNameArray: Array<any>;
  type = 'PieChart';
  options = {
      fontSize:12,
      fontName: 'Roboto',
      pieHole:0.4,
      height: 300,
      chartArea: {
          top: 40,
          left: 5,
          width: '100%'
      },
      legend: {
        position: 'right',
        alignment: 'center',
        textStyle: {
          fontSize: 12,
          fontName: 'Roboto'
        }
      },

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
