import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
books:any[]=[];
  constructor(private bookService:BooksService) { }

  ngOnInit() {
  }
  onKeyUp(event) {
     this.books=this.bookService.getBooks(event.target.value);
     setTimeout(()=>{
       console.log( this.books)
      console.log(this.books[0][0]["volumeInfo"]["title"]);
    },1000);
 
    // this.vvv();
  }
  // vvv()
  // {
  //   setTimeout(()=>
  //   console.log(this.books)
  //   ,3000
  //   )
    
    
  // }
}
