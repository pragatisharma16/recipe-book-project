import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenImageComponent } from './open-image/open-image.component';
import { RoutingserviceService } from './routingservice.service';
import { HttpClientModule }    from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OpenImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ReactiveFormsModule,RoutingserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class ViewsModule {}
