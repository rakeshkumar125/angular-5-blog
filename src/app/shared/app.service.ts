import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from "@angular/http";
import { DataTableParams } from 'angular-4-data-table-fix';
import { environment } from '../../environments/environment';
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
    	return this._http.post(environment.apiEndpoint+'signup',formData)
    	.map(res=>{ return res});

    }

  

    userLogin(loginDetails){
   		let userCredentials = new FormData();
   		userCredentials.append("username",loginDetails.username);
   		userCredentials.append("password",loginDetails.password);
   		return this._http.post(environment.apiEndpoint+'login',userCredentials)
   		.map(res=>{ return res; });

    }

    setUserLogin(userDetails){
    	this.getLoggedInName.emit(userDetails.fullname);
      localStorage.setItem('token',userDetails.token);
    	localStorage.setItem('user_id',userDetails.data_id);
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
      return this._http.get(environment.apiEndpoint+"categories")
      .map(res=>{return res;});
    }

    getposts(){
      return this._http.get(environment.apiEndpoint+"posts1")
      .map(res=>{return res;});
    }

    getSinglePosts(id){
      let URl = environment.apiEndpoint+"post/"+id;
      return this._http.get(URl)
        .map(res=>{ return res[0];});
    }



    addPost(postDetails){
      let postData = new FormData();
      postData.append("title",postDetails.title);
      postData.append("content",postDetails.content);
      postData.append("category",postDetails.category);
      postData.append("userID",postDetails.userID);
      return this._http.post(environment.apiEndpoint+"addpost",postData)
      .map(res=>{ return res});

    }

    updatePost(postDetails){
      let postData = new FormData();
      postData.append("title",postDetails.title);
      postData.append("content",postDetails.content);
      postData.append("category",postDetails.category);
      postData.append("userID",postDetails.userID);
      postData.append("postID",postDetails.postID);
      return this._http.post(environment.apiEndpoint+"addpost",postData)
      .map(res=>{ return res});
    }


    deletePost(postID){

      let postData = new FormData();
      postData.append("postID",postID);
      return this._http.post(environment.apiEndpoint+"deletePost",postData)
      .map(res=>{  return res; });

    }



}