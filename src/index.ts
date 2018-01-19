import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroJsService } from './services/introjs.service'

export * from './services/introjs.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class IntroJsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IntroJsModule,
      providers: [IntroJsService]
    };
  }
}
