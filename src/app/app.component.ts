import { Component } from '@angular/core';
import { UniversityService } from './university.service';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

// interfaces
interface iFormData {
  name: string,
  country: string
}

// component config
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UniversityService]
})

// class definition
export class AppComponent {
  // content vars
  author = 'Brian Ray';
  title = 'University Search';
  year = new Date().getFullYear();

  // timer vars
  timer = setTimeout(() => {}, 0);
  searchDelay = 1500;
  
  // filter vars
  formData: iFormData = {country: '', name: ''};
  queryString = '';

  // results vars
  serverResponse: any = [];

  // template bool vars
  isCollapsed: any = [];
  showLoading = true;

  constructor(private universityService: UniversityService) {
    // load all results on page load
    this.doSearch();
  }

  // set formCountry var when the country select element changes
  // do search immediately
  onCountrySelect = (value:string) => {
    this.formData['country'] = value;
    
    this.doSearch();
  }

  // fires on keyup when name text box is focused
  onNameChange = (event:any) => {
    if (typeof event == 'object') {
        this.formData['name'] = event.target.value;

        // start search timer 
        this.timer = setTimeout(() => {
          this.doSearch();
      }, this.searchDelay);
    }
    
  }
  // fires on key down when name text box is focused
  clearTimer = () => {
    // clear timeout on key press
    clearTimeout(this.timer);
  }

  // Build query string
  buildQueryString = (formData: iFormData) => {
    let ret: any = {name: '', country: ''};
    let glue = '=';
    let separator = '&';
    
    // I struggled to find a way to automate this bit.
    if(formData.hasOwnProperty('name')) {
      if(formData.name.length > 0) {
        ret.name = this.formatValue(formData.name);
      } else {
        delete ret.name;
      }
    }

    if(formData.hasOwnProperty('country')) {
      if(formData.country.length > 0) {
        ret.country = this.formatValue(formData.country);
      } else {
        delete ret.country
      }
    }

    // from https://gist.github.com/lucasdavila/4331999#gistcomment-3436121
    this.queryString = Object.keys(ret).map((key) => [key, ret[key]].join(glue)).join(separator);
  }

  // format data for querystring
  formatValue = (val: string) => {
    return val.toLowerCase().replace(/ /g, '+');
  }

  // run the search
  doSearch = () => {
    this.showLoading = true;

    // emtpy isCollapsed array
    this.isCollapsed = [];

    this.buildQueryString(this.formData);

    this.universityService.getUniversities(this.queryString)
    .subscribe(response => {
      this.serverResponse = response;

      for (var index in response) {
        this.isCollapsed[index] = true;
      }

      this.showLoading = false;
    });


  }

  
}
