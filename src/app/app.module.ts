import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    HttpClientModule,
    CarouselModule,
    ScrollToModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNqxnLlaaaZwk7awb2R0rZpLojbG6Pi40'
    }),
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
