import { Component, OnInit, Input } from '@angular/core';
import { ChartInputData } from '../chart/input-data-struc';
import  Chart  from 'chart.js/auto';

@Component({
  selector: 'app-lines-chart',
  templateUrl: './lines-chart.component.html',
  styleUrls: ['./lines-chart.component.scss']
})
export class LinesChartComponent implements OnInit {


  chartDataValues: any ;

  @Input('data') set inputData (data: ChartInputData) {
    this.chartDataValues = data;
    this.restructureData(this.chartDataValues);
  };

  constructor() { }

  ngOnInit(): void {
  }

  restructureData(data: any){
    let tempData: any[] = [], option: any;
    (data.dataSet as []).forEach(element => {
      console.log(element);
      tempData.push({
        label: (element as any).label,
        data: (element as any).data,
        fill: true,
        tension: 0.3, 
        backgroundColor: "#ff000000", 
        pointBackgroundColor: (element as any).colors[0], 
        borderColor: (element as any).colors[0],
        pointBorderColor: "#ffffffff",
        borderJoinStyle: 'bevel', 
        borderWidth: 2, 
        pointStyle: 'cercle', 
        pointHoverRadius: 5, 
        pointHoverBorderWidth: 1.5
      })
    });

    option = { //option for loov Admin (chart type: line)
      scales: {
        x:{
          grid:{
            drawTicks: true,
            borderDash: [3, 1] //display grid on x scale in dashes
          } 
        }, 
        y:{
          grid:{
            drawTicks: true,
            borderDash: [3, 1] ////display grid on y scale in dashes
          }
        }
      },
      responsive: true,
      elements: {
        point:{
            radius: 0 //remove scale interception and chart dot 
        }
    }, 
    plugins: {
        legend: {
          display: false //remove legend from chart
        },
        tooltip:{ // custumization of tooltips using some callback to present them
          xAlign: 'center', 
          yAlign: 'bottom', 
          backgroundColor: 'white', 
          bodyColor: '#79747E', 
          displayColors: false,
          usePointStyle: true,
          caretPadding: 3,
          padding:4,
          borderColor: '#5D5FEF',
          borderWidth: .1, 
          cornerRadius: 4,
          bodyFont:{
            size: 12,
            family: 'Montserrat'
          },
          callbacks: {
            title: function(){return ''}, 
            label: function(x: any){ return `${x.raw} requetes`}
          }, 
        }
      
      }
    }
    this.displayChart(tempData, option);
  }

  displayChart(dataset: any, options: any){
    let canvas: any = document.getElementById('linesChart');
    let chart = new Chart(canvas.getContext('2d'), {
      type: 'line', 
      data: {
        labels: this.chartDataValues.labels,  
        datasets:dataset,
        
      }, 
      options:  options
    }); 
   
  }  
  
}
