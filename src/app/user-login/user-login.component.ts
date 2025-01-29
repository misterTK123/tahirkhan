import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  loginobject:any={
    EmailId:"",
    Password:""
  }
  constructor(){}
      
  userlogin()
      {  
         //const perse=JSON.stringify('loginobject');     
        const stringfy=JSON.stringify(this.loginobject);
         console.log("this is login for data",stringfy);
        const data:any= localStorage.getItem('signobj');
        console.log("this is get data",data);
      debugger;
   
        if (this.loginobject.Email!="" && this.loginobject.Password!="") {
          const pers=JSON.parse(data);
          if (pers.EmailId==this.loginobject.EmailId ) {
             if (pers.Password==this.loginobject.Password) {
                 alert("Congrulation! for sucessfull login")  
             }
             else
             {
              alert("you password is incorrect");
             }
            
          }else
          {
           alert("you email is in correct");
          }
      }
      else{
        alert("please create account or signin");
      }
          
      }
      router=inject(Router);
      fungotosignin()
      {
            this.router.navigateByUrl('signinuser');
      }
}


