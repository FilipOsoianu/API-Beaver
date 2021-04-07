import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseGeneratorComponent } from './response-generator.component';

describe('TraitsGeneratorComponent', () => {
  let component: ResponseGeneratorComponent;
  let fixture: ComponentFixture<ResponseGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
