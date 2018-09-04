







import { Injectable } from "@angular/core";
@Injectable()
export class CartService {
    cartList:any[]=[];
    constructor() {
        this.cartList=this.getCartListFromLocalStorage();
    }
    getCartListFromLocalStorage() {
        let list = localStorage.getItem("cart");
        return (list) ? JSON.parse(list) : [];
      }
   
    removeBookFromCart(book:any){
        let index=this.cartList.indexOf(book);
           this.cartList.splice(index,1);
            localStorage.setItem("cart", JSON.stringify(this.cartList));
    }
   
   getCartList()
   {
       return this.cartList;
   }
     
 addBookToCartList(book:any)
 {
    let currentList = this.getCartList();
    currentList.push(book);
    localStorage.setItem("cart", JSON.stringify(currentList));
 }
}














