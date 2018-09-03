import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router:Router) { }
  book: any;
  s: any;
  ngOnInit() {
    //console.log(this.route.params["book"]);
    this.route.params.forEach(p => {
this.book=p;
    })
  }
  addCart() {
    let currentList = this.getCurrentList();
    currentList.push(this.book);
    localStorage.setItem("cart", JSON.stringify(currentList));
    
  }
  returnProduct() {
    this.router.navigate(['BooksStore/products']);
  }
   getCurrentList() {
    let list = localStorage.getItem("cart");  
    return (list) ? JSON.parse(list) : [];
}
}




/*








function clearAllData() {
    localStorage.clear();
    showCurrentList();
}
*/