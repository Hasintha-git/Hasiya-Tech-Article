import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/default/blog/blog.component';
import { BlogModule } from './pages/default/blog/blog.module';
import { DefaultComponent } from './pages/default/default.component';
import { DefaultModule } from './pages/default/default.module';
import { LandPageComponent } from './pages/default/template/land-page/land-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LandPageComponent},
  {
    path: 'main',
    children: [
      {
        path: 'test',
        loadChildren: () => import('./pages/default/default.module').then(m => m.DefaultModule)
      }
    ]
  },

  {path: '**', redirectTo: 'login'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
