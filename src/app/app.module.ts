



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';// whp must add for two binding ngModel
import { AppComponent } from './app.component';

//import { StrDirectiveComponent } from './str-directive/str-directive.component';
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { FormsModule} from '@angular/forms';
//import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@NgModule({
  imports:      [ BrowserModule, FormsModule,CommonModule ], //< added FormsModule here
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],

// imports: [
//   BrowserModule,
//   FormsModule
// ],
//  providers: []
// bootstrap: [AppComponent]

//@NgModule({
//  declarations: [
//  [BrowserModule, AppComponent],
//  FormsModule
//     StrDirectiveComponent
//  ],
//  imports: [
//    BrowserModule,
//    FormsModule              //whp must add for two way binding ngModel
//  ],
//  providers: [],
// bootstrap: [AppComponent]
 //bootstrap: [StrDirectiveComponent]
})
export class AppModule { }





// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
