import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  public data:any=""
  public book:any=""
  
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
  delete(isbn:any){

    alert(`Are you sure you want to delete isbn ${isbn}`)

   

      this.http.delete(`http://127.0.0.1:5000/delete/${isbn}`).subscribe(result=>{

        console.log(result)

          this.data=result;

        console.log(this.data)


  
  })
}
}