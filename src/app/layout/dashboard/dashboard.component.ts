import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
    console.error('Dashboar construs called');
  }

  ngOnInit() {
    console.error('Dashboar construs on into');
  }

}
