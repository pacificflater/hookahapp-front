import { Component, OnInit } from '@angular/core';
import {FlavourService} from '../_services/flavour.service';
import {Flavour } from '../_models/flavour';
import {Mix} from '../_models/mix';
import {MixService} from '../_services/mix.service';
import {CompoundService} from '../_services/compound.service';
import { NewCompound} from '../_models/compound';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css']
})
export class CompoundComponent implements OnInit {

  constructor(private flavourService: FlavourService,
              private mixService: MixService,
              private compoundService: CompoundService,
              ) { }

  flavours: Flavour[];
  mix: Mix;
  newCompound: NewCompound[];
  selectedFlavour: number;

  ngOnInit(): void {
    this.getFlavourList();
    this.getCurrentMix();
    // this.getRest()

  }

  getCurrentMix(): void {
    const pathArray = window.location.pathname.split('/');
    const id = pathArray.slice(-1).pop();
    this.mixService.getMix(id)
    .subscribe(mix => this.mix = mix);

  }

  // getRest(): void {
  //   let rest = 100
  //   let compound
  //   var pathArray = window.location.pathname.split('/');
  //   var id = pathArray.slice(-1).pop()
  //   this.mixService.getMix(id)
  //   .subscribe(
  //     for(compound in this.mix.compound){
  //     rest = rest - compound.percentage
  //     console.log(rest)
  //   });

  // }

  addCompound(flavour: number, percentage: number): void {
    const mix = this.mix.id;
    this.compoundService.addCompound({ flavour, percentage, mix } as NewCompound)
    .subscribe(newCompound => {
      this.newCompound.push(newCompound);
    });
  }

  getFlavourList(): void {
      this.flavourService.getFlavours().subscribe(flavours => this.flavours = flavours);
    }

}
