import { Component, inject, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';
import { constant } from '../Constant';
import { CreatePostComponentComponent } from '../create-post-component/create-post-component.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-post-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list-component.component.html',
  styleUrl: './post-list-component.component.css'
})
export class PostListComponentComponent {
  posts:any[]=[{
    usedId:0,
    id:0,
    title:'',
    body:''
   }];
     
    constructor()
   {
   this.assignpost();
   }
   http=inject(HttpClient);
  
  assignpost()
    {
     
     // url:'https://jsonplaceholder.typicode.com/posts';
  this.http.get(constant.APP_URL).subscribe((data:any)=>{
   this.posts=data;
     console.log(this.posts)
  })
    }
}


