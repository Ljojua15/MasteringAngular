import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDecoratorsComponent } from './class-decorators.component';

describe('ClassDecoratorsComponent', () => {
  let component: ClassDecoratorsComponent;
  let fixture: ComponentFixture<ClassDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassDecoratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
