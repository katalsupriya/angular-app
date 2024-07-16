import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.scss']
})
export class AboutYouComponent implements OnInit {
  title= 'Angular Title';
  today= Date();
  user={
    name:'chirag',
    age:21,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
