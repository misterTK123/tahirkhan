import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-create-post-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post-component.component.html',
  styleUrl: './create-post-component.component.css'
})
export class CreatePostComponentComponent {
  post={
    pasttitle:'',
    postbody:''
  };
  constructor(private appservices:AppServicesService)
  {
  }
  submittpost():void
  {
     this.appservices.createpost(this.post).subscribe((res:any)=>{
      console.log('post are created ',res);
     });
  }  
}






