import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperBillComponent } from './super-bill.component';

describe('SuperBillComponent', () => {
  let component: SuperBillComponent;
  let fixture: ComponentFixture<SuperBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperBillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
