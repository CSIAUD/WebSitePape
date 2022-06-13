import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitareListComponent } from './guitare-list.component';

describe('GuitareListComponent', () => {
  let component: GuitareListComponent;
  let fixture: ComponentFixture<GuitareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitareListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
