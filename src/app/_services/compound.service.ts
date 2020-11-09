import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Compound } from '../_models/compound';
import  { Observable } from 'rxjs';
import { NewCompound} from '../_models/compound';
import {Flavour} from '../_models/flavour';

@Injectable({
  providedIn: 'root'
})
export class CompoundService {

  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private compoundUrl = this.baseUrl + '/api/membership/';
  constructor(private http: HttpClient) {}

  getCompound(compound_id): Observable<Compound> {
    return this.http.get<Compound>(this.compoundUrl + `${compound_id}`);
  }

  addCompound(compound: NewCompound): Observable<NewCompound> {
    return this.http.post<NewCompound>(this.compoundUrl, compound);
    }



  deleteCompound(compound: Compound | number): Observable<Compound> {
      const id = typeof compound === 'number' ? compound : compound.id;
      return this.http.delete<Compound>(this.compoundUrl + `${id}/`);
  }

  updateCompound(compound: Compound): Observable<any> {
    return this.http.put(this.compoundUrl + `${compound.id}/`, compound, this.httpOptions);
  }
}
