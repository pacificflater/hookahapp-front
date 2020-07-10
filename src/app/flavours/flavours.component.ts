import { Component, OnInit } from '@angular/core';
import { Flavour} from "../flavour";
import { Manufacturer } from "../manufacturer";
import { FlavourService } from "../_services/flavour.service";
import { MessagesService } from "../_services/messages.service";
import { MatDialog} from "@angular/material/dialog";
import { FlavourAddComponent} from "../flavour-add/flavour-add.component";
import {MatTableDataSource} from "@angular/material/table";



@Component({
  selector: 'app-flavours',
  templateUrl: './flavours.component.html',
  styleUrls: ['./flavours.component.css']
})
export class FlavoursComponent implements OnInit {

  constructor(private flavourService: FlavourService,
              private messagesService: MessagesService,
              public dialog: MatDialog,
  ) {}

  flavours: Flavour[];
  manufacturer: Manufacturer;
  columnsToDisplay = ['flavour_name','manufacturer', 'in_stock', 'buttons'];
  public dataSource;

  ngOnInit(): void {
    this.getFlavours();
  }

  getFlavours(): void {
    this.flavourService.getFlavours()
    .subscribe(res => {
        this.dataSource = new MatTableDataSource(res)
      })
  }

  deleteFlavour(flavour: Flavour): void {
    this.messagesService.add(` ${flavour.flavour_name} flavour deleted`)
    this.flavourService.deleteFlavour(flavour).subscribe();
  }

  openDialog() {
    const dialogRef = this.dialog.open(FlavourAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.messagesService.add(`${result} flavour added`)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
