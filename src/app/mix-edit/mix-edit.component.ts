import {Component, Input, OnInit} from '@angular/core';
import {Mix} from '../_models/mix';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MixService} from '../_services/mix.service';
import {CompoundService} from '../_services/compound.service';
import {MatDialog} from '@angular/material/dialog';
import {CompoundComponent} from '../compound/compound.component';
import { CompoundDetailComponent } from '../compound-detail/compound-detail.component';
import { MessagesService } from '../_services/messages.service';
import {BowlService} from '../_services/bowl.service';
import {Bowl} from '../_models/bowl';


@Component({
  selector: 'app-mix-detail',
  templateUrl: './mix-edit.component.html',
  styleUrls: ['./mix-edit.component.css']
})
export class MixEditComponent implements OnInit {

  @Input() mix: Mix;

  constructor(
    private route: ActivatedRoute,
    private mixService: MixService,
    private location: Location,
    public compoundService: CompoundService,
    public dialog: MatDialog,
    public messagesService: MessagesService,
    public bowlService: BowlService,
  ) { }

  bowls: Bowl[];
  selectedBowl: string;
  ratings = [1,2,3,4,5]
  strengths = [1,2,3,4,5,6,7,8,9,10]

  ngOnInit(): void {
    this.getMix();
    this.getBowls();
  }

  getMix(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.mixService.getMix(id)
    .subscribe(mix => this.mix = mix);
  }

  save(): void {
    this.mixService.updateMix(this.mix)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  remove(compound_id): void {
    this.compoundService.deleteCompound(compound_id).subscribe(() => this.messagesService.add('Flavour deleted'));
  }

   openDialog() {
    const dialogRef = this.dialog.open(CompoundComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.messagesService.add(`Flavour added`);
    });
  }

  openCompoundEditDialog(compound_id) {
    const dialogRef = this.dialog.open(CompoundDetailComponent, {
      data: { id: compound_id }
    });
    dialogRef.afterClosed().subscribe(
      result => {
      this.messagesService.add(`Flavour edited`);
    });
  }

  getBowls() {
    this.bowlService.getBowls()
      .subscribe(bowl => this.bowls = bowl);
  }


}
