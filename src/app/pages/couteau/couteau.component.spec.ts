import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouteauComponent } from './couteau.component';

describe('CouteauComponent', () => {
  let component: CouteauComponent;
  let fixture: ComponentFixture<CouteauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouteauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouteauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
