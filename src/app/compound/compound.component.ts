import { Component, OnInit } from '@angular/core';
import {FlavourService} from "../_services/flavour.service";
import {Flavour } from "../flavour";
import {Mix} from "../mix";
import {MixService} from "../_services/mix.service";
import {Compound} from "../compound";
import {CompoundService} from "../_services/compound.service";
import {ActivatedRoute} from "@angular/router";
import { NewCompound} from "../compound";

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css']
})
export class CompoundComponent implements OnInit {

  constructor(private flavourService: FlavourService,
              private mixService: MixService,
              private compoundService: CompoundService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.getFlavourList()
    this.getCurrentMix()

  }

  flavours: Flavour[];
  mixes: Mix[];
  mix: Mix;
  compounds: Compound[];
  newCompound: NewCompound[];
  selectedFlavour: number;

  getCurrentMix(): void {
    var pathArray = window.location.pathname.split('/');
    var id = pathArray.slice(-1).pop()
    console.log(id)
    this.mixService.getMix(id)
    .subscribe(mix => this.mix = mix);
  }

  addCompound(flavour: number, percentage: number): void {
    let mix = this.mix.id
    this.compoundService.addCompound({ flavour, percentage, mix } as NewCompound)
    .subscribe(newCompound => {
      this.newCompound.push(newCompound);
    });
  }

  getFlavourList(): void {
      this.flavourService.getFlavours().subscribe(flavours => this.flavours = flavours);
    }

    getMixList(): void {
     this.mixService.getMixes().subscribe(mixes => this.mixes = mixes);
    }

}
