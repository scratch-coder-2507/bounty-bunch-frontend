import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-sub-admin-creation',
  templateUrl: './sub-admin-creation.component.html',
  styleUrls: ['./sub-admin-creation.component.less']
})
export class SubAdminCreationComponent implements OnInit {

  constructor(private service: SubAdminService) { }
  subAdminForm: any;
  gameList: any;
  ngOnInit(): void {
    this.setForm();
    this.getGames();
  }

  setForm() {
    this.subAdminForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl('', null),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      address: new FormControl('', null),
      moduleAccess: new FormControl('', null),
      phoneNumber: new FormControl('', [Validators.required])
    });
  }

  getGames() {
    this.service.getGameIdName().subscribe((data) => {
      console.log(data.data);
      this.gameList = data.data.data;
    })
  }

  createSubAdmin() {
    if (this.subAdminForm.invalid) {
      return;
    }
    if (this.subAdminForm.valid) {
      let data = this.subAdminForm.value;
      data.userType = 'Sub-Admin';
      data.moduleAccess = this.subAdminForm.value.moduleAccess;
      console.log(data);
      this.service.createSubAdmin(data);

    }
  }

}
