import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss']
})
export class PractiseComponent implements OnInit {
  displayVal='';
  displayValue='';
  getClick(name:string,secondName:string){
     this.displayVal=name,
     this.displayValue=secondName
  }
  // switch case
  switchtitle="This is switch Case"
  color= 'red';

  // for loop
  looptitle="This is For loop"
  users=[
    {name:'ghj',email:'ghj@gmail.com',age:21},
    {name:'qwe',email:'qwe@gmail.com',age:20},
    {name:'xyz',email:'xyz@gmail.com',age:19},
    {name:'test',email:'test@gmail.com',age:22},
    {name:'abc',email:'abc@gmail.com',age:19},
    {name:'bhk',email:'bhk@gmail.com',age:24}
  ];

  // nestet loop
  nestloop="This is nested loop"
  userItem=[
    {name:'ghj',email:'ghj@gmail.com',socilaMedia:['facebook','google']},
    {name:'qwe',email:'qwe@gmail.com',socilaMedia:['facebook','insta']},
    {name:'xyz',email:'xyz@gmail.com',socilaMedia:['facebook','linkdin']},
    {name:'test',email:'test@gmail.com',socilaMedia:['facebook','signal']},
    {name:'abc',email:'abc@gmail.com',socilaMedia:['facebook','wechat']},
    {name:'bhk',email:'bhk@gmail.com',socilaMedia:['facebook','slack']}
  ];

  // style binding
  colors='blue';
  colorChange(){
    this.colors='red';
  }

  // toggle functionality
  display= true;
  toggleMagic(){
    this.display = !this.display;
  }

  // todo list
  list:any[]=[];
  addTask(item:string){
    this.list.push({
      id:this.list.length,
      name:item
    })
  }

  removeTask(id:number){
    this.list=this.list.filter(itme=>itme.id!==id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
