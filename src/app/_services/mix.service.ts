import { Injectable } from '@angular/core';
import { Mix } from "../mix";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Flavour} from "../flavour";
import {Manufacturer} from "../manufacturer";
import {Compound} from "../compound";

@Injectable({
  providedIn: 'root'
})
export class MixService {

  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private mixesUrl = this.baseUrl + '/api/mixes/';
  public compoundUrl = this.baseUrl + '/api/membership/';

  constructor(private http:HttpClient) { }

  getMixes(): Observable<Mix[]>{
      return this.http.get<Mix[]>(this.mixesUrl)
  }

  addMixes(mix: Mix): Observable<Mix> {
    return this.http.post<Mix>(this.mixesUrl, mix)
  }

  getMix(mix_id): Observable<Mix> {
    return this.http.get<Mix>(this.mixesUrl + `${mix_id}/`)
  }

  deleteMix(mix: Mix | number): Observable<Mix> {
    const id = typeof mix === 'number' ? mix: mix.id;
    return this.http.delete<Mix>(this.mixesUrl + `${id}/`)
  }

  updateMix(mix: Mix): Observable<any> {
    return this.http.put(this.mixesUrl + `${mix.id}/`, mix, this.httpOptions)
  }

}
