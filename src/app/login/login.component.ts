import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validationErr: boolean = false;
  // loginData: any;
  // _auth: any;
  token:any;
  public username: string = '';
    public password: string = ''; 
    public result: any = ''; 
    public response:any=''; 
    
  constructor(private http:HttpClient,private router: Router) { } 

  // onSubmit(f:NgForm){
  //   console.log(f);
  //   console.log("form submitted")
  // }
  
    // public username: string = '';
    // public password: string = ''; 
    // public result: any = ''; 
    // public response:any=''; 
    
  
    
    ngOnInit(): void { 
      console.log("login") 
    
      console.log("login") 
    } 
    login(){ 
      const body = { username:this.username ,password:this.password}; 
      console.log("shjranmen",this.username) 
      if(this.username && this.password){
        this.validationErr = false;
        this.http.post("http://127.0.0.1:5000/login",body).subscribe(result=> { 
        console.log("res",result) 
        
        this.response=result 
        //  this.findAccesstoken(this.response)
        this.token= this.response.access_token
        localStorage.setItem("token",this.token)
        if(this.response){ 
          this.router.navigate(['/home']) 
          console.log("response", this.response.access_token)
        }
      })}
     else {
       this.validationErr = true;
  }


  }
  // findAccesstoken(token:any) {
  //   localStorage.setItem("token",token)
  //   console.log(token)
    
  // }

  

}

