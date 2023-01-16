import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _auth: any;


  // onSubmit(f :NgForm){
  //   console.log(f);
  //   console.log('form is submitted')
  // }
 
    public fullname: string = ''; 
    public username: string = '';
    public email: string = ''; 
    public password: string = ''; 
    public result: any = ''; 
    public response:any=''; 
    validationErr: boolean = false;
    constructor(private http:HttpClient,private router: Router) { } 

  
    
    ngOnInit(): void { 
      console.log("register") 
    
      console.log("register") 
    } 
    register(){ 
      const body = { fullname:this.fullname,username:this.username ,email:this.email ,password:this.password}; 
      console.log("shjranmen",this.fullname,this.username,this.email)
      if (this.fullname && this.username && this.email && this.password) {
      this.http.post("http://127.0.0.1:5000/register",body).subscribe(result=> { 
       console.log(result) 
       this.response=result 
        
        this.router.navigate(['']) 
    
  
      }
 
    )
  }
     else {

      this.validationErr = true;

    }
  }}

  



