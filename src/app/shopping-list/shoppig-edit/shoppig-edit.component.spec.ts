import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppigEditComponent } from './shoppig-edit.component';

describe('ShoppigEditComponent', () => {
  let component: ShoppigEditComponent;
  let fixture: ComponentFixture<ShoppigEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppigEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
