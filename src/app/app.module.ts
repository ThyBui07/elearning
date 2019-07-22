import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { CourseListComponent } from './views/course-list/course-list.component';

//services
import { HttpClientModule } from '@angular/common/http';
// import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignInComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    // NgwWowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
