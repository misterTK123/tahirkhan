import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-delete-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-post.component.html',
  styleUrl: './delete-post.component.css'
})
export class DeletePostComponent {
  deletefile:boolean=true;
       deletebyid:number=0;
   constructor( public serviceobj:AppServicesService)
   {

   }
    funfordelete()
    {
      this.serviceobj.Deletebyid(this.deletebyid);
      
    }  
}

         

