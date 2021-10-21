import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import * as moment from "moment";
import { AuthService } from "../core/services/auth.service";
import { environment } from "src/environments/environment";

@Injectable()

export class AuthenticationService {
    API_URL = environment.apiUrl;
    constructor(private http: HttpClient, private authService: AuthService) { }
    login(username: any, password: any) {
        const data = {
            username: username,
            password: password,
            grant_type: "password",
            client_id: "system-admin",
            client_secret: "XF8pK1mJxNMYmRZ3cIZ4"
        };
        this.http.post(this.API_URL + '/oauth/token', data).subscribe((token: any) => {
            this.authService.afterLogin(token);
        })
    }
}