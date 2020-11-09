import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { LoginComponent } from './login/login.component';
import {FlavourComponent} from './flavour/flavour.component';
import {LogoutComponent} from './logout/logout.component';
import {HomeComponent} from './home/home.component';
import { ManufacturerEditComponent} from './manufacturer-edit/manufacturer-edit.component';
import {FlavourEditComponent} from './flavour-edit/flavour-edit.component';
import { AuthGuard} from './helpers/auth.guard';
import {MixComponent} from './mix/mix.component';
import {ManufacturerAddComponent} from './manufacturer-add/manufacturer-add.component';
import { FlavourAddComponent } from './flavour-add/flavour-add.component';
import {MixEditComponent} from './mix-edit/mix-edit.component';
import {MixAddComponent} from './mix-add/mix-add.component';
import {CompoundComponent} from './compound/compound.component';
import {CompoundDetailComponent} from './compound-detail/compound-detail.component';
import {MixDetailComponent} from "./mix-detail/mix-detail.component";
import {FlavourDetailComponent} from "./flavour-detail/flavour-detail.component";
import {ManufacturerDetailComponent} from "./manufacturer-detail/manufacturer-detail.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'manufacturers', component: ManufacturerComponent},
  { path: 'flavours', component: FlavourComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  { path: 'manufacturer/edit/:id', component: ManufacturerEditComponent, canActivate: [AuthGuard]},
  { path: 'manufacturer/detail/:id', component: ManufacturerDetailComponent},
  { path: 'flavour/edit/:id', component: FlavourEditComponent, canActivate: [AuthGuard]},
  { path: 'flavour/detail/:id', component: FlavourDetailComponent},
  { path: 'mix/edit/:id', component: MixEditComponent, canActivate: [AuthGuard]},
  { path: 'mix/detail/:id', component: MixDetailComponent},
  { path: 'mix', component: MixComponent},
  { path: 'manufacturer/add', component: ManufacturerAddComponent, canActivate: [AuthGuard]},
  { path: 'flavour/add', component: FlavourAddComponent, canActivate: [AuthGuard]},
  { path: 'mix/add', component: MixAddComponent, canActivate: [AuthGuard]},
  { path: 'mix/edit/:id/compound/add', component: CompoundComponent, canActivate: [AuthGuard]},
  { path: 'compound/edit/:id', component: CompoundDetailComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

