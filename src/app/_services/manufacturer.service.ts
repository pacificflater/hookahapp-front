import { Injectable } from '@angular/core';
import { Manufacturer } from '../_models/manufacturer';
import { Observable } from 'rxjs';
import {filter, retry} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private manufacturersUrl = this.baseUrl + '/api/manufacturer/';
  constructor(private http: HttpClient,
              private messageService: MessagesService
  ) {}


  getManufacturers(): Observable<Manufacturer[]>{
    return this.http.get<Manufacturer[]>(this.manufacturersUrl).pipe(
      retry(3),
    );
  }

  getManufacturer(manufacturer_id): Observable<Manufacturer> {
    return this.http.get<Manufacturer>(this.manufacturersUrl + `${manufacturer_id}/`).pipe(
      retry(3),
    );
  }

  getManufacturerName(manufacturer_id): Observable<Manufacturer[]>{
    return this.http.get<Manufacturer[]>(this.manufacturersUrl).pipe(
      retry(3),
      filter(id => id === manufacturer_id)
    );
  }

  addManufacturer(manufacturer: Manufacturer): Observable<Manufacturer> {
    const body = {name: manufacturer.name, type: manufacturer.type.id};
    return this.http.post<Manufacturer>(this.manufacturersUrl, body).pipe(
      retry(3),
    );
    }

  deleteManufacturer(manufacturer: Manufacturer | number): Observable<Manufacturer> {
    const id = typeof manufacturer === 'number' ? manufacturer : manufacturer.id;
    return this.http.delete<Manufacturer>(this.manufacturersUrl + `${id}/`).pipe(
      retry(3),
    );
  }

  updateManufacturer(manufacturer: Manufacturer): Observable<any> {
    const body = {id: manufacturer.id, name: manufacturer.name, type: manufacturer.type.id };
    return this.http.put(this.manufacturersUrl + `${manufacturer.id}/`, body, this.httpOptions).pipe(
      retry(3),
    );
  }

}

