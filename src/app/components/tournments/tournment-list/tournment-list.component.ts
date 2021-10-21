import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-tournment-list',
  templateUrl: './tournment-list.component.html',
  styleUrls: ['./tournment-list.component.less']
})
export class TournmentListComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, private service: SubAdminService) { }
  id: any = this.activatedRoute.snapshot.paramMap.get('id');
  tournments: any;
  ngOnInit(): void {
    this.getSubAdmins(null);
  }

  getSubAdmins(status: any) {
    if (status === '') {
      status = null;
    }
    this.service.getTournmentById(this.id, status).subscribe((data) => {
      console.log(data.data);
      this.tournments = data.data.data;
    })
  }

  deleteTournment(id: any) {
    this.service.deleteTournment(id).subscribe((data) => {
      console.log(data);
      this.getSubAdmins(null);
    })
  }

  enableDisableTournment(tournment: any) {
    this.service.enableDisableTournment(tournment._id, { enable: tournment.enable }).subscribe((data) => {
      console.log(data);
      this.getSubAdmins(null);
    })
  }

  sortBy(e: any) {
    console.log("event", e.target.value);
    this.getSubAdmins(e.target.value);
  }

  editTournment(tournment:any){
    console.log("tournment:", tournment);
  }
}
