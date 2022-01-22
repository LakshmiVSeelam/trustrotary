import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProgramsComponent } from './programs/programs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutSectionComponent } from './shared/about-section/about-section.component';
import { CauseSectionComponent } from './shared/cause-section/cause-section.component';
import { ServiceSectionComponent } from './shared/service-section/service-section.component';
import { MissionSectionComponent } from './shared/mission-section/mission-section.component';
import { EventSectionComponent } from './shared/event-section/event-section.component';
import { GallerySectionComponent } from './shared/gallery-section/gallery-section.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ProgramComponent } from './shared/program/program.component';
import { TeamComponent } from './shared/team/team.component';

import { HttpClientModule } from '@angular/common/http';
import { AchievementsComponent } from './achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProgramsComponent,
    GalleryComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AboutSectionComponent,
    CauseSectionComponent,
    ServiceSectionComponent,
    MissionSectionComponent,
    EventSectionComponent,
    GallerySectionComponent,
    BannerComponent,
    ProgramComponent,
    TeamComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
