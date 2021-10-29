import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {HOME} from "@angular/cdk/keycodes";
import { HomeComponent } from './components/home/home.component';
import { EmpsComponent } from './components/emps/emps.component';
import { DeptsComponent } from './components/depts/depts.component';
import { PhonesComponent } from './components/phones/phones.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'depts', component: DeptsComponent},
  {path:'emps', component: EmpsComponent},
  {path:'phones', component: PhonesComponent},
  {path:'**', component: NotfoundComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeptsComponent,
    EmpsComponent,
    PhonesComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
