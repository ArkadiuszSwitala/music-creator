import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { LatestComponent } from './latest/latest.component';
import { LiveSessionComponent } from './live-session/live-session.component';
import { ContactComponent } from './contact/contact.component';
import { FooterPlayerComponent } from './footer-player/footer-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    CategoriesComponent,
    LatestComponent,
    LiveSessionComponent,
    ContactComponent,
    FooterPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
