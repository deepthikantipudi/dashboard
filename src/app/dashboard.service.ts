import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Details } from './details';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};







  

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url= 'http://172.16.1.34:8082'
  constructor(private http: HttpClient) { }

  getDashboard() {
    return this.http.get(this.url + '/Weight/CurrentWeight/2');
  }

  getGlucose(){
    return this.http.get(this.url + '/GL/CurrentGL/2');
  }

  getCholesterol(){
    return this.http.get(this.url + '/CL/CurrentCL/2');
  }

  getBlood(){
    return this.http.get<any>(this.url + '/BP/CurrentBP/2');
  }
  postDashboard() {
    return this.http.get(this.url + '/Weight/CurrentWeight/2');
  }

  postGlucose(){
    return this.http.get(this.url + '/GL/CurrentGL/2');
  }

  postCholesterol(details:Details){

    var body = JSON.stringify(details);


    return  this.http.post(this.url + '/CL/PatientCL', body);
   }

  postBlood(){
    return this.http.get<any>(this.url + '/BP/CurrentBP/2');
  }

  sendCholesterol(jsonObject){
    this.http.post(this.url + '/CL/PatientCL', jsonObject).toPromise().then((data) => {
      console.log("returned object" + JSON.stringify(data));
    })
  }


  
  
}
