import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error_message=""
  error:boolean=false
  constructor( private router:Router,
              private loginService:LoginService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.error=false
    if (!form.valid) {
      this.error=true
      this.error_message='Formulario invalido'
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    
    this.loginService.logIn("usuario1",email,password).subscribe(
      res=>{
        if(res['email']===email,res['password']===password){
          this.router.navigate(['/home'])

        }else{       
           this.error=true
          this.error_message='No existe un usuario con esta contraseña'
          form.reset();

          return
        }
      }
    )
  }
}
