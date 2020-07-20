import { Injectable } from '@angular/core';
import {Flavour, NewFlavour} from '../flavour';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {filter} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class FlavourService {

  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private flavoursUrl = this.baseUrl + '/api/flavours/';
  constructor(private http:HttpClient,
              ) {}

  getFlavours(): Observable<Flavour[]>{
    return this.http.get<Flavour[]>(this.flavoursUrl)
  }

  getFlavour(flavour_id): Observable<Flavour> {
    return this.http.get<Flavour>(this.flavoursUrl + `${flavour_id}/`)
  }

  addFlavour(flavour: NewFlavour): Observable<NewFlavour> {
    return this.http.post<NewFlavour>(this.flavoursUrl, flavour)
    }

  deleteFlavour(flavour: Flavour | number): Observable<Flavour> {
    const id = typeof flavour === 'number' ? flavour: flavour.id;
    return this.http.delete<Flavour>(this.flavoursUrl + `${id}/`)
  }

  updateFlavour(flavour: Flavour): Observable<any> {
    return this.http.put(this.flavoursUrl + `${flavour.id}/`, flavour, this.httpOptions)
  }





}
