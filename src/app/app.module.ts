import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { BooklistComponent } from './booklist/booklist.component';
import { UpdateComponent } from './update/update.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactComponent } from './contact/contact.component';
import { UserviewComponent } from './userview/userview.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    UserComponent,
    AddComponent,
    BooklistComponent,
    UpdateComponent,
    AboutpageComponent,
    ContactComponent,
   UserviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
