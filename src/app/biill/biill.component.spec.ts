import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiillComponent } from './biill.component';

describe('BiillComponent', () => {
  let component: BiillComponent;
  let fixture: ComponentFixture<BiillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
