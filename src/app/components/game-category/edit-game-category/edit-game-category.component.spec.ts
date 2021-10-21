import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGameCategoryComponent } from './edit-game-category.component';

describe('EditGameCategoryComponent', () => {
  let component: EditGameCategoryComponent;
  let fixture: ComponentFixture<EditGameCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGameCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGameCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
