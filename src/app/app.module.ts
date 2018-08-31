import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { NgxEditorModule } from 'ngx-editor';
//import {DataTableModule} from "angular2-datatable";
//import { DataTableModule } from 'angular-4-data-table/src/index';
import { DataTableModule } from 'angular-4-data-table-fix';

import { AppComponent } from './app.component';
import { AuthGuard } from './shared/authGuard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { AppService } from './shared/app.service';
import { routing } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddpostComponent } from './addpost/addpost.component';
import { PostsComponent } from './posts/posts.component';
import { EditpComponent } from './editp/editp.component';
import { TableComponent } from './table/table.component'; 



@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AddpostComponent,
    PostsComponent,
    EditpComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    NgxEditorModule,
    DataTableModule
  ],
  providers: [AppService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
