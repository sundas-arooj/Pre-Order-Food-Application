import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { HomeComponent } from './home/home.component';
import { FinalComponent } from './final/final.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'cartpage',
    component: ShowCartComponent
  },
  {
    path:'menupage/:id',
    component:  MenuPageComponent
  },
  {
    path:'clientpage',
    component: ClientInfoComponent
  },
  {
    path:'finalpage',
    component: FinalComponent
  }
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
