import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhoneComponent } from './home-phone.component';

describe('HomePhoneComponent', () => {
  let component: HomePhoneComponent;
  let fixture: ComponentFixture<HomePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
