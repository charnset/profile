import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { EducationComponent } from './components/education/education.component';
import { NewsComponent } from './components/news/news.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { MiscComponent } from './components/misc/misc.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    AboutMeComponent,
    EducationComponent,
    NewsComponent,
    ExperienceComponent,
    PublicationsComponent,
    MiscComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
