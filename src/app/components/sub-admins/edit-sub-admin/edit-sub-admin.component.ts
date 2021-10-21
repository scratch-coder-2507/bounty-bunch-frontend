import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-edit-sub-admin',
  templateUrl: './edit-sub-admin.component.html',
  styleUrls: ['./edit-sub-admin.component.less']
})
export class EditSubAdminComponent implements OnInit {

  constructor(private service: SubAdminService, private activatedRoute: ActivatedRoute, private router: Router) { }
  subAdminForm: any;
  gameList: any;
  subAdminId: any = this.activatedRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.setForm();
    this.getGames();
  }

  setForm() {
    this.subAdminForm = new FormGroup({
      firstName: new FormControl('', null),
      lastName: new FormControl('', null),
      email: new FormControl('', null),
      password: new FormControl('', null),
      userName: new FormControl('',),
      address: new FormControl('', null),
      moduleAccess: new FormControl('', null),
      phoneNumber: new FormControl('', null)
    });
    this.service.getSubAdminById(this.subAdminId).subscribe((res) => {
      console.log(res.data.data.firstName);
      this.subAdminForm.get('firstName').setValue(res.data.data.firstName);
      this.subAdminForm.get('lastName').setValue(res.data.data.lastName);
      this.subAdminForm.get('email').setValue(res.data.data.email);
      this.subAdminForm.get('userName').setValue(res.data.data.userName);
      this.subAdminForm.get('address').setValue(res.data.data.address);
      this.subAdminForm.get('phoneNumber').setValue(res.data.data.phoneNumber);
      this.subAdminForm.get('moduleAccess').setValue(res.data.data.moduleAccess);
    })
  }

  getGames() {
    this.service.getGameIdName().subscribe((data) => {
      console.log(data.data);
      this.gameList = data.data.data;
    })
  }

  editSubAdmin() {
    if (this.subAdminForm.invalid) {
      return;
    }
    if (this.subAdminForm.valid) {
      let data = this.subAdminForm.value;
      data.userType = 'Sub-Admin';
      data.moduleAccess = this.subAdminForm.value.moduleAccess;
      console.log(data);
      this.service.editSubAdmin(this.subAdminId, data);

    }
  }

  onCancel() {
    this.router.navigate(['dashboard/sub-admin-list']);
  }

}
