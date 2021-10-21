import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-game-category-creation',
  templateUrl: './game-category-creation.component.html',
  styleUrls: ['./game-category-creation.component.less']
})
export class GameCategoryCreationComponent implements OnInit {

  constructor(private gameService: SubAdminService) { }
  gameCategoryForm: any;
  // public gameBanner: any[] = [{
  //   file: ''
  // }]
  ngOnInit(): void {
    this.setForm();
  }
  setForm() {
    this.gameCategoryForm = new FormGroup({
      categoryName: new FormControl('', [Validators.required]),
      description: new FormControl('', null),
      icon: new FormControl('', null),
      // banner: new FormControl('', null)
    })
  }

  createCategory() {
    if (this.gameCategoryForm.invalid) {
      return;
    }
    if (this.gameCategoryForm.valid) {
      // this.gameCategoryForm.get('banner').setValue(this.gameBanner);
      let data = this.gameCategoryForm.value;
      console.log(data);
      this.gameService.createGameCategory(data)

    }
  }

  bannerUpload() {
    console.log("log", this.gameCategoryForm.value.banner);
    this.gameService.uploadFiles({files:[this.gameCategoryForm.value.banner]});
  }
  iconUpload() {
    console.log("iconlog", this.gameCategoryForm.value.icon)
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
