import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegristrationformComponent } from './regristrationform.component';

describe('RegristrationformComponent', () => {
  let component: RegristrationformComponent;
  let fixture: ComponentFixture<RegristrationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegristrationformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegristrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
