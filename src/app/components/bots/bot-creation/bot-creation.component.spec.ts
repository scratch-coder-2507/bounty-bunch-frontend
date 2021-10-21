import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotCreationComponent } from './bot-creation.component';

describe('BotCreationComponent', () => {
  let component: BotCreationComponent;
  let fixture: ComponentFixture<BotCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
