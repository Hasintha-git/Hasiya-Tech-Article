import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import { LandPageComponent } from './template/land-page/land-page.component';
import { NavbarComponent } from './template/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: ':nav',
    component: NavbarComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
