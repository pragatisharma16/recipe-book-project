import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenComponent } from './men/men.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ViewImageComponent } from './view-image/view-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenComponent,
    ShopComponent,
    ShoppingItemComponent,
    ViewImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
