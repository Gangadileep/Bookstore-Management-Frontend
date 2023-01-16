import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public bookname:string=""

  public isbn:any=""
  
  public author:any=""
  
  public category:any=""
  
  public prize:any=""
  public data:any=""
  book_name: any;
  

  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  
  addbook(){
    console.log('fffggg')
        console.log(this.bookname)
     
        const body = { book_name:this.book_name , isbn:this.isbn,author:this.author,category:this.category, prize:this.prize};
         console.log(this.isbn)
        this.http.post("http://127.0.0.1:5000/insert",body).subscribe(result=>{
    
          // console.log(result)
    
        this.data=result
    
        console.log(this.data)
      })
    }
    }

