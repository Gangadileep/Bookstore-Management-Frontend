import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AddComponent } from './add/add.component';
import { BooklistComponent } from './booklist/booklist.component';
import { UpdateComponent } from './update/update.component';
import { UserviewComponent } from './userview/userview.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    
    path:'register',component:RegisterComponent
  },

  {

    path:'',component:LoginComponent
    

  },
  {
    path:'home',component:HomeComponent,canActivate :[AuthGuard]
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'admin',component:AdminComponent,canActivate :[AuthGuard]
  },
  {
    path:'user',component:UserComponent,canActivate :[AuthGuard]
  },
  {
    path:'add',component:AddComponent,canActivate :[AuthGuard]
  },
  {
    path:'booklist',component:BooklistComponent,canActivate :[AuthGuard]
  },
  {
    path:'update/:isbn',component:UpdateComponent,canActivate :[AuthGuard]
  },
  {
    path:'userview',component:UserviewComponent,canActivate :[AuthGuard]
  },
  {
    path:'contact',component:ContactComponent,canActivate :[AuthGuard]
  },
  {
    path:'aboutpage',component:AboutpageComponent,canActivate :[AuthGuard]
  },
 


  
  
  


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
