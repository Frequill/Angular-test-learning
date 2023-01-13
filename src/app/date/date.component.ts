import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit{

  showDate: string = ''; // Had to give this a default value

  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.showDate = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    } , 1000);
  }

  ngOnInit(): void {
    
  }

  addTwoNumbers(a: number, b: number) {
    return a + b;
  }

}