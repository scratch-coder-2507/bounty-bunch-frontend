import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-create-banners',
  templateUrl: './create-banners.component.html',
  styleUrls: ['./create-banners.component.less']
})
export class CreateBannersComponent implements OnInit {

  constructor(private service: SubAdminService) { }
  category: any;
  bannerForm: any;
  type: any;
  gameList: any;

  public gameBanner: any[] = [{
    file: ''
  }]
  ngOnInit(): void {
    this.service.getCategory(null).subscribe((res) => {
      console.log(res.data);
      this.category = res.data.data;
    });
    this.service.getGame(null).subscribe((res) => {
      this.gameList = res.data.data;
    });
    this.setForm();
  }

  setForm() {
    this.bannerForm = new FormGroup({
      bannerType: new FormControl('', null),
      gameCategory: new FormControl('', null),
      gameName: new FormControl('', null),
      banners: new FormControl('', null)
    })
  }

  onChangeType(e: any) {
    this.type = e.target.value;
  }
  createBanner(){
    if (this.bannerForm.invalid) {
      return;
    }
    if (this.bannerForm.valid) {
      let data = this.bannerForm.value;
      console.log(data);
      this.service.createBanners(data);

    }
  }

  bannerUpload() {
    console.log("log", this.bannerForm.value.banners, this.gameBanner);
    // this.service.uploadFiles({files:[this.bannerForm.value.banner]});
  }
  addAnotherBanner(){
    this.gameBanner.push({
      file: ''
    });
  }

  removeBanner(i:number){
    this.gameBanner.splice(i,1);
  }
}
