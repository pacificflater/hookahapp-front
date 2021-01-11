import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FlavourType} from '../_models/flavour-type';
import {retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FlavourTypeService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private flavourTypeUrl = this.baseUrl + '/api/flavour_types/';

  getFlavourTypes(): Observable<FlavourType[]>{
    return this.http.get<FlavourType[]>(this.flavourTypeUrl).pipe(
      retry(3),
    );
  }
}
