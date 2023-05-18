import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  appItems: any[] = Array(10).fill({});

  constructor() {

  }

  ngOnInit(): void {

  }

}
