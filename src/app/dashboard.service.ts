import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

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
    return this.http.get(this.url + '/CL/CurrentCL/1');
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

  postCholesterol(data){
     this.http.post(this.url + '/CL/PatientCL', data);
  }

  postBlood(){
    return this.http.get<any>(this.url + '/BP/CurrentBP/2');
  }

  
  
}
