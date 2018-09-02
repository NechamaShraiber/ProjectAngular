import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from '../main/cart/cart.component';
import { ProductsComponent } from '../main/products/products.component';
import { AccountComponent } from '../main/account/account.component';
import { HomeComponent } from '../main/home/home.component';

//  import { AuthGuard } from './shared/auth.guard';//vhjhvjvj
const headerRoutes: Routes = [
    //  { path: 'AuthRout/home', component: AccountComponent, canActivate: [AuthGuard] },
    { path: 'BooksStore/home', component: HomeComponent },
    { path: 'BooksStore', redirectTo: 'BooksStore/home' },
    { path: 'BooksStore/cart', component: CartComponent },
    { path: 'BooksStore/products', component: ProductsComponent },
    { path: 'BooksStore/account', component: AccountComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'BooksStore' }
];
export const headerRouting = RouterModule.forRoot(headerRoutes);