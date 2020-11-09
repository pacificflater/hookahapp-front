import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bowl } from '../_models/bowl';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BowlService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl;
  private bowlUrl = this.baseUrl + '/api/bowls/';

  getBowls(): Observable<Bowl[]>{
    return this.http.get<Bowl[]>(this.bowlUrl);
  }
}
