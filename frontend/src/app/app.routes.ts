import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/user/home-page/home-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'admin', component: DashboardComponent },
];
