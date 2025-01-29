import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignusercomponentComponent } from './signusercomponent.component';

describe('SignusercomponentComponent', () => {
  let component: SignusercomponentComponent;
  let fixture: ComponentFixture<SignusercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignusercomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignusercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
