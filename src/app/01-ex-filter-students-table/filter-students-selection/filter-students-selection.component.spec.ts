import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStudentsSelectionComponent } from './filter-students-selection.component';

describe('FilterStudentsSelectionComponent', () => {
  let component: FilterStudentsSelectionComponent;
  let fixture: ComponentFixture<FilterStudentsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterStudentsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStudentsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
