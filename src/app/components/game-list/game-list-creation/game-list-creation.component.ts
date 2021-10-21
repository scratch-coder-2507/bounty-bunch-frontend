import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-game-list-creation',
  templateUrl: './game-list-creation.component.html',
  styleUrls: ['./game-list-creation.component.less']
})
export class GameListCreationComponent implements OnInit {

  constructor(private service: SubAdminService) { }
  category: any;
  gameListForm: any;
  // public gameBanner: any[] = [{
  //   file: ''
  // }]
  ngOnInit(): void {
    this.service.getCategory(null).subscribe((res) => {
      console.log(res.data);
      this.category = res.data.data;
    })
    this.setForm();
  }


  setForm() {
    this.gameListForm = new FormGroup({
      gameCategory: new FormControl('', [Validators.required]),
      gameName: new FormControl('', null),
      description: new FormControl('', null),
      bundleIdentifier: new FormControl('', null),
      icon: new FormControl('', null),
      // banner: new FormControl('', null),
      freeType: new FormControl('', null),
      paidType: new FormControl('', null),
      singlePlayer: new FormControl('', null),
      multiPlayer: new FormControl('', null)
    })
  }

  createGameList() {
    if (this.gameListForm.invalid) {
      return;
    }
    if (this.gameListForm.valid) {
      // this.gameListForm.get('banner').setValue(this.gameBanner);
      let data = this.gameListForm.value;
      data.type = this.gameListForm.value.freeType ? 'Free' : (this.gameListForm.value.paidType ? 'Paid' : 'Free');
      data.gameType = this.gameListForm.value.singlePlayer ? 'SinglePlayer' : (this.gameListForm.value.multiPlayer ? 'MultiPlayer' : 'SinglePlayer');
      this.service.createGame(data);

    }
  }

  // bannerUpload() {
  //   console.log("log", this.gameListForm.value.banner);
  //   // this.service.uploadFiles({files:[this.gameListForm.value.banner]});
  // }
  iconUpload() {
    console.log("iconlog", this.gameListForm.value.icon)
  }
  // addAnotherBanner(){
  //   this.gameBanner.push({
  //     file: ''
  //   });
  // }

  // removeBanner(i:number){
  //   this.gameBanner.splice(i,1);
  // }

}
