import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { forkJoin, Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })

export class AuthService {
    redirectUrl: any;
    API_URL = environment.apiUrl;
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuthenticated);
    constructor(private http: HttpClient, private router: Router) { }

    get isLoggedIn() {
        if (!this.loggedIn) {
            this.loggedIn = new BehaviorSubject<boolean>(this.isAuthenticated);
        }
        return this.loggedIn.asObservable();
    }


    get isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        return true;
    }

    afterLogin(token: any) {

        token.expiring_at = moment().add(token.expires_in, 'seconds');
        localStorage.setItem("token", JSON.stringify(token));
        this.setUserInfo().subscribe((res: any) => {
            console.log(res[0]);
            if (res[0].data.isAdmin) {
                localStorage.setItem("userType", "admin");
                this.router.navigate(['dashboard']);

            } else if (res[0].data.isSubAdmin) {
                localStorage.setItem("userType", "sub-admin");
                let userData = JSON.parse(localStorage.getItem('user') || '{}');
                this.router.navigate(['dashboard/tournment-list/'+ userData.moduleAccess[0]]);
            }
        })
    }

    setUserInfo(): Observable<any> {
        return forkJoin<any>(this.http.get(this.API_URL + "/user/self").pipe(
            tap((response: any) => {
                localStorage.setItem("user", JSON.stringify(response.data));
                return response.data;
            })
        ))
    }

    logout() {
        this.http.get<any>(this.API_URL + '/oauth/logout').subscribe((token) => {
        });
        this.redirectToLogin();
    }

    redirectToLogin() {
        this.clearUser();
        if (this.loggedIn) {
            this.loggedIn.next(false);
        }
        this.router.navigate(['']);
    }

    clearUser() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }
}