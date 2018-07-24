import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isUserlogedin = false;	
  constructor(private appService : AppService, private _router: Router) { 
  	this.isUserlogedin = this.appService.isUserLoggedIn();
  	this.appService.getLoggedInName.subscribe(name => this.updateLoginStatus(name));

  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    this._router.navigate(['/signup']);
    this.isUserlogedin=false;
  }

  updateLoginStatus(name){
    if(name.length==0){
      this.isUserlogedin=false;
    }else{
      this.isUserlogedin=true;
    }
  }


}
