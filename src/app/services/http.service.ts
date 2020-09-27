import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { config } from 'src/environments/conn-config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  v3 = "/wp-json/wc/v3";
  v2 ="/wp-json/wp/v2";
  url = config.url ;
  queryparam = "";
  constructor(private http: HttpClient) { }

  post<T>(path,data):Observable<T>{
    let options = { headers: this.getHeaders() };
    return this.http.post<T>(this.url + this.v3+path,data,options);
  }

  get<T>(path):Observable<T>{
    let options = { headers: this.getHeaders() };
    return this.http.get<T>(this.url+ this.v3+path, options);
  }

  upload<T>(path:string,file:File, v2:boolean=true):Observable<T>{

    const formData = new FormData();
    formData.append('file', file);
    let curl = this.url;
    if(v2) {
      curl += this.v2
    } else{
      curl += this.v3
    }
    let options = { headers: this.getHeadersMedia(file.name) };
    return this.http.post<T>(curl+path,formData,options);
  }

  getHeaders():HttpHeaders{
  
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': config.woocommerceAuth });
  }

  getHeadersMedia(fileName):HttpHeaders{
    return new HttpHeaders({
      'Authorization': config.wordpressAuth });
  }
}
