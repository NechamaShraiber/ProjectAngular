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

import { UserService } from './shared/services/user.service';
import { LoginComponent } from './main/account/login/login.component';
import { RegisterComponent } from './main/account/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { headerRouting } from './header/header.route';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './shared/services/books.service';
import { ProductPreviewComponent } from './main/products/product-preview/product-preview.component';


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
    RegisterComponent,
    ProductPreviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    headerRouting,
    HttpClientModule

  ],
  providers: [
    UserService, BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





