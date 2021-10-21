import { Component, OnInit } from '@angular/core';
import { SubAdminService } from '../core/services/subadmin.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.less']
})
export class AnalyticsComponent implements OnInit {

  constructor(private service: SubAdminService) { }
  userCount: any;
  bots: any;
  subAdmins: any;
  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.service.getUserAnalytics().subscribe((data) => {
      console.log(data);
      this.userCount = data.data.data[0].count + data.data.data[1].count;
      this.bots = data.data.data[0].count;
      this.subAdmins = data.data.data[1].count;
    })
  }

}
