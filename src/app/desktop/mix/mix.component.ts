import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MixesItem } from './mix-datasource';
import { MixService } from '../../_services/mix.service';
import { Mix } from '../../_models/mix';
import { MixAddComponent } from '../../mix-add/mix-add.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MessagesService } from '../../_services/messages.service';
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-mixes',
  templateUrl: './mix.component.html',
  styleUrls: ['./mix.component.css']
})
export class MixComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MixesItem>;
  dataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['mix_name', 'strength', 'rating', 'compound', 'buttons'];

  ngOnInit() {
    this.getMixesList();
    this.ngAfterViewInit();
  }

  constructor( public mixService: MixService,
               public dialog: MatDialog,
               public messagesService: MessagesService,
               public userService: UserService) { }

  getMixesList(): void {
    this.mixService.getMixes().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    });
  }

  deleteMix(mix: Mix): void {
    this.messagesService.add(`${mix.mix_name} mix deleted`);
    this.mixService.deleteMix(mix).subscribe();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  openDialog() {
    const dialogRef = this.dialog.open(MixAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.messagesService.add(`${result} mix added`);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
