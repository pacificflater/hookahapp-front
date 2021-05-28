import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Manufacturer } from '../../_models/manufacturer';
import { ManufacturerService } from '../../_services/manufacturer.service';
import { MessagesService } from '../../_services/messages.service';
import { ManufacturerAddComponent} from '../../manufacturer-add/manufacturer-add.component';
import { MatDialog} from '@angular/material/dialog';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MixesItem} from '../mix/mix-datasource';


@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturer-desktop.component.html',
  styleUrls: ['./manufacturer-desktop.component.scss']
})
export class ManufacturerDesktopComponent implements AfterViewInit, OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MixesItem>;
  dataSource: any;

  columnsToDisplay = ['name',  'type.type', 'buttons'];

  constructor(private manufacturerService: ManufacturerService,
              public messageService: MessagesService,
              public dialog: MatDialog
) {}

  manufacturers: Manufacturer[];

  ngOnInit(): void {
    this.getManufacturers();
    this.ngAfterViewInit();
  }

  getManufacturers(): void {
    this.manufacturerService.getManufacturers()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
      });
  }

  deleteManufacturer(manufacturer: Manufacturer): void {
    this.manufacturerService.deleteManufacturer(manufacturer).subscribe(() => this.messageService.add(`${manufacturer.name} manufacturer deleted`));
  }

  ngAfterViewInit() {
    this.table.dataSource = this.dataSource;
    this.dataSource.sortingDataAccessor = (item, property) => {
    switch (property) {
      case 'type.type': return item.type.type;
      default: return item[property];
    }
  };
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ManufacturerAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.messageService.add(`${result} manufacturer added`);
      console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // filterChanged(event: FilterChangedEvent) {
  //   const filterModel = event.api.getFilterModel();
  //   this.filterService.persistFilters(filterModel);
  //   const params = this.filterService.getQueryParamsFromFilters();
  //   this.router.navigate([], {
  //     relativeTo: this.route,
  //     queryParams: params,
  //     queryParamsHandling: 'merge'
  //   });
  // }

  // clearAllFilters() {
  //   this.gridApi.setFilterModel(null);
  // }
  //
  // onGridReady(params: { api: GridApi; columnApi: ColumnApi; type: string }) {
  //   // ...
  //   const filters = this.filterService.getFiltersFromQueryParams(
  //     this.route.snapshot.queryParams
  //   );
  //   filters && this.gridApi.setFilterModel(filters);
  // }

}

