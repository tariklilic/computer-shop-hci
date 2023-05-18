import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  appItems: any[] = Array(10).fill({});

  constructor() { }

  ngOnInit(): void {
  }

}
