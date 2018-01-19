/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, forwardRef, Inject } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IntroJsService } from 'ng2-intro-js';
import { IntroJsModule }  from 'ng2-intro-js';
//import { Component } from '@angular/core';

//console.log('IJS',forwardRef(() => IntroJsService))

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  providers: [IntroJsService]
})

export class AppComponent {
  options:any = {
      steps: [
          {
            element: '#step1',
            intro: 'First enter your zipcode to find the plans that are avaiable in your area',
            position: 'bottom'
          },
          {
            element: '#step2',
            intro: 'Next, Enter the date in which you would like the plan to start.',
            position: 'bottom'
          },
          {
            element: '#step3',
            intro: 'Next, Choose who you would like to cover with your plan.',
            position: 'top'
          },
          {
            element: '#step4',
            intro: 'Next, Enter your birthdate',
            position: 'top'
          },
          {
            element: '#step5',
            intro: 'Next, Enter your email so we can send you quotes on the plans that you selected.',
            position: 'bottom'
          },
          {
            element: '#step6',
            intro: 'Next, Click here to continue to the plan selection.',
            position: 'top'
          }
      ]
    };
  constructor(public ijsService: IntroJsService){
    console.log('ijsservice', this.ijsService)
  }

  start = (options) => {
    console.log('hi')
    this.ijsService.start(options);
  }
  //start(options) {
  //  console.log(hi)
  //}
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, IntroJsModule.forRoot(), ],
  providers: [IntroJsService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
