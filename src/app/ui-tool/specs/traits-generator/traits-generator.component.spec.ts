import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsGeneratorComponent } from './traits-generator.component';

describe('TraitsGeneratorComponent', () => {
  let component: TraitsGeneratorComponent;
  let fixture: ComponentFixture<TraitsGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitsGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
