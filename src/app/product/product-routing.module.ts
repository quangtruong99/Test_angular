import { DetailComponent } from './detail/detail.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'list-product', component:ListProductComponent},
  {path:'detail', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
