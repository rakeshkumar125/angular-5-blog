import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private service:AppService, private fb:FormBuilder) { }
  registerForm;
  userRegisterStatus=false;
  userRegisterError = new Map();
  
  ngOnInit() {

  	this.registerForm = this.fb.group({
  		username : ["",[]],
  		fullname : ["",[]],
  		email : ["",[]],
  		password : ["",[]]

  	})
  	
  }


  errorClass(control){
  	return (this.userRegisterError.get(control) != undefined && this.userRegisterError.get(control).length>0) ? 'has-error' :'';
  }

  errorMessage(control){
  	return this.userRegisterError.get(control);
  }

  register(){

  	let user={
  		fullname:this.registerForm.get('fullname').value,
  		username:this.registerForm.get('username').value,
  		email:this.registerForm.get('email').value,
  		password:this.registerForm.get('password').value};

  		this.service.userRegister(user).subscribe(data=>{
  			if(!data){
  				this.userRegisterStatus=true;
  				this.registerForm.reset();
  			}else{
  				this.userRegisterError.clear();
  				for (let error in data ) {
					    this.userRegisterError.set(data[error].error_field, data[error].error);
				}
  			}
  		})
  }

}
