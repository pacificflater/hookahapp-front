import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from "../../environments/environment";
import { User} from "../_models/user";
import { tap, shareReplay } from "rxjs/operators";
import { MessagesService } from "./messages.service";

import * as moment from "moment";

@Injectable()
export class UserService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient, messagesService: MessagesService) {

    }

    login(username:string, password:string ) {
        return this.http.post<User>(this.baseUrl + '/api-token-auth/', {username, password}).pipe(
          tap(res => this.setSession(res)),
          shareReplay(),
        )

    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');
        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );

    }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
      return moment.utc(0).isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}
