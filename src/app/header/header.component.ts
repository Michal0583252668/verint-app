import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('searchTerm') searchThis:EventEmitter<string>;
  
  constructor() { 
    this.searchThis = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  searchTerm(term){
    this.searchThis.emit(term);
  }
}