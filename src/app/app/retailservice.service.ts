import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetailserviceService {

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get<any>(`https://keralastats.coronasafe.live/latest.json`)
  }

}
