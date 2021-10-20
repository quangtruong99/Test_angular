import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { TableModule } from '../shared/components/table/table.module';


@NgModule({
  declarations: [
    ListUserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TableModule
  ]
})
export class UserModule { }
