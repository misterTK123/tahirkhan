import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreatePostComponentComponent } from './create-post-component/create-post-component.component';
import { canactiveGuard } from './canactive.guard';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { SignusercomponentComponent } from './signusercomponent/signusercomponent.component';
import { RegristrationformComponent } from './regristrationform/regristrationform.component';


export const routes: Routes = [
     {
            path: '',
            redirectTo: 'lu',
            pathMatch: 'full'
        },
        {
            path: 'lu',
            component: UserLoginComponent,
        },
           {
            path:'',
            component:AppComponent,
            children: [
                {
                    path: 'cp',
                    component: CreatePostComponentComponent,
                   canActivate:[canactiveGuard],
                },
                {
                    path: 'pl',
                    component: PostListComponentComponent,
                   canActivate:[canactiveGuard],
                },
                {
                    path: 'd',
                    component: DeletePostComponent,
                  canActivate:[canactiveGuard]
                },
                {
                    path:'su',
                    component:SignusercomponentComponent,
                 
                },
                {
                    path:'rf',
                    component:RegristrationformComponent,
                    canActivate:[canactiveGuard]
                }
    
            ]
        }
    
];
