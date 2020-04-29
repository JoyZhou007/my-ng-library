import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibraryModule } from 'my-ng-lib/';
import { ButtonModule } from 'components/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibraryModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'components',
        pathMatch: 'full',
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./component/app-content/app-content.module').then(
            (m) => m.AppContentModule
          ),
      },
      {
        path: '**',
        redirectTo: 'components',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
