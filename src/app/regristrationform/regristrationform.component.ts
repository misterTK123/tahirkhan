import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,FormControlName, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-regristrationform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './regristrationform.component.html',
  styleUrl: './regristrationform.component.css'
})
export class RegristrationformComponent {
//frm:FormGroup= new FormGroup({});
constructor()
{

}

  frm= new FormGroup({
pname: new FormControl('',[Validators.required,Validators.minLength(3)]),
pid:new FormControl('',[Validators.required,Validators.minLength(1)]),
pdate:new FormControl('',[Validators.required]),
email:new FormControl('',[Validators.required,Validators.email]),
pnumber:new FormControl('',[Validators.required]),
addcomment:new FormControl('',[Validators.required,Validators.minLength(30)])
  });


funb()
{
  console.log(this.frm.value);
}
}

