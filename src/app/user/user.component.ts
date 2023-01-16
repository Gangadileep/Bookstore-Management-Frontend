import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public data:any=""
  public book:any=""
  router: any;

 constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getbook()
  }
  getbook(){
    console.log('fffggg')
    this.http.get("http://127.0.0.1:5000/books").subscribe((result: any)=>{
      
            // console.log(result)
      
          this.data=result
      
          console.log(this.data)
        })
  }
  logout(){
 
    console.log("ggggg")
       localStorage.clear()
   
       this.router.navigate([''])
   
     }
}