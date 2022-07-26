import { Component, Input, OnInit } from '@angular/core';
import  Chart  from 'chart.js/auto';
import { ChartInputData } from './input-data-struc';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})


export class ChartComponent implements OnInit {
  
  chartDataValues: any
  @Input('data') set inputData (data: ChartInputData) {
    this.chartDataValues = data;
    console.log(data);
    this.restructureData();
  };

  constructor() { }

  ngOnInit(): void {
  }

  restructureData(){
    let tempData: any[] = [], option: any;
      if(this.chartDataValues.type == "line"){
        
          (this.chartDataValues.dataSet as []).forEach(element => {
              tempData.push({
                label: (element as any).label,
                data: (element as any).data,
                fill: true,
                borderColor: '#5D5FEF',
                tension: 0.3, 
                backgroundColor: "#ff000000", 
                pointBackgroundColor: '#5D5FEF', 
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
      }else{
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
      }
      this.displayChart(tempData, option);
      
  }

  displayChart(dataset: any, options: any){
    let canvas: any = document.getElementById('chart');
    console.log('new chart');
    if(this.chartDataValues.type == "line"){
      let chart = new Chart(canvas.getContext('2d'), {
        type: 'line', 
        data: {
          labels: this.chartDataValues.labels,  
          datasets:dataset,
        }, 
        options:  options
      }); 
    }else{
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
