import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../manufacturer';
import { ManufacturerService } from "../_services/manufacturer.service";
import { MessagesService } from "../_services/messages.service";
import { ManufacturerAddComponent} from "../manufacturer-add/manufacturer-add.component";
import { MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";



@Component({
  selector: 'app-manufacturers',
  templateUrl: './manufacturers.component.html',
  styleUrls: ['./manufacturers.component.css']
})
export class ManufacturersComponent implements OnInit {

  constructor(private manufacturerService: ManufacturerService,
              public messageService: MessagesService,
              public dialog: MatDialog) {}

  // manufacturers: Manufacturer[];
  columnsToDisplay = ['name', 'buttons'];
  public dataSource;

  ngOnInit(): void {
    this.getManufacturers();
  }

  getManufacturers(): void {
    this.manufacturerService.getManufacturers()
        // .subscribe(manufacturers => this.manufacturers = manufacturers);
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res)
      })
  }

  deleteManufacturer(manufacturer: Manufacturer): void {
    this.manufacturerService.deleteManufacturer(manufacturer).subscribe(()=> this.messageService.add(`${manufacturer.name} manufacturer deleted`));
  }

  openDialog() {
    const dialogRef = this.dialog.open(ManufacturerAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.messageService.add(`${result} manufacturer added`)
      console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

