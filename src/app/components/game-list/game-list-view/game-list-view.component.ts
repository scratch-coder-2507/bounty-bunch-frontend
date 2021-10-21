import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-game-list-view',
  templateUrl: './game-list-view.component.html',
  styleUrls: ['./game-list-view.component.less']
})
export class GameListViewComponent implements OnInit {

  constructor(private service: SubAdminService, private router: Router) { }
  gameList: any;
  ngOnInit(): void {
    this.getGames(null);
  }

  getGames(status:any) {
    if (status === '') {
      status = null;
    }
    this.service.getGame(status).subscribe((data) => {
      console.log(data.data);
      this.gameList = data.data.data;
    })
  }

  deleteGame(id: any) {
    console.log(id);
    this.service.deleteGame(id).subscribe((data) => {
      if (data) {
        this.ngOnInit();
      }
    })
  }

  enableDisableGame(game: any){
    this.service.enableDisableGame(game._id, { enable: game.enable }).subscribe((data) => {
      console.log(data);
      this.getGames(null);
    })
  }

  sortBy(e: any) {
    console.log("event", e.target.value);
    this.getGames(e.target.value);
  }

  editGame(game:any){
    this.router.navigate(['dashboard/edit-game-list/'+ game._id]);
  }

}
