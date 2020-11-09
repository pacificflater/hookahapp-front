import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ManufacturerType} from '../_models/manufacturer-type';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManufacturerTypeService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private manufacturerTypeUrl = this.baseUrl + '/api/manufacturer_type/';

  getManufacturerType(): Observable<ManufacturerType[]>{
    return this.http.get<ManufacturerType[]>(this.manufacturerTypeUrl);
  }

}
