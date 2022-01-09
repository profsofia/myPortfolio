import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PracticesComponent } from './components/practices/practices.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
const routes: Routes = [
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'practices', component: PracticesComponent },
  { path: 'about-me', component: AboutMeComponent},
  { path:'', redirectTo:'about-me', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AboutMeComponent,
    PracticesComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
