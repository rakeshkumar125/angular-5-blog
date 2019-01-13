import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddpostComponent } from './addpost/addpost.component'; 
import { AuthGuard } from './shared/authGuard';
import { PostsComponent } from './posts/posts.component';
import { EditpComponent } from './editp/editp.component';
import { TableComponent } from './table/table.component'; 
import { Table1Component } from './table1/table1.component'; 

export const routes : Routes = [
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'addpost',component:AddpostComponent , canActivate:[AuthGuard]},
{path:'posts', component:PostsComponent , canActivate:[AuthGuard]},
{path:'editp/:id', component:EditpComponent , canActivate:[AuthGuard]},
{path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
{path:'table',component:TableComponent},
{path:'table1',component:Table1Component},
{path:'**',component:HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);