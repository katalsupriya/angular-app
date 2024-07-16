import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userLogin(item:any){
    console.log(item)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
