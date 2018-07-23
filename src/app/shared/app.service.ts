import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService{
    isLoggedin:boolean;
    @Output() getLoggedInName = new EventEmitter(); 

    constructor(private _http: HttpClient){

    }

	userRegister(user){
    	let formData = new FormData();
    	formData.append("fullname",user.fullname);
    	formData.append("username",user.username);
    	formData.append("email",user.email);
    	formData.append("password",user.password);
    	return this._http.post('http://localhost/angular/editor-latest/api/signup',formData)
    	.map(res=>{ return res});

    }

    userLogin(loginDetails){
   		let userCredentials = new FormData();
   		userCredentials.append("username",loginDetails.username);
   		userCredentials.append("password",loginDetails.password);
   		return this._http.post('http://localhost/angular/editor-latest/api/login',userCredentials)
   		.map(res=>{ return res; });

    }

    setUserLogin(userDetails){
    	this.getLoggedInName.emit(userDetails.fullname);
    	localStorage.setItem('token',userDetails.token);
        return true;
    }

    isUserLoggedIn(){
       if(localStorage.token !== undefined && localStorage.token.length>0){
           return true;
       } else{
           return false;
       }
   	}

    getCategories(){
      return this._http.get("http://localhost/angular/editor-latest/api/categories")
      .map(res=>{return res;});
    }


}