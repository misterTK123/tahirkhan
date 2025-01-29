import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from './Constant';

@Injectable({
  providedIn: 'root'
})


export class AppServicesService {

  
  constructor(private http:HttpClient) { }

 
      getpost():Observable<any[]>{
        return  this.http.get<any[]>(constant.APP_URL);
      }
     getbyid( id:number):Observable<any>
     {
    return this.http.get<any>(`${constant.APP_URL}/${id}`);
     }
     createpost(post:any):Observable<any>{
      return this.http.post<any>(constant.APP_URL,post);
     }
     Deletebyid(deletebyid?:number)
     {
         
         this.http.delete(`${constant.APP_URL}/${deletebyid}`).subscribe((data:any)=>{
           alert("Post Are DEleted Sucessfully ")
         })      
     }
     loginuser(value:any)
     {
      this.http.get('');
     }
     UserDataSetAPI(obj:any)
     {
      const stringfy=JSON.stringify(obj);
       this.http.post(`${constant.API_LOGIN_URL}`,stringfy).subscribe((data:any)=>{
        console.log(data);
       })
       this.Localuserstorage(stringfy);
     }   
     Localuserstorage(obj:string)
     {
     // const stringfy:any=JSON.stringify(obj);
        localStorage.setItem('signobj',obj);
     }
     
}
