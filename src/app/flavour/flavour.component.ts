import {Component, OnInit, ViewChild} from '@angular/core';
import { Flavour} from '../_models/flavour';
import { Manufacturer } from '../_models/manufacturer';
import { FlavourService } from '../_services/flavour.service';
import { MessagesService } from '../_services/messages.service';
import { MatDialog} from '@angular/material/dialog';
import { FlavourAddComponent} from '../flavour-add/flavour-add.component';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import {MatSort} from '@angular/material/sort';
import {MixesItem} from '../mix/mix-datasource';



@Component({
  selector: 'app-flavours',
  templateUrl: './flavour.component.html',
  styleUrls: ['./flavour.component.scss']
})
export class FlavourComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MixesItem>;
  constructor(private flavourService: FlavourService,
              private messagesService: MessagesService,
              public dialog: MatDialog,
  ) { }

  flavours: Flavour[];
  manufacturer: Manufacturer;
  columnsToDisplay = ['flavour_name', 'manufacturer.name', 'in_stock', 'buttons'];
  public dataSource;

  ngOnInit(): void {
    this.getFlavours();
    this.ngAfterViewInit();
  }

  getFlavours(): void {
    this.flavourService.getFlavours()
    .subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
      });
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
    this.dataSource.sortingDataAccessor = (item, property) => {
    switch (property) {
      case 'manufacturer.name': return item.manufacturer.name;
      default: return item[property];
    }
  };
    this.dataSource.sort = this.sort;
  }

  deleteFlavour(flavour: Flavour): void {
    this.messagesService.add(` ${flavour.flavour_name} flavour deleted`);
    this.flavourService.deleteFlavour(flavour).subscribe();
  }

  openDialog() {
    const dialogRef = this.dialog.open(FlavourAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.messagesService.add(`${result} flavour added`);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
