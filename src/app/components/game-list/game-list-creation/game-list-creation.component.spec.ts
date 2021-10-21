import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListCreationComponent } from './game-list-creation.component';

describe('GameListCreationComponent', () => {
  let component: GameListCreationComponent;
  let fixture: ComponentFixture<GameListCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
