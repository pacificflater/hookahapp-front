import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { LoginComponent } from './login/login.component';
import {FlavoursComponent} from './flavours/flavours.component';
import {LogoutComponent} from './logout/logout.component';
import {HomeComponent} from './home/home.component';
import { ManufacturerDetailComponent} from './manufacturer-detail/manufacturer-detail.component';
import {FlavourDetailComponent} from './flavour-detail/flavour-detail.component';
import { AuthGuard} from './helpers/auth.guard';
import {MixesComponent} from './mixes/mixes.component';
import {ManufacturerAddComponent} from './manufacturer-add/manufacturer-add.component';
import { FlavourAddComponent } from './flavour-add/flavour-add.component';
import {MixDetailComponent} from './mix-detail/mix-detail.component';
import {MixAddComponent} from './mix-add/mix-add.component';
import {CompoundComponent} from './compound/compound.component';
import {CompoundDetailComponent} from './compound-detail/compound-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'manufacturers', component: ManufacturersComponent},
  { path: 'flavours', component: FlavoursComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  { path: 'manufacturers/detail/:id', component: ManufacturerDetailComponent, canActivate: [AuthGuard]},
  { path: 'flavours/detail/:id', component: FlavourDetailComponent, canActivate: [AuthGuard]},
  { path: 'mix/detail/:id', component: MixDetailComponent, canActivate: [AuthGuard]},
  { path: 'mix', component: MixesComponent},
  { path: 'manufacturers/add', component: ManufacturerAddComponent, canActivate: [AuthGuard]},
  { path: 'flavours/add', component: FlavourAddComponent, canActivate: [AuthGuard]},
  { path: 'mix/add', component: MixAddComponent, canActivate: [AuthGuard]},
  { path: 'mix/detail/:id/compound/add', component: CompoundComponent, canActivate: [AuthGuard]},
  { path: 'compound/detail/:id', component: CompoundDetailComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

