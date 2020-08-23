import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

import { User } from './../user.model'

export interface AuthResponseData{
  email:string
  user:string
  password:string

}


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = new BehaviorSubject<User>(null);

  constructor(private http:HttpClient,private router:Router) {}

  logIn(user:string, email:string, password:string){
     return this.http.get<AuthResponseData>(`../../assets/Data/${user}.json`).pipe(tap(res=>{
       this.handleAuthentication(res.email,res.user,'asd')
      }))
  }     

  logOut(){
    this.router.navigate(['/login'])
    localStorage.removeItem('userData')
  }
  
  private handleAuthentication(  email: string,  userId: string,  token: string) {
    const user = new User(email, userId, token);
    this.user.next(user);
    localStorage.setItem('userData',JSON.stringify(user))
  }
  
  autoLogin(){
    const userData:User = JSON.parse(localStorage.getItem('userData'))
    if(!userData){
      return;
    }
    const loadedUser = new User(userData.email,userData.id,userData.token)
    this.user.next(loadedUser);
  }
}
