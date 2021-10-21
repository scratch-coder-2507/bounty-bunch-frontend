import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { SubAdminService } from '../core/services/subadmin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private service: SubAdminService) { }
  singlePlayerGames: any;
  multiPlayerGames: any;
  userData = JSON.parse(localStorage.getItem('user') || '{}');
  ngOnInit(): void {
    this.service.getSingleGame().subscribe((res) => {
      console.log(res.data);
      this.singlePlayerGames = res.data.data;
    });
    this.service.getMultipleGame().subscribe((res) => {
      console.log(res.data);
      this.multiPlayerGames = res.data.data;
    });
  }

  logout() {
    this.authService.logout();
  }
}
