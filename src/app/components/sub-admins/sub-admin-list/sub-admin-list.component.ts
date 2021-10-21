import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { SubAdminService } from 'src/app/core/services/subadmin.service';
import { EditSubAdminComponent } from '../edit-sub-admin/edit-sub-admin.component';
import { SubAdminCreationComponent } from '../sub-admin-creation/sub-admin-creation.component';

@Component({
  selector: 'app-sub-admin-list',
  templateUrl: './sub-admin-list.component.html',
  styleUrls: ['./sub-admin-list.component.less']
})
export class SubAdminListComponent implements OnInit {

  constructor(private service: SubAdminService, private dialog: MatDialog, private router: Router) { }
  subAdmins: any;
  logs: any;
  enable: any = false;
  text: any = "Disable";
  moduleAccess: any ;
  ngOnInit(): void {
    this.getSubAdmins(null);
  }
  getSubAdmins(status: any) {
    if (status === '') {
      status = null;
    }
    this.service.getSubAdmin(status).subscribe((data) => {
      let arr:any = [];
      console.log(data.data.data);
      this.subAdmins = data.data.data;
      for(let admin of this.subAdmins){
        for(let module of admin.moduleAccess){
          console.log(module.gameName);
            if(!arr.includes(module.gameName)){
                arr.push(module.gameName);
            }
        }
      }
      this.moduleAccess = arr;
      console.log(this.moduleAccess);
    })
  }

  viewLogs(id: any) {
    console.log(id);
    this.service.getUserLogs(id).subscribe((data) => {
      console.log(data.data);
      this.logs = data.data.data;
    })
  }

  enableDisableSubAdmin(admin: any) {
    console.log(admin);
    if (admin.enable) {
      this.text = "Disable";
    } else {
      this.text = "Enable";
    }
    this.service.enableDisableSubAdmin(admin._id, { enable: admin.enable }).subscribe((data) => {
      console.log(data);
      this.getSubAdmins(null);
    })
  }

  sortBy(e: any) {
    console.log("event", e.target.value);
    this.getSubAdmins(e.target.value);
  }

  editSubAdmin(data: any) {
    this.router.navigate(['dashboard/edit-sub-admin/' + data._id]);
  }
}
