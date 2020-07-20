import { Component, OnInit } from '@angular/core';
import {Flavour} from "../flavour";
import {MixService} from "../_services/mix.service";
import { Mix } from "../mix";
import {Compound} from "../compound";
import {CompoundService} from "../_services/compound.service";
import {FlavourService} from "../_services/flavour.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-mix-add',
  templateUrl: './mix-add.component.html',
  styleUrls: ['./mix-add.component.css']
})
export class MixAddComponent implements OnInit {

  constructor(private mixService: MixService,
              private compoundService: CompoundService,
              private flavourService: FlavourService,
              private location: Location) { }

  ngOnInit(): void {
    // this.getFlavours()
  }

  mix: Mix;
  mixes: Mix[];
  flavours: Flavour[]
  strength = 0
  rating = 0


  addMix(mix_name: string, rating: number, strength: number): void {
    console.log(rating)
    mix_name = mix_name.trim();
    if (!mix_name) { return; }
      this.mixService.addMixes({ mix_name, rating, strength} as Mix)
    .subscribe(mix => {
      this.mixes.push(mix);
    });
  }

  // getFlavours(): void {
  //   this.flavourService.getFlavours()
  //       .subscribe(flavours => this.flavours = flavours);
  // }

  // setCompound(selectedFlavour: number, selectedPercentage: number): void {
  //   let compound = []
  //
  // }

}
