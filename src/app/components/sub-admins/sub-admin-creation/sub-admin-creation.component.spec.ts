import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdminCreationComponent } from './sub-admin-creation.component';

describe('SubAdminCreationComponent', () => {
  let component: SubAdminCreationComponent;
  let fixture: ComponentFixture<SubAdminCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAdminCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAdminCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
