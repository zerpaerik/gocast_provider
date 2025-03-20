import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: 'services',
    children: [
      {
        path: 'request',
        loadComponent: () => import('./features/services/service-form/service-form.component').then(m => m.ServiceFormComponent),
      },
      {
        path: 'request/:id',
        loadComponent: () => import('./features/services/service-request-detail/service-request-detail.component').then(m => m.ServiceRequestDetailComponent),
      },
      {
        path: 'in-progress',
        loadComponent: () => import('./features/services/service-in-progress/service-in-progress.component').then(m => m.ServiceInProgressComponent),
      },
      {
        path: 'rating',
        loadComponent: () => import('./features/services/service-rating/service-rating.component').then(m => m.ServiceRatingComponent),
      }
    ],
    canActivate: [AuthGuard]
  }
];
