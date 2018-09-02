import { Routes, RouterModule } from '@angular/router';

import {} from '../main/account/account.component'
 import { AuthGuard } from './shared/auth.guard';//vhjhvjvj
 const appRoutes: Routes = [
     { path: 'AuthRout/home', component: HomeComponent, canActivate: [AuthGuard] },
     { path: 'AuthRout', redirectTo: 'AuthRout/home',},
     { path: 'AuthRout/login', component: LoginComponent },
     // otherwise redirect to home
     { path: '**', redirectTo: 'AuthRout' }
 ];
 export const routing = RouterModule.forRoot(appRoutes);