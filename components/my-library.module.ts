import { NgModule, ModuleWithProviders } from '@angular/core';
import { ButtonModule } from './button';

export * from './button';

@NgModule({
  declarations: [],
  imports: [],
  exports: [ButtonModule],
})
export class MyLibraryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyLibraryModule,
    };
  }
}
