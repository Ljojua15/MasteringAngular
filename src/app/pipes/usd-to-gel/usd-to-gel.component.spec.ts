import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdToGelComponent } from './usd-to-gel.component';

describe('UsdToGelComponent', () => {
  let component: UsdToGelComponent;
  let fixture: ComponentFixture<UsdToGelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsdToGelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsdToGelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
