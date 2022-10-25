import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoutlayComponent } from './addoutlay.component';

describe('AddoutlayComponent', () => {
  let component: AddoutlayComponent;
  let fixture: ComponentFixture<AddoutlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoutlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoutlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
