import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelDetailsService {

  constructor(public http:HttpClient) { }

  getModelDetails(type:any){
    return this.http.get(`http://localhost:3000/api/model_details/get_model_details/${type}`)
  }
}
