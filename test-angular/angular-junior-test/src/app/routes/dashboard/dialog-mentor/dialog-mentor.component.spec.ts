import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMentorComponent } from './dialog-mentor.component';

describe('DialogMentorComponent', () => {
  let component: DialogMentorComponent;
  let fixture: ComponentFixture<DialogMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
