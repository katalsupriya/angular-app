import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutId:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.aboutId= this.route.snapshot.paramMap.get('id');
  }

}
