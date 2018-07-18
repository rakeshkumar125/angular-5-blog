import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddpostComponent } from './addpost/addpost.component'; 
import { AuthGuard } from './shared/authGuard';
/*import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { AuthGuard } from './authcheck';*/

export const routes : Routes = [
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'addpost',component:AddpostComponent},
/*{path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},*/
{path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
{path:'**',component:HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);