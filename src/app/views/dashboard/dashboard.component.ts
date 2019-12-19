import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'dashboard'
  chart = []
  i:Number = 0
  constructor( ) { 

   
  }

  ngOnInit() {
    this.chart = new Chart('lineChart',{
      type: 'line',
      data:{
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets:[
          {
            label: 'my first data set',
            data: [1,3,10,56,65, 35,543,543,543],
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false
          },
          {
            label: 'my second data set',
            data: [1,3,10,56,65, 35,543,543,543].reverse(),
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false

          }
        ]
      }
    })
    

  }
  

}
