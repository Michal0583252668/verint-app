import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-students-selection',
  templateUrl: './filter-students-selection.component.html',
  styleUrls: ['./filter-students-selection.component.css']
})
export class FilterStudentsSelectionComponent implements OnInit {

  @Output('selectedFilter') selectedFilter: EventEmitter<string>;

  constructor() { 
    this.selectedFilter = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  selected(val){
    this.selectedFilter.emit(val);
  }
}
