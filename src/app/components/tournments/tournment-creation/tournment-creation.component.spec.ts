import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournmentCreationComponent } from './tournment-creation.component';

describe('TournmentCreationComponent', () => {
  let component: TournmentCreationComponent;
  let fixture: ComponentFixture<TournmentCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournmentCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournmentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
