import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'blog-page', component: BlogPageComponent},
  { path: 'video-page', component: VideoPageComponent},
  { path: 'contact-us-page', component: ContactUsPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarPageComponent,
    BlogPageComponent,
    VideoPageComponent,
    ContactUsPageComponent,
    NavbarPageComponent,
    HomePageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
