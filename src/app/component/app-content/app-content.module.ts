import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContentComponent } from './app-content.component';
import { routesConfig } from './component.route';
import { ExamplePanelComponent } from './example-panel.component';

@NgModule({
  declarations: [AppContentComponent, ExamplePanelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppContentComponent,
        children: routesConfig,
      },
    ]),
  ],
})
export class AppContentModule {}
