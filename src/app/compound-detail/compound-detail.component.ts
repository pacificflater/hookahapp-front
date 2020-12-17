import { Component, OnInit } from '@angular/core';
import { Compound } from '../_models/compound';
import { CompoundService } from '../_services/compound.service';
import { MixService } from '../_services/mix.service';
import { Mix } from '../_models/mix';
import {Location} from '@angular/common';

@Component({
  selector: 'app-compound-detail',
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.css']
})
export class CompoundDetailComponent implements OnInit {

  constructor(private compoundService: CompoundService,
              private mixService: MixService,
              private location: Location
  ) { }

  compound: Compound;
  mix: Mix;
  compound_id: number;


  ngOnInit(): void {
    // this.getCurrentMix();
    // this.getCompound(compound_id)
  }

  // getCurrentMix(): void {
  //   let pathArray = window.location.pathname.split('/');
  //   let id = pathArray.slice(-1).pop();
  //   this.mixService.getMix(id)
  //   .subscribe(mix => this.mix = mix);
  // }

  getCompound(compound_id): void {
      this.compoundService.getCompound(compound_id)
  }

  // getCurrentCompound(): void {
  //   for(compound in this.mix.compound){
  //
  //   }
  // }

  updateCompound(): void {
    this.compoundService.updateCompound(this.compound)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
