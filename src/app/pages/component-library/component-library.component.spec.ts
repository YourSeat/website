import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLibraryComponent } from './component-library.component';

describe('ComponentLibraryComponent', () => {
  let component: ComponentLibraryComponent;
  let fixture: ComponentFixture<ComponentLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
