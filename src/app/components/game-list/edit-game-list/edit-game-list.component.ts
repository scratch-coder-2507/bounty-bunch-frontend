import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-edit-game-list',
  templateUrl: './edit-game-list.component.html',
  styleUrls: ['./edit-game-list.component.less']
})
export class EditGameListComponent implements OnInit {
  editGameForm: any;
  constructor(private activatedRoute: ActivatedRoute, private service: SubAdminService, private router: Router) { }
  gameId: any = this.activatedRoute.snapshot.paramMap.get('id');
  catName: any;
  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.editGameForm = new FormGroup({
      gameCategory: new FormControl('', null),
      gameName: new FormControl('', null),
      description: new FormControl('', null),
      bundleIdentifier: new FormControl('', null),
      icon: new FormControl('', null),
      // banner: new FormControl('', null),
      freeType: new FormControl('', null),
      paidType: new FormControl('', null),
      singlePlayer: new FormControl('', null),
      multiPlayer: new FormControl('', null)
    });
    this.service.getGameById(this.gameId).subscribe((res) => {
      console.log(res.data.data);
      this.catName = res.data.data.gameCategory.name;
      this.editGameForm.get('gameCategory').setValue(res.data.data.gameCategory.name);
      this.editGameForm.get('gameName').setValue(res.data.data.gameName);
      this.editGameForm.get('description').setValue(res.data.data.description);
      this.editGameForm.get('bundleIdentifier').setValue(res.data.data.bundleIdentifier);
      if (res.data.data.type === 'Free') {
        this.editGameForm.get('freeType').setValue(true);
      } else {
        this.editGameForm.get('paidType').setValue(true);
      }
      if (res.data.data.gameType === 'SinglePlayer') {
        this.editGameForm.get('singlePlayer').setValue(true);
      } else {
        this.editGameForm.get('multiPlayer').setValue(true);
      }
    })
  }

  editGameList() {
    if (this.editGameForm.invalid) {
      return;
    }
    if (this.editGameForm.valid) {
      let data = this.editGameForm.value;
      data.type = this.editGameForm.value.freeType ? 'Free' : (this.editGameForm.value.paidType ? 'Paid' : 'Free');
      data.gameType = this.editGameForm.value.singlePlayer ? 'SinglePlayer' : (this.editGameForm.value.multiPlayer ? 'MultiPlayer' : 'SinglePlayer');
      this.service.editGame(this.gameId, data);

    }
  }

  onCancel() {
    this.router.navigate(['dashboard/game-list-view']);
  }
}
