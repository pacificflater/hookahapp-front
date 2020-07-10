import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MixesDataSource, MixesItem } from './mixes-datasource';
import { MixService } from "../_services/mix.service";
import {Mix} from "../mix";
import {MixAddComponent} from "../mix-add/mix-add.component";
import { MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import { MessagesService } from "../_services/messages.service";

@Component({
  selector: 'app-mixes',
  templateUrl: './mixes.component.html',
  styleUrls: ['./mixes.component.css']
})
export class MixesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MixesItem>;
  dataSource: any;
  mixes: Mix[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'strength', 'rating', 'compound', 'buttons'];

  ngOnInit() {
    this.getMixesList();
  }

  constructor( public mixService: MixService,
               public dialog: MatDialog,
               public messagesService: MessagesService) { }

  getMixesList(): void {
    this.mixService.getMixes().subscribe(res => {this.dataSource = new MatTableDataSource(res)});
  }

  deleteMix(mix: Mix): void {
    this.messagesService.add(`${mix.mix_name} mix deleted`)
    this.mixService.deleteMix(mix).subscribe();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog() {
    const dialogRef = this.dialog.open(MixAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.messagesService.add(`${result} mix added`)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
