import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from '../button.module';
import { ButtonDemoComponent } from './button-demo.component';
import { CommonComponent } from './common/common.component';
import { PrimaryComponent } from './primary/primary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo' },
      { path: 'demo', component: ButtonDemoComponent},
      // { path: 'api', component: DevUIApiComponent, data: {
      //   api: require('!html-loader!markdown-loader!../doc/api.md')
      // }}
    ])
  ],
  exports: [ButtonDemoComponent],
  declarations: [
    ButtonDemoComponent,
    CommonComponent,
    PrimaryComponent,
  ],
  entryComponents: [
    ButtonDemoComponent,
  ],
})
export class ButtonDemoModule {
}

