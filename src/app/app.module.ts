import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpRequestInterceptor } from './token-interceptor';



@NgModule({
  declarations:
    [
      AppComponent,
      LoginComponent,
      RegisterComponent,



    ],
  imports:
    [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,

    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true


    }],
  bootstrap: [AppComponent]

})
export class AppModule { }
