import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoutlaytypeComponent } from './addoutlaytype.component';

describe('AddoutlaytypeComponent', () => {
  let component: AddoutlaytypeComponent;
  let fixture: ComponentFixture<AddoutlaytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoutlaytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoutlaytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
