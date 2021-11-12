import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { LoginComponent } from './login/login.component';
import {FlavourComponent} from './flavour/flavour.component';
import {LogoutComponent} from './logout/logout.component';
import {HomeComponent} from './home/home.component';
import { ManufacturerEditComponent} from './manufacturer-edit/manufacturer-edit.component';
import {FlavourEditComponent} from './flavour-edit/flavour-edit.component';
import { AuthGuard} from './helpers/auth.guard';
import {MixComponent} from './desktop/mix/mix.component';
import {ManufacturerAddComponent} from './manufacturer-add/manufacturer-add.component';
import { FlavourAddComponent } from './flavour-add/flavour-add.component';
import {MixEditComponent} from './mix-edit/mix-edit.component';
import {MixAddComponent} from './mix-add/mix-add.component';
import {CompoundComponent} from './compound/compound.component';
import {CompoundDetailComponent} from './compound-detail/compound-detail.component';
import {MixDetailMobileComponent} from "./mobile/mix-detail-mobile/mix-detail-mobile.component";
import {FlavourDetailComponent} from "./flavour-detail/flavour-detail.component";
import {ManufacturerDetailComponent} from "./manufacturer-detail/manufacturer-detail.component";
import { HomeComponentMobile } from "./mobile/home/home.component.mobile";
import { ApplicationStateService } from "./_services/application-state.service";
import {MixMobileComponent} from "./mobile/mix-mobile/mix-mobile.component";
import { ManufacturerDesktopComponent } from "./desktop/manufacturer-desktop/manufacturer-desktop.component";
import {FlavourDesktopComponent} from "./desktop/flavour-desktop/flavour-desktop.component";
import {MixDetailDesctopComponent} from "./desktop/mix-detail/mix-detail.component";
import { FlavourDetailMobileComponent } from "./mobile/flavour-detail-mobile/flavour-detail-mobile.component";
import {ManufacturerDetailMobileComponent} from "./mobile/manufacturer-detail-mobile/manufacturer-detail-mobile.component";


const desktop_routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'manufacturers', component: ManufacturerDesktopComponent},
  { path: 'flavours', component: FlavourDesktopComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  { path: 'manufacturer/edit/:id', component: ManufacturerEditComponent, canActivate: [AuthGuard]},
  { path: 'manufacturer/detail/:id', component: ManufacturerDetailComponent},
  { path: 'flavour/edit/:id', component: FlavourEditComponent, canActivate: [AuthGuard]},
  { path: 'flavour/detail/:id', component: FlavourDetailComponent},
  { path: 'mix/edit/:id', component: MixEditComponent, canActivate: [AuthGuard]},
  { path: 'mix/detail/:id', component: MixDetailDesctopComponent},
  { path: 'mix', component: MixComponent},
  { path: 'manufacturer/add', component: ManufacturerAddComponent, canActivate: [AuthGuard]},
  { path: 'flavour/add', component: FlavourAddComponent, canActivate: [AuthGuard]},
  { path: 'mix/add', component: MixAddComponent, canActivate: [AuthGuard]},
  { path: 'mix/edit/:id/compound/add', component: CompoundComponent, canActivate: [AuthGuard]},
  { path: 'compound/edit/:id', component: CompoundDetailComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''}
];

const mobile_routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponentMobile},
  { path: 'manufacturers', component: ManufacturerComponent},
  { path: 'flavours', component: FlavourComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  { path: 'manufacturer/edit/:id', component: ManufacturerEditComponent, canActivate: [AuthGuard]},
  { path: 'manufacturer/detail/:id', component: ManufacturerDetailMobileComponent},
  { path: 'flavour/edit/:id', component: FlavourEditComponent, canActivate: [AuthGuard]},
  { path: 'flavour/detail/:id', component: FlavourDetailMobileComponent},
  { path: 'mix/edit/:id', component: MixEditComponent, canActivate: [AuthGuard]},
  { path: 'mix/detail/:id', component: MixDetailMobileComponent},
  { path: 'mix', component: MixMobileComponent},
  { path: 'manufacturer/add', component: ManufacturerAddComponent, canActivate: [AuthGuard]},
  { path: 'flavour/add', component: FlavourAddComponent, canActivate: [AuthGuard]},
  { path: 'mix/add', component: MixAddComponent, canActivate: [AuthGuard]},
  { path: 'mix/edit/:id/compound/add', component: CompoundComponent, canActivate: [AuthGuard]},
  { path: 'compound/edit/:id', component: CompoundDetailComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(desktop_routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

  public constructor(private router: Router,
    private applicationStateService: ApplicationStateService) {

    if (applicationStateService.getIsMobileResolution()) {
      router.resetConfig(mobile_routes);
    }
  }
}

