import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AuthModule } from './@modules/auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './@components/footer/footer.component';
import { HeaderComponent } from './@components/header/header.component';

import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NgbModule,
    RouterModule,RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
