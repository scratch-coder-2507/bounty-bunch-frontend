import { Component, OnInit } from '@angular/core';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.less']
})
export class BotListComponent implements OnInit {

  constructor(private service: SubAdminService) { }
  bots: any;
  ngOnInit(): void {
    this.getBOts();
  }
  getBOts() {
    this.service.getBots(null).subscribe((data) => {
      console.log(data.data);
      this.bots = data.data.data;
    })
  }
}
