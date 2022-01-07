import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PracticesComponent } from './components/practices/practices.component';

const routes: Routes = [
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'practices',      component: PracticesComponent },
  {
    path: 'about-me', component: AboutMeComponent, data: { title: 'Heroes List' }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
