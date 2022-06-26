import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitareComponent } from './guitare.component';

describe('GuitareComponent', () => {
  let component: GuitareComponent;
  let fixture: ComponentFixture<GuitareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
