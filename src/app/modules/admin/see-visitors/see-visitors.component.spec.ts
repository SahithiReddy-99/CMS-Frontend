import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeVisitorsComponent } from './see-visitors.component';

describe('SeeVisitorsComponent', () => {
  let component: SeeVisitorsComponent;
  let fixture: ComponentFixture<SeeVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeVisitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
