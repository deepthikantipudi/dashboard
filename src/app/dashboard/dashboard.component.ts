import {Component, OnInit} from '@angular/core';
import {Color, Label, MultiDataSet} from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { DashboardService } from '../dashboard.service';

// import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weight = true;
  glucose = true;
  bloodpressure = true;
  cholesterol = true;
  currentWeight;
  currentGlucose;
  currentCholesterol;
  currentBlood;
  highBp;
  lowBp;
  response;

  public lineChartType = 'line';

  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          gridLines: {
            // drawBorder: false,
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            // drawBorder: false,
            display: false,
          },
        },
      ],
    },
    annotation: {
      annotations: [{}],
    },
  };
  public lineChartLabels: Label[] = [
    'Jan 2019',
    'Feb 2019',
    'Mar 2019',
    'Apr 2019',
    'May 2019',
    'June 2019',
  ];
  public lineChartColors: Color[] = [
    /*{
      backgroundColor: 'transparent',
      borderColor: 'rgba(46,134,171,1)',
      pointBackgroundColor: 'rgba(46,134,171,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(46,134,171,1)',
    },*/
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(242,87,87,0.8)',
      pointBackgroundColor: 'rgba(242,87,87,0.8)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(242,87,87,0.8)',
    },
    /*{
      backgroundColor: 'transparent',
      borderColor: 'rgba(224,116,0,0.8)',
      pointBackgroundColor: 'rgba(224,116,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(224,116,0,0.8)',
    },*/
  ];

  public lineChartData: ChartDataSets[] = [
    {data: [65, 59, 300, 81, 56, 140], label: 'Weight'}
  ];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.getDashboard().subscribe(
      (res) => {
        console.log(res);
        this.currentWeight = res;
    },
    err => {
           console.log("error", err);
         }
    );
    
    this.dashboardService.getGlucose().subscribe(
      (res) => {
        console.log(res);
        this.currentGlucose = res;
    },
    err => {
           console.log("error", err);
         }
    );
    this.dashboardService.getCholesterol().subscribe(
      (res) => {
        console.log(res);
        this.currentCholesterol = res;
    },
    err => {
           console.log("error", err);
         }
    );
    this.dashboardService.getBlood().subscribe(
      (res) => {
        console.log(res.highBP);
        this.currentBlood = res.highBP+"/"+res.lowBP;       
    },
    err => {
           console.log("error", err);
         }
    );
  }

  weightToggle() {
    this.weight = !this.weight;
  }
  public lineChartData1: ChartDataSets[] = [
    // {data: [65, 59, 300, 81, 56, 140], label: 'Weight'},
    {data: [122,234,111,222,111,123], label: 'glucose'}

 
  ];

  glucoseToggle(){
    this.glucose=!this.glucose;
  }


  public lineChartColors2: Color[] = [
   
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(224,116,0,0.8)',
      pointBackgroundColor: 'rgba(224,116,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(224,116,0,0.8)',
    }
  ];

  public lineChartData2: ChartDataSets[] = [
    {data: [65, 59, 300, 81, 56, 140], label: 'high'},
    {data: [122,234,111,222,111,123], label: 'low'}

 
  ];
  bloodpressureToggle() {
    this.bloodpressure = !this.bloodpressure;
  }

  public lineChartColors3: Color[] = [
   
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(224,116,0,0.8)',
      pointBackgroundColor: 'rgba(224,116,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(224,116,0,0.8)',
    }
  ];

  public lineChartData3: ChartDataSets[] = [
    {data: [65, 159, 200, 85, 156, 140], label: 'cholesterol'},
    

 
  ];

  cholesterolToggle() {
    this.cholesterol = !this.cholesterol;
  }


}
