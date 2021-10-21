import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-edit-game-category',
  templateUrl: './edit-game-category.component.html',
  styleUrls: ['./edit-game-category.component.less']
})
export class EditGameCategoryComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private service: SubAdminService, private router: Router) { }
  gameCategoryForm: any;
  categorId: any = this.activateRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.setForm();
  }
  setForm() {
    this.gameCategoryForm = new FormGroup({
      categoryName: new FormControl('', null),
      description: new FormControl('', null),
      icon: new FormControl('', null),
      // banner: new FormControl('', null)
    })
    this.service.getGameCategoryById(this.categorId).subscribe((res) => {
      console.log(res.data.data);
      this.gameCategoryForm.get('categoryName').setValue(res.data.data.name);
      this.gameCategoryForm.get('description').setValue(res.data.data.description);
    })
  }


  editCategory() {
    if (this.gameCategoryForm.invalid) {
      return;
    }
    if (this.gameCategoryForm.valid) {
      // this.gameCategoryForm.get('banner').setValue(this.gameBanner);
      let data = this.gameCategoryForm.value;
      console.log(data);
      this.service.editGameCategory(this.categorId, data);

    }
  }
  onCancel() {
    this.router.navigate(['dashboard/game-category-list']);
  }
}
