import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatoutlaytypeComponent } from './updatoutlaytype.component';

describe('UpdatoutlaytypeComponent', () => {
  let component: UpdatoutlaytypeComponent;
  let fixture: ComponentFixture<UpdatoutlaytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatoutlaytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatoutlaytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
