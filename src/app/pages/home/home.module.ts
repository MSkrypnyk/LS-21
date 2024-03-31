import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeBeansComponent } from './coffee-beans/coffee-beans.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    HomeFormComponent,
    CoffeeComponent,
    CoffeeBeansComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
