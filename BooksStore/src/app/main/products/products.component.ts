import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
books:any[]=[];
  constructor(private bookService:BooksService, private userService:UserService) {
    this.books=this.bookService.getAllBooks();
  
   }

  ngOnInit() { 
  
  }
  onKeyUp(event) {
      
     this.books=this.bookService.getBooks(event.target.value);
  }
  f(){
    this.books[0].forEach(r=>{r.volumeInfo.imageLinks="../../../../assets/Images/StoreImg.jpg"})
  }
  try(){
    this.userService.try();
  }
}
