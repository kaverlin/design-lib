import { Component, OnInit, Input } from '@angular/core';
import { ChartInputData } from '../chart/input-data-struc';
import  Chart  from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-charts',
  templateUrl: './doughnut-charts.component.html',
  styleUrls: ['./doughnut-charts.component.scss']
})
export class DoughnutChartsComponent implements OnInit {

  chartDataValues: any
  @Input('data') set inputData (data: ChartInputData) {
    this.chartDataValues = data;
    this.restructureData();
  };
  constructor() { }

  ngOnInit(): void {
  }

  restructureData(){
    let tempData: any[] = [], option: any;
    this.chartDataValues.dataSet.forEach((element: any) => {
      tempData.push({
          label: element.label,
          data: element.data,
          backgroundColor: element.colors,
          hoverOffset: 4, 
          spacing: 5, 
          borderWidth: 0
      })
    });
    option = {
        responsive: true,
        hoverBorderWidth: 0,
        plugins: {
          legend:{
            display: false
          }, 
          tooltip:{
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
              label: function(x: any){ return `${x.raw} marchands`}
            }, 
          }
        }
    };
    this.displayChart(tempData, option);
  }

  displayChart(dataset: any, options: any){
    let canvas: any = document.getElementById('chart');
    let chart = new Chart(canvas.getContext('2d'), {
      type: 'doughnut', 
      data: {
        labels: this.chartDataValues.labels,  
        datasets:dataset,
      }, 
      options:  options
    });
    this.pluguinsRegistration(chart);
  }

  pluguinsRegistration(chart: any){
    Chart.register({
      id: 'middleText',
      beforeDraw: function() {
        let width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
    
        ctx.restore();
        let fontSize = (height / 130).toFixed(2);
        ctx.font = fontSize + "em Montserrat";
        ctx.textBaseline = "middle";
    
        let text = "4015",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });
    Chart.register({
      id: 'midleText',
      beforeDraw: function() {
        let width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
    
        ctx.restore();
        let fontSize = (height / 180).toFixed(2);
        ctx.font = fontSize + "em Montserrat";
        ctx.textBaseline = "middle";
    
        let text = "total",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = (height / 2) + 10 + parseInt(fontSize);
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }); 
  }
}
