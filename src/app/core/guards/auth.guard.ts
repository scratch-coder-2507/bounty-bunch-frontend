import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { map, take } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(
        nextRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
        return this.authService.isLoggedIn.pipe(
            take(1),
            map((isLoggedIn: boolean) => {
                console.log('AuthGuard > isLoggedIn --->>>', isLoggedIn);
                if (!isLoggedIn) {
                    this.authService.redirectUrl = state.url ? state.url : '/dashboard';
                    this.router.navigate(['/login']);
                    return false;
                }
                return true;
            })
        )
    }
}
