import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoutlaytypeComponent } from './editoutlaytype.component';

describe('EditoutlaytypeComponent', () => {
  let component: EditoutlaytypeComponent;
  let fixture: ComponentFixture<EditoutlaytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoutlaytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoutlaytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
