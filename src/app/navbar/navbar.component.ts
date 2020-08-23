import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
  private userSub: Subscription
  isAuthenticated = false
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.userSub = this.loginService.user.subscribe(user=>{
      console.log(user)
      this.isAuthenticated= !!user
    })
  }
  onLogout(){
    this.loginService.logOut()
  }
  ngOnDestroy(){
    this.userSub.unsubscribe()
  }
}
