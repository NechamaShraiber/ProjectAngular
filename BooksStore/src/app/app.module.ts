import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { AccountComponent } from './main/account/account.component';
import { ProductsComponent } from './main/products/products.component';
import { ProductDetailsComponent } from './main/product-details/product-details.component';
import { CartComponent } from './main/cart/cart.component';
<<<<<<< HEAD
import { LoginComponent } from './main/account/login/login.component';
import { RegisterComponent } from './main/account/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
=======
import { FooterComponent } from './footer/footer.component';

import { headerRouting } from './header/header.route';

>>>>>>> 05c6613fbebb4c001b8fe96b91508663d3ba78b8

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    AccountComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
=======
    headerRouting
>>>>>>> 05c6613fbebb4c001b8fe96b91508663d3ba78b8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





