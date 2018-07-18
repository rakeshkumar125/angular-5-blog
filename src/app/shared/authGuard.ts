import { Injectable } from '@angular/core';
import { Router, CanActivate , RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate{

	constructor(private router:Router){}

	canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

		var token = localStorage.getItem('token');
        if(token==null){
        	this.router.navigate(['/login']);            
        } else{
        	return true;
        }

	}


}