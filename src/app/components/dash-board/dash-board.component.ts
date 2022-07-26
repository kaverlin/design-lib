import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  doughnutChartData: any; 
  lineChartData: any;
  twoLineChartData: any;
  barChartData: any;
  constructor() { }

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData(){
    this.doughnutChartData = {
      type: 'doughnut', 
      dataSet: [
        {
          data:[65, 39, 80], 
          label: 'marchands', 
          colors: ['#1BD370','#00DBDE', '#79747E']
        }
      ]
    };

    this.lineChartData = {
      type: 'line', 
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 
      dataSet: [
        {
          data:[275, 350, 280, 790, 650, 550, 800, 1000, 275, 350, 280, 790, 650, 550, 800], 
          label: 'Requetes' 
        }
      ]
    };

    this.twoLineChartData = {
      type: 'line', 
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 
      dataSet: [
        {
          data:[275, 350, 280, 790, 650, 550, 800, 1000, 275, 350, 280, 790, 650, 550, 800], 
          label: 'Requetes', 
          colors: ['#00DBDE']
        }, 
        {
          data:[800, 1000, 275, 350, 280, 790, 650, 550, 800, 275, 350, 280, 790, 650, 550], 
          label: 'Requetes', 
          colors: ['#910E39']
        }
      ]
    };

    this.barChartData = {
      type: 'bar', 
      labels: ['janvier', 'fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
      dataset: [
        {
          data:[800, 1000, 275, 350, 280, 790, 650], 
          label: 'Requetes', 
          colors: ['#910E39']
        }, 
        {
          data: [ 550, 800, 275, 350, 280, 790, 650, 550],
          label: 'tkdkdk', 
          colors: ['#fafafa']
        }
      ]
    }
  }



}
