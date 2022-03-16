import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  delete: any;


  constructor(private http : HttpClient) { }

  postProduct(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data);
  }

  getProduct(){
    return this.http.get<any>(" https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
  }
}
