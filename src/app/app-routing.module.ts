import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './component/users/login/login.component';
import { ListShoesComponent } from './component/admin/list-shoes/list-shoes.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsShoesComponent } from './component/details-shoes/details-shoes.component';
import { RegisterComponent } from './component/users/register/register.component';
import { ProfileComponent } from './component/users/profile/profile.component';
import { Page404Component } from './component/page404/page404.component';
import { OffersComponent } from './component/offers/offers.component';

const routes: Routes = [
  {path: '',component: HomeComponent}, 
  {path: 'shoes/:id', component: DetailsShoesComponent },
  {path: 'offers', component: OffersComponent, canActivate: [AuthGuard]},
  {path: 'admin/list-shoes', component: ListShoesComponent, canActivate: [AuthGuard]},//TODO: only user auth
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard]},//TODO: only user auth
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
