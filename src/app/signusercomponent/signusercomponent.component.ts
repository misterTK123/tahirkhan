import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { sign } from './sign';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-signusercomponent',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signusercomponent.component.html',
  styleUrl: './signusercomponent.component.css'
})
export class SignusercomponentComponent {
  signobj:sign= new sign();
  constructor(public service:AppServicesService)
  {

  }
  frnsignin:FormGroup= new FormGroup({
   firstname:new FormControl('',[Validators.required,Validators.minLength(3)]),
   lastname:new FormControl('',[Validators.required,Validators.minLength(3)]),
   EmailId:new FormControl('',[Validators.email,Validators.minLength(11)]),
   Password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)])
  });
 

 funsignin()
 {
  this.signobj=this.frnsignin.value;
  console.log(this.signobj);
  
 }

userpostapi()
{
//this.service.UserDataSetAPI(this.signobj);
this.signobj=this.frnsignin.value;
const obj=JSON.stringify(this.signobj);
this.service.Localuserstorage(obj);
}
}
 