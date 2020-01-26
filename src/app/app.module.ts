import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    // SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers:
    [
      AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
