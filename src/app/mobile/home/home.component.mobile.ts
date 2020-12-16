import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MixesItem} from '../../mix/mix-datasource';
import {MixService} from '../../_services/mix.service';
import {MatDialog} from '@angular/material/dialog';
import {MessagesService} from '../../_services/messages.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.mobile.html',
  styleUrls: ['./home.component.mobile.css']
})
export class HomeComponentMobile implements AfterViewInit, OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MixesItem>;
  dataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['mix_name', 'rating'];

  ngOnInit() {
    this.getMixesList();
    this.ngAfterViewInit();
  }

  constructor( public mixService: MixService,
               public dialog: MatDialog,
               public messagesService: MessagesService) { }

  getMixesList(): void {
    this.mixService.getAvailableMixes().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
