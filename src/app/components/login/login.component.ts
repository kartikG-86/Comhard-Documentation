import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/Login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  message = ""
  status:any
  constructor(public login_service:LoginService,public router:Router){}
  login(loginForm:any){
    const data = {
      email:loginForm.form.value.email,
      password:loginForm.form.value.password
    }
    this.login_service.login(data).subscribe((res) => {
      console.log(res)
      this.message = res.message
      this.status = res.status
      console.log(res,this.status,this.message)
      if(res.token){
        localStorage.setItem('token',res.token)
        this.router.navigateByUrl('/codehub/welcome')
      }
      else{

        setTimeout(() => {
          this.message = ""
          this.status = null
        },500)
      }
    })
  }

}
