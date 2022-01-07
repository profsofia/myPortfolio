import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PracticesComponent } from './components/practices/practices.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routing
const appRoutes: Routes = [
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'practices',      component: PracticesComponent },
  {
    path: 'about-me', component: AboutMeComponent, data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
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
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
