import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDecoratorsComponent } from './angular-decorators.component';

describe('AngularDecoratorsComponent', () => {
  let component: AngularDecoratorsComponent;
  let fixture: ComponentFixture<AngularDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDecoratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
