/* --- Angular Imports --- */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* --- Module Imports --- */
import { AppRoutingModule } from './app-routing.module';

/* --- Component Imports --- */
import { AppComponent } from './app.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { TokenInterceptors } from './interceptors/token.interceptors';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    SingUpComponent,
    LogInComponent,
    HomePageComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass: TokenInterceptors, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
