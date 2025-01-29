import { Component, EventEmitter } from '@angular/core';
import { ControlEvent, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { calculator } from './calclass';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})


export class CalculatorComponent {

  frmgroup: FormGroup = new FormGroup({});
  textarea: string = "";
  constructor() { }




  buttonelements: string[] = ['7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    'C', '0'];
    buttonoperators:string[]=['/','*','-','+'];
  funresult(button: string): void {
    if (button === 'C') {
      this.textarea = '';
    }
    else if (button === '=') {

    }
    else {

    }

  }
  funevulate(numa?: string, oper?: string, numb?: string) {
   debugger;
    if (numa != "") {
      if (oper == '+') {
        this.textarea += this.funa(numa, numb);
      }
      if (oper == '-') {
        if (numa == numb) {
          this.textarea += this.funa(numa, numb);
          this.textarea = "-" + this.textarea;
        } else {
          this.textarea += this.funa(numa, numb);
        }
      }
      else if (oper === '*') {
        this.textarea += this.funm(numa, numb);
      } else if (oper === '/' && numb != '0' && numb != '') {

        this.textarea += this.fund(numa, numb);
      }
    }
  }
  funa(a?: any, b?: any): string {

    return a + b;
  }
  funad(a:string) {
   debugger;
    if(a==""+'+'+"")
   {

     
   }
   
  }
  funs(a?: any, b?: any): string {

    const asubstractb = a - b;

    return asubstractb.toString();
  }
  funm(a?: any, b?: any): string {
    const amultiplyb = a * b;
    return amultiplyb.toString();
  }
  fund(a?: any, b?: any): string {
    const adivideb = a / b;
    return adivideb.toString();
  }

  assigntext(value: string) {
    this.textarea += value;
  }
  a:string='';
  b:string='';
  operatorsign:any='';
  minus:any='-';
  divide:any='/';
  add:string='';
  multiply:any='*';
  funempty()
  {
    console.log(this.operatorsign);
  }
exe( value?:any,operatorsign?:any,valueses?:any)
{
  
this.textarea +=value,operatorsign;
this.a =this.textarea;
console.log(this.a);
}
  funadd(operator:string)
  {
this.operatorsign =operator;
this.textarea +=operator;
console.log(this.operatorsign);
  }


 

}
