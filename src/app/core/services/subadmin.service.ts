import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })

export class SubAdminService {
    constructor(private http: HttpClient, private router: Router) { }
    API_URL = environment.apiUrl;

    createSubAdmin(data: any) {
        this.http.post(this.API_URL + '/user/create-sub-admin', data).subscribe((res) => {
            if (res) {
                this.router.navigate(['/dashboard/sub-admin-list']);
            }
        })
    }

    getSubAdmin(status: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/user/get-sub-admin', { params: { userType: 'Sub-Admin', status: status } }).subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

    editSubAdmin(id: any, data: any) {
        this.http.put(this.API_URL + '/user/' + id + '/edit-sub-admin', data).subscribe((res) => {
            if (res) {
                this.router.navigate(['/dashboard/sub-admin-list']);
            }
        })
    }

    getSubAdminById(id: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/user/' + id + '/get-subadmin-by-id').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

    getUserLogs(id: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/user/' + id + '/get-user-logs').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

    getUsers() {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/user/').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

    enableDisableSubAdmin(id: any, data: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.put(this.API_URL + '/user/' + id + '/enable-disable-sub-admin', data).subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

    createBot(data: any) {
        this.http.post(this.API_URL + '/user/create-bot', data).subscribe((res) => {
            if (res) {
                this.router.navigate(['/dashboard/bot-list']);
            }
        })
    }
    getBots(status:any) {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/user/get-sub-admin', { params: { userType: 'Bot', status: status } }).subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

    getUserAnalytics() {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/user/get-user-analytics').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

    createGameCategory(data: any) {
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

    getCategory(status: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/game-category/get-game-categories', { params: { status: status } }).subscribe((res) => {
            model.next({ data: res });
        });
        return model;

    }
    deleteCategory(id: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.delete(this.API_URL + '/game-category/' + id + '/delete-category').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }
    enableDisableGameCategory(id: any, data: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.put(this.API_URL + '/game-category/' + id + '/enable-disable-category', data).subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }
    editGameCategory(id: any, data: any) {
        this.http.put(this.API_URL + '/game-category/' + id + '/edit-game-category', data).subscribe((res) => {
            if (res) {
                this.router.navigate(['/dashboard/game-category-list']);
            }
        })
    }
    getGameCategoryById(id: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/game-category/' + id + '/get-game-category-byId').subscribe((res) => {
            model.next({ data: res });
        });
        return model;

    }
    uploadFiles(files: any) {
        console.log("files:", files);
        this.http.post(this.API_URL + '/files', files).subscribe((res) => {
            console.log("res:", res);
        })
    }
    createBanners(data: any) {
        this.http.post(this.API_URL + '/banners/', data).subscribe((res) => {
            if (res) {
                this.router.navigate(['/dashboard/banner-list']);
            }
        })
    }
    createGame(data: any) {
        this.http.post(this.API_URL + '/games/', data).subscribe((res) => {
            if (res) {
                this.router.navigate(['/dashboard/game-list-view']);
            }
        })
    }

    getGame(status: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/games/get-games', { params: { status: status } }).subscribe((res) => {
            model.next({ data: res });
        });
        return model;

    }
    getGameIdName() {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/games/get-games-id-name').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }
    getGameById(id: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/games/' + id + '/get-game').subscribe((res) => {
            model.next({ data: res });
        });
        return model;

    }
    enableDisableGame(id: any, data: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.put(this.API_URL + '/games/' + id + '/enable-disable-game', data).subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }
    editGame(id: any, data: any) {
        this.http.put(this.API_URL + '/games/' + id + '/edit-game', data).subscribe((res) => {
            if (res) {
                this.router.navigate(['/dashboard/game-list-view']);
            }
        })
    }
    getGameByCategory(id: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/games/' + id + '/get-game-by-category').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }
    getSingleGame() {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/games/get-singleplayer-games').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }
    getMultipleGame() {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/games/get-multiplayer-games').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }
    deleteGame(id: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.delete(this.API_URL + '/games/' + id + '/delete-game').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

    createTournment(data: any, id: any) {
        this.http.post(this.API_URL + '/tournments/', data).subscribe((res) => {
            if (res) {
                this.router.navigate(["/dashboard/tournment-list", id]);
            }
        })
    }

    getTournment() {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/tournments/get-tournments').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

    getTournmentById(id: any, status: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.get(this.API_URL + '/tournments/' + id + '/get-tournment', { params: { status: status } }).subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

    deleteTournment(id: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.delete(this.API_URL + '/tournments/' + id + '/delete-tournment').subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

    enableDisableTournment(id: any, data: any) {
        const model: Subject<any> = new Subject<any>();
        this.http.put(this.API_URL + '/tournments/' + id + '/enable-disable-tournment', data).subscribe((res) => {
            model.next({ data: res });
        });
        return model;
    }

}