import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoutlayComponent } from './editoutlay.component';

describe('EditoutlayComponent', () => {
  let component: EditoutlayComponent;
  let fixture: ComponentFixture<EditoutlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoutlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoutlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
