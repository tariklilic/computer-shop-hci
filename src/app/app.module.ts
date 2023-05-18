import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselItemComponent } from './homepage/carousel-item/carousel-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ResponsiveCarouselComponent } from './homepage/responsive-carousel/responsive-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ItemComponent } from './homepage/item/item.component';
import { PaginationComponent } from './homepage/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AboutusComponent,
    FaqComponent,
    HomepageComponent,
    CarouselItemComponent,
    ResponsiveCarouselComponent,
    ItemComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
