import { Component, OnInit } from '@angular/core';
import {Flavour} from '../_models/flavour';
import {MixService} from '../_services/mix.service';
import { Mix, NewMix } from '../_models/mix';
import { Bowl } from '../_models/bowl';
import {BowlService} from '../_services/bowl.service';


@Component({
  selector: 'app-mix-add',
  templateUrl: './mix-add.component.html',
  styleUrls: ['./mix-add.component.css']
})
export class MixAddComponent implements OnInit {

  constructor(private mixService: MixService,
              private bowlService: BowlService,
              ) { }

  mix: NewMix;
  bowls: Bowl[];
  mixes: NewMix[];
  flavours: Flavour[];
  strength = 0;
  rating = 0;
  selectedBowl: number;

  ngOnInit(): void {
    this.getBowls();
  }


  // tslint:disable-next-line:variable-name
  addMix(mix_name: string, rating: number, strength: number, bowl: number): void {
    mix_name = mix_name.trim();
    if (!mix_name) { return; }
    this.mixService.addMixes({mix_name, rating, strength, bowl} as NewMix)
    .subscribe(mix => {
      this.mixes.push(mix);
    });
  }

  getBowls(): void {
    this.bowlService.getBowls()
      .subscribe(bowl => this.bowls = bowl);
  }

}
