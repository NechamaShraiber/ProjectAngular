import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private bookService:BooksService) { }

  ngOnInit() {
  }
  onKeyUp(event) {
 console.log(this.bookService.getBooks(event.target.value)) ;
  }
}
