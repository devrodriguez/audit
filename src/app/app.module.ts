import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Routes
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { AuditorComponent } from './components/auditor/auditor.component';
import { CriteriaComponent } from './components/criteria/criteria.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditorComponent,
    CriteriaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
