import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCategoryCreationComponent } from './game-category-creation.component';

describe('GameCategoryCreationComponent', () => {
  let component: GameCategoryCreationComponent;
  let fixture: ComponentFixture<GameCategoryCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCategoryCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCategoryCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
