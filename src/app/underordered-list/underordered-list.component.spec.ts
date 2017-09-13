import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderorderedListComponent } from './underordered-list.component';

describe('UnderorderedListComponent', () => {
  let component: UnderorderedListComponent;
  let fixture: ComponentFixture<UnderorderedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderorderedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderorderedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
