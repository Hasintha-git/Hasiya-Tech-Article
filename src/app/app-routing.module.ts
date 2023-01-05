import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/default/blog/blog.component';
import { DefaultComponent } from './pages/default/default.component';
import { DefaultModule } from './pages/default/default.module';
import { LandPageComponent } from './pages/default/template/land-page/land-page.component';

const routes: Routes = [
  {
    path: 'default',
    loadChildren: () => DefaultModule,
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
