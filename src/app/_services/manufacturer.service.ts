import { Injectable } from '@angular/core';
import { Manufacturer } from '../manufacturer';
import { Observable } from 'rxjs';
import { filter } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { MessagesService } from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private manufacturersUrl = this.baseUrl + '/api/manufacturers/';
  constructor(private http:HttpClient,
              private messageService: MessagesService
  ) {}


  getManufacturers(): Observable<Manufacturer[]>{
    return this.http.get<Manufacturer[]>(this.manufacturersUrl)
  }

  getManufacturer(manufacturer_id): Observable<Manufacturer> {
    return this.http.get<Manufacturer>(this.manufacturersUrl + `${manufacturer_id}/`)
  }

  getManufacturerName(manufacturer_id): Observable<Manufacturer[]>{
    return this.http.get<Manufacturer[]>(this.manufacturersUrl).pipe(
      filter(id => id === manufacturer_id)
    )
  }

  addManufacturer(manufacturerName: Manufacturer): Observable<Manufacturer> {
    return this.http.post<Manufacturer>(this.manufacturersUrl, manufacturerName)
    }

  deleteManufacturer(manufacturer: Manufacturer | number): Observable<Manufacturer> {
    const id = typeof manufacturer === 'number' ? manufacturer: manufacturer.id;
    return this.http.delete<Manufacturer>(this.manufacturersUrl + `${id}/`)
  }

  updateManufacturer(manufacturer: Manufacturer): Observable<any> {
    return this.http.put(this.manufacturersUrl + `${manufacturer.id}/`, manufacturer, this.httpOptions)
  }

}

