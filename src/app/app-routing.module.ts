import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'user', loadChildren:() => import('./user/user.module').then(mod=>mod.UserModule)},
  {path:'product', loadChildren:() => import('./product/product.module').then(mod=>mod.ProductModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
