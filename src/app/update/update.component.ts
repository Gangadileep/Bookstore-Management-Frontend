import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public book_name:string="";
  public isbn:any;
  public author:any;
  public category:any="";
  public prize:any="";
  public data:any="";

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {

    console.log(this.router.url);

  }
  ngOnInit(): void {

    this.isbn = this.route.snapshot.params['isbn'];
   console.log("isbn",this.isbn)
    this.getbook(this.isbn)


  }
  getbook(isbn: any) {

    console.log(this.book_name)

    this.http.get(`http://127.0.0.1:5000/bookk/${isbn}`,).subscribe(result => {

      this.data = result;
    
        console.log(this.data)
        
      this.book_name = this.data.book_name;
      console.log(this. book_name)
      
      this.isbn = this.data.isbn;

      this.author = this.data.author;

      console.log(this.data.author)
    
     this.category=this.data.category;
     console.log(this.category)
     this.prize=this.data.prize;

 

    })

  }

  update(isbn:any){
    console.log('fffggg')
        console.log(this.book_name)
     
        const body = { book_name:this.book_name ,isbn:this.isbn,author:this.author,category:this.category, prize:this.prize};
         console.log(this.isbn)
         this.http.put(`http://127.0.0.1:5000/update/${isbn}`,body).subscribe(result=> {
    
       //  console.log(result)

     this.data=result

     //  console.log(this.datat)
 
      if(this.data){
 
        this.router.navigate(['/booklist'])
 
      
 
      }
 
   })
 
 
 
 }


}





