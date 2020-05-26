import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { PageNotFoundComponent } from './common-components/page-not-found/page-not-found.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryComponent,
    AccomplishmentsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
