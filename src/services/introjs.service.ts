import { Injectable } from '@angular/core';
import  introJs from 'intro.js/intro.js';

@Injectable()


export class IntroJsService {
    demoOptions:any = {}

    constructor() {
        //console.log('service');
        //this.demoOptions = {
        //    steps: [
        //        {
        //            element: '#step1',
        //            intro: 'First enter your zipcode to find the plans that are avaiable in your area',
        //            position: 'bottom'
        //          },
        //          {
        //            element: '#step2',
        //            intro: 'Next, Enter the date in which you would like the plan to start.',
        //            position: 'bottom'
        //          },
        //          {
        //            element: '#step3',
        //            intro: 'Next, Choose who you would like to cover with your plan.',
        //            position: 'top'
        //          },
        //          {
        //            element: '#step4',
        //            intro: 'Next, Enter your birthdate',
        //            position: 'top'
        //          },
        //          {
        //            element: '#step5',
        //            intro: 'Next, Enter your email so we can send you quotes on the plans that you selected.',
        //            position: 'bottom'
        //          },
        //          {
        //            element: '#step6',
        //            intro: 'Next, Click here to continue to the plan selection.',
        //            position: 'top'
        //          }
        //    ]
        //}
    }

    start = (options) => {
        //console.log('start');
        introJs().setOptions(options).start()
    }
}
