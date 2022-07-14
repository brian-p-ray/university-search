import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UniversityService {
  private baseUrl: string = 'http://universities.hipolabs.com/search';

  constructor(private http: HttpClient) {
  }

  getUniversities(urlParams: string) {
    let url: string = this.baseUrl;
    let sep: string = '?'

    if(urlParams != '') {
      url = this.baseUrl + sep + urlParams;
    }

    return this.http.get(url);


  }
}
