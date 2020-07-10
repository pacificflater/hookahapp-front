import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Compound } from "../compound";
import  { Observable } from "rxjs";
import {Manufacturer} from "../manufacturer";
import {Flavour} from "../flavour";

@Injectable({
  providedIn: 'root'
})
export class CompoundService {

  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private compoundUrl = this.baseUrl + '/api/membership/';
  constructor(private http:HttpClient) {}

  getCompound(compound_id): Observable<Compound> {
    return this.http.get<Compound>(this.compoundUrl + `${compound_id}`)
  }

  addCompound(compound: Compound): Observable<Compound> {
    return this.http.post<Compound>(this.compoundUrl, compound)
    }

  deleteCompound(compound: Compound | number): Observable<Compound> {
      const id = typeof compound === 'number' ? compound: compound.id;
      return this.http.delete<Compound>(this.compoundUrl + `${id}/`)

  }
}
