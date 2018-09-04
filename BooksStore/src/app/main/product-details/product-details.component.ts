import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  isAnonymous:boolean=false;
<<<<<<< HEAD
  constructor(private route: ActivatedRoute, private router: Router,private userService:UserService) { 
    if(localStorage["user"]){
      this.isAnonymous=true;
    }
  }
  book: any;
=======
  constructor(private route: ActivatedRoute, private router:Router , private userService:UserService) {
    if (localStorage["user"])
    this.isAnonymous = true;
  this.userService.subAnonymous.subscribe(
    {

      next: (b: boolean) => 
        this.isAnonymous = b
 
    }
  );
   }
  book: any;

  
>>>>>>> 9bd15b9ff864ef39118d4e494e232fa8a9b64827
  ngOnInit() {
    this.route.params.forEach(p => {
      this.book = p;
    })
  }
  addCart() {
    let currentList = this.getCurrentList();
    currentList.push(this.book);
    localStorage.setItem("cart", JSON.stringify(currentList));
    this.returnProduct();

  }
  returnProduct() {
    this.router.navigate(['BooksStore/products']);
  }
  getCurrentList() {
    let list = localStorage.getItem("cart");
    return (list) ? JSON.parse(list) : [];
  }
}
<<<<<<< HEAD
=======
}
>>>>>>> 9bd15b9ff864ef39118d4e494e232fa8a9b64827
