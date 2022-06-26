import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouteauListComponent } from './couteau-list.component';

describe('CouteauListComponent', () => {
  let component: CouteauListComponent;
  let fixture: ComponentFixture<CouteauListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouteauListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouteauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
