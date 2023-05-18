import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  appItems: any[] = Array(10).fill({});

  constructor() { }

  ngOnInit(): void {
  }

}
