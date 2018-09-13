import { RouterModule, Routes } from '@angular/router';
import { AuditorComponent } from './components/auditor/auditor.component';
import { CriteriaComponent } from './components/criteria/criteria.component';

const APP_ROUTES: Routes = [
    { path: 'auditor', component: AuditorComponent },
    { path: 'criteria', component: CriteriaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'auditor' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);