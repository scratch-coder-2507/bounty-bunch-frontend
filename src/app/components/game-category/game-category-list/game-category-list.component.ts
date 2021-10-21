import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-game-category-list',
  templateUrl: './game-category-list.component.html',
  styleUrls: ['./game-category-list.component.less']
})
export class GameCategoryListComponent implements OnInit {

  constructor(private service: SubAdminService, private router: Router) { }

  categories: any;
  ngOnInit(): void {
    this.getCategories(null);
  }

  getCategories(status:any) {
    if (status === '') {
      status = null;
    }
    this.service.getCategory(status).subscribe((data) => {
      console.log(data.data);
      this.categories = data.data.data;
    })
  }
  deleteCategory(id: any) {
    console.log(id);
    this.service.deleteCategory(id).subscribe((data) => {
      if (data) {
        this.ngOnInit();
      }
    })
  }

  enableDisableGameCategory(category: any){
    this.service.enableDisableGameCategory(category._id, { enable: category.enable }).subscribe((data) => {
      console.log(data);
      this.getCategories(null);
    })
  }

  sortBy(e: any) {
    console.log("event", e.target.value);
    this.getCategories(e.target.value);
  }

  editGameCategory(category:any){
    this.router.navigate(['dashboard/edit-game-category/'+ category._id]);
  }
}
