import {Component, Input, OnInit} from '@angular/core';
import {Mix} from "../mix";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {MixService} from "../_services/mix.service";
import {CompoundService} from "../_services/compound.service";
import {MatDialog} from "@angular/material/dialog";
import {CompoundComponent} from "../compound/compound.component";
import { MessagesService } from "../_services/messages.service";


@Component({
  selector: 'app-mix-detail',
  templateUrl: './mix-detail.component.html',
  styleUrls: ['./mix-detail.component.css']
})
export class MixDetailComponent implements OnInit {

  @Input() mix: Mix;
  removable = true;
  constructor(
    private route: ActivatedRoute,
    private mixService: MixService,
    private location: Location,
    public compoundService: CompoundService,
    public dialog: MatDialog,
    public messagesService: MessagesService
  ) { }

  ngOnInit(): void {
    this.getMix();
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
    this.compoundService.deleteCompound(compound_id).subscribe(()=>this.messagesService.add('Flavour deleted'));
  }

   openDialog() {
    const dialogRef = this.dialog.open(CompoundComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.messagesService.add(`Flavour added`)
    });
  }


}
