import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaperComponent } from './paper/paper.component';
import { ReadingsComponent } from './readings/readings.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    CalendarComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    PaperComponent,
    ReadingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
