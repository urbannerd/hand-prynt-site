import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarPageComponent } from './navbar-page/navbar-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VideosComponent } from './videos/videos/videos.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { SubmitterService } from './submitter.service';


const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'blogs', component: BlogsComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarPageComponent,
    HomePageComponent,
    VideosComponent,
    BlogsComponent,
    ContactusComponent,
    AboutusComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [SubmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
