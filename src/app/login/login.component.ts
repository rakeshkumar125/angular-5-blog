import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AppService } from '../shared/app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;	
  loginError = new Map();
  loginCredentialError = false;
  constructor(private fb:FormBuilder, private service:AppService, private router : Router) { }

  ngOnInit() {
  	this.loginForm = this.fb.group({
  		username:["",[]],
  		password:["",[]],
  	});
  }

  errorClass(control){
  	return (this.loginError.get(control) != undefined && this.loginError.get(control).length>0) ? 'has-error' :'';
  }

  errorMessage(control){
  	return this.loginError.get(control);
  }

  userLogin(){
  	let loginCredentials = {
  		username:this.loginForm.get('username').value,
  		password:this.loginForm.get('password').value,
  	};

  	this.service.userLogin(loginCredentials).subscribe(res=>{
  		this.loginError.clear();
  		let getStatus = (<any>res).status;
  		if(getStatus != undefined){
  			if(!getStatus){
  				this.loginCredentialError=true;
  			}else{
  				this.service.setUserLogin(res);
  				this.loginForm.reset();
  				this.router.navigate(['dashboard']);
  			}
  		}else{
  			for(let error in res){
  				this.loginError.set(res[error].error_field, res[error].error);

  			}

  		}
  	});

  }


}
