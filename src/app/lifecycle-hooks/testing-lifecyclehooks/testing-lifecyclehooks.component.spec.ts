import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingLifecyclehooksComponent } from './testing-lifecyclehooks.component';

describe('TestingLifecyclehooksComponent', () => {
  let component: TestingLifecyclehooksComponent;
  let fixture: ComponentFixture<TestingLifecyclehooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingLifecyclehooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingLifecyclehooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
