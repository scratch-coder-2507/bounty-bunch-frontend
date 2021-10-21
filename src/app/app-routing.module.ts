import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  { path: 'dashboard', loadChildren: () => import('src/app/header/header.module').then(m => m.HeaderModule) },
  {
    path: '**', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
