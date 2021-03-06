import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// Routes
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';

// App Components
import { AuditComponent } from './components/audit/audit.component';
import { AuditorComponent } from './components/auditor/auditor.component';
import { AuditorsComponent } from './components/auditor/auditors.component';
import { CriteriaComponent } from './components/criteria/criteria.component';
import { CriteriasComponent } from './components/criteria/criterias.component';
import { EnterprisesComponent } from './components/enterprises/enterprises.component';
import { EnterpriseComponent } from './components/enterprises/enterprise.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Styles
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AuditComponent,
    AuditorComponent,
    AuditorsComponent,
    CriteriaComponent,
    CriteriasComponent,
    NavbarComponent,
    HomeComponent,
    EnterprisesComponent,
    EnterpriseComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
