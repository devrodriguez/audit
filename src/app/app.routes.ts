import { RouterModule, Routes } from '@angular/router';
import { AuditorsComponent } from './components/auditor/auditors.component';
import { CriteriasComponent } from './components/criteria/criterias.component';
import { HomeComponent } from './components/home/home.component';
import { CriteriaComponent } from './components/criteria/criteria.component';
import { AuditorComponent } from './components/auditor/auditor.component';
import { AuditComponent } from './audit/audit/audit.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'audits', component: AuditComponent },
    { path: 'auditor/:id', component: AuditorComponent },
    { path: 'auditors', component: AuditorsComponent },
    { path: 'criteria/:id', component: CriteriaComponent },
    { path: 'criterias', component: CriteriasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);