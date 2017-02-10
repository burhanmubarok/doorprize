import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WinnerComponent } from './winner/winner.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShuffleComponent } from './shuffle/shuffle.component';
import { WinnersComponent } from './winners/winners.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shuffle', component: ShuffleComponent },
  { path: 'winner', component: WinnerComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: '*', component: HomeComponent },
  { path: '**', component: HomeComponent }
]

 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WinnerComponent,
    EmployeeComponent,
    ShuffleComponent,
    WinnersComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
