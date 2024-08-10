import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component'; 
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { SupportComponent } from './components/support/support.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [

    {path:'signup',component:SignupComponent,title:'signup'},
    {path:'about',component:AboutComponent,title:'about'},
    {path:'products',component:ProductsComponent,title:'products'},
    {path:'pricing',component:PricingComponent,title:'pricing'},
    {path:'',component:HomeComponent,title:'home'},
    {path:'support',component:SupportComponent,title:'support'},
];
