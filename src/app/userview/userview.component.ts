import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  public data:any=""
  public book:any=""
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getbook()
    console.log("getbok")
  }
  getbook(){
    console.log('fffggg')
    this.http.get("http://127.0.0.1:5000/books").subscribe((result: any)=>{
      
            // console.log(result)
      
          this.data=result
      
          console.log(this.data)
        })
  }
}