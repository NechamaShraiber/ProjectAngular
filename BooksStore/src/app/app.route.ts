import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './main/cart/cart.component';
import { ProductsComponent } from './main/products/products.component';
import { AccountComponent } from './main/account/account.component';
import { HomeComponent } from './main/home/home.component';
import { RegisterComponent } from './main/account/register/register.component';
import { LoginComponent } from './main/account/login/login.component';
import { ProductDetailsComponent } from './main/product-details/product-details.component';
import { ProductPreviewComponent } from './main/products/product-preview/product-preview.component';

//  import { AuthGuard } from './shared/auth.guard';//vhjhvjvj
const headerRoutes: Routes = [
    //  { path: 'AuthRout/home', component: AccountComponent, canActivate: [AuthGuard] },
    { path: 'BooksStore/home', component: HomeComponent, },
    { path: 'BooksStore', redirectTo: 'BooksStore/home' },
    { path: 'BooksStore/cart', component: CartComponent },
    { path: 'BooksStore/products', component: ProductsComponent },
    {
        path: 'BooksStore/account', component: AccountComponent, children: [
            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent },
             {path:'logout',component:LoginComponent}

        ]
    },
    { path: 'BooksStore/productsDeatails', component: ProductDetailsComponent },
    
   // { path: 'BooksStore/productsPreview', component: ProductPreviewComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'BooksStore/home' },
    
    
];
export const headerRouting = RouterModule.forRoot(headerRoutes);