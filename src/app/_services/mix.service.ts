import { Injectable } from '@angular/core';
import { Mix, NewMix } from '../_models/mix';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {map, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MixService {

  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private mixesUrl = this.baseUrl + '/api/mix/';
  private mixesAvailableUrl = this.baseUrl + '/api/mixes_in_stock/';

  constructor(private http: HttpClient) { }

  getMixes(): Observable<Mix[]>{
      return this.http.get<Mix[]>(this.mixesUrl).pipe(
      retry(3),
    );
  }

  addMixes(mix: NewMix): Observable<NewMix> {
    return this.http.post<NewMix>(this.mixesUrl, mix).pipe(
      retry(3),
    );
  }

  getMix(mix_id): Observable<Mix> {
    return this.http.get<Mix>(this.mixesUrl + `${mix_id}/`).pipe(
      retry(3),
    );
  }

  getMixPercentageList(mix_id): Observable<any> {
    return this.http.get(this.mixesUrl + `${mix_id}/`).pipe(map(data => {
      let compound = data["compound"];
      return compound.map(function (e) {
          return [e.flavour.manufacturer.name + ': ' + e.flavour.flavour_name, e.percentage]
      })
    }))
  }

  getMixFlavoursList(mix_id): Observable<any> {
    return this.http.get(this.mixesUrl + `${mix_id}/`).pipe(map(data => {
      let compound = data["compound"];
      return compound.map(function (e) {
          return e.flavour.flavour_name
      })
    }))
  }

  getAvailableMixes(): Observable<Mix[]>{
      return this.http.get<Mix[]>(this.mixesAvailableUrl).pipe(
      retry(3),
    );
  }

  deleteMix(mix: Mix | number): Observable<Mix> {
    const id = typeof mix === 'number' ? mix : mix.id;
    return this.http.delete<Mix>(this.mixesUrl + `${id}/`).pipe(
      retry(3),
    );
  }

  updateMix(mix: Mix): Observable<any> {
    const body = {mix_name: mix.mix_name, bowl: mix.bowl.id, rating: mix.rating, strength: mix.strength, compound: mix.compound};
    return this.http.put(this.mixesUrl + `${mix.id}/`, body, this.httpOptions).pipe(
      retry(3),
    );
  }

}
