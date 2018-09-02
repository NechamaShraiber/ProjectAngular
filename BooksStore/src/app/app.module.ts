import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
