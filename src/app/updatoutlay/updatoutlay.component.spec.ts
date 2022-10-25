import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatoutlayComponent } from './updatoutlay.component';

describe('UpdatoutlayComponent', () => {
  let component: UpdatoutlayComponent;
  let fixture: ComponentFixture<UpdatoutlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatoutlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatoutlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
