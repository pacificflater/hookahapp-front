import { Injectable } from '@angular/core';
import {Flavour, NewFlavour, UpdateFlavour} from '../_models/flavour';
import { Mix } from '../_models/mix';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {filter, retry} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FlavourService {

  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private flavoursUrl = this.baseUrl + '/api/flavour/';
  private mixesUrl = this.baseUrl + '/api/mix/';
  constructor(private http: HttpClient,
              ) {}

  getFlavours(): Observable<Flavour[]>{
    return this.http.get<Flavour[]>(this.flavoursUrl).pipe(
      retry(3),
    );
  }

  getFlavoursFiltered(params): Observable<Flavour[]>{
    return this.http.get<Flavour[]>(this.flavoursUrl + '?' + params).pipe(
      retry(3),
    );
  }

  getFlavour(flavour_id): Observable<Flavour> {
    return this.http.get<Flavour>(this.flavoursUrl + `${flavour_id}/`).pipe(
      retry(3),
    );
  }

  addFlavour(flavour: NewFlavour): Observable<NewFlavour> {
    const body = {flavour_name: flavour.flavour_name, flavour_type: flavour.flavour_type, manufacturer: flavour.manufacturer, in_stock: flavour.in_stock, add_time: flavour.add_time, description: flavour.description};
    return this.http.post<NewFlavour>(this.flavoursUrl, body).pipe(
      retry(3),
    );
    }

  deleteFlavour(flavour: Flavour | number): Observable<Flavour> {
    const id = typeof flavour === 'number' ? flavour : flavour.id;
    return this.http.delete<Flavour>(this.flavoursUrl + `${id}/`).pipe(
      retry(3),
    );
  }

  getMixes(flavour: Flavour | number): Observable<Mix[]>{
    const id = typeof flavour === 'number' ? flavour : flavour.id;
      return this.http.get<Mix[]>(this.mixesUrl + `?compound=${id}`).pipe(
      retry(3),
    );
  }
  updateFlavour(flavour: Flavour): Observable<any> {
    console.log("service" + flavour.description)
    if (flavour.flavour_type.some(value => typeof value == 'object')){
      const body = {flavour_name: flavour.flavour_name, flavour_type: flavour.flavour_type.map(({id}) => id), manufacturer: flavour.manufacturer.id, in_stock: flavour.in_stock, add_time: flavour.add_time, description: flavour.description};
      return this.http.put(this.flavoursUrl + `${flavour.id}/`, body, this.httpOptions).pipe(
      retry(3),
    );
    }else{
      const body = {flavour_name: flavour.flavour_name, flavour_type: flavour.flavour_type, manufacturer: flavour.manufacturer.id, in_stock: flavour.in_stock, add_time: flavour.add_time, description: flavour.description};
      return this.http.put(this.flavoursUrl + `${flavour.id}/`, body, this.httpOptions).pipe(
      retry(3),
    );
    }

  }





}
