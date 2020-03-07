import {Component} from '@angular/core';

/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
  styleUrls: ['datepicker-overview-example.css'],
})
export class DatepickerOverviewExample {
  public chosenDate: Date;
  
  private version: any;
  
  constructor() { }
  
  get dateUTC() {
    if(this.chosenDate) {
      return new Date(this.chosenDate.getUTCFullYear(), 
      this.chosenDate.getUTCMonth(), this.chosenDate.getUTCDate(),  
        this.chosenDate.getUTCHours(), this.chosenDate.getUTCMinutes(), 
        this.chosenDate.getUTCSeconds());
    }
  }

  disableWeekend(d: Date) {
    if(d.getDay() != 0 && d.getDay() != 6) {
      return d;
    }
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */