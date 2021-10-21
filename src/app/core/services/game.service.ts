import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({ providedIn: 'root' })

// export class Result {
//     data: any;
//     success: boolean;
//     error: any;
//     resultSize: any;
// }

export class GameService {
    constructor(private http: HttpClient, private router: Router) { }
    API_URL = environment.apiUrl;
    createGameCategory(data: any){
        let body = {
            name: data.categoryName,
            description: data.description,
            icon: data.icon,
            banner: data.banner
        };
        this.http.post(this.API_URL + '/game-category/', body).subscribe((res) => {
            if (res) {
                this.router.navigate(['/dashboard/game-category-list']);
            }
        })
    }

    getCategory(){
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL+ '/game-category/get-game-categories').subscribe((res)=>{
            model.next({ data: res });
        });
        return model;
        
    }
    
}