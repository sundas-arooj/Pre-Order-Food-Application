import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { HomeComponent } from './home/home.component';
import { PreorderService } from './preorder.service';

import { Globals } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    ShowCartComponent,
    MenuPageComponent,
    ClientInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [PreorderService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
