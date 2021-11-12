import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ManufacturerEditComponent } from './manufacturer-edit/manufacturer-edit.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { UserService} from './_services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor} from './helpers/auth.interceptor';
import { ErrorInterceptor} from './helpers/error.interceptor';
import { FlavourComponent } from './flavour/flavour.component';
import { LogoutComponent } from './logout/logout.component';
import { FlavourEditComponent } from './flavour-edit/flavour-edit.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MixComponent } from './desktop/mix/mix.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ManufacturerAddComponent } from './manufacturer-add/manufacturer-add.component';
import { FlavourAddComponent } from './flavour-add/flavour-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortableDirective } from './sortable.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule} from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatListModule} from '@angular/material/list';
import { MatDialogModule} from '@angular/material/dialog';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatOptionModule} from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { MatBadgeModule} from '@angular/material/badge';
import { MixEditComponent } from './mix-edit/mix-edit.component';
import { MixAddComponent } from './mix-add/mix-add.component';
import { MatChipsModule} from '@angular/material/chips';
import { CompoundComponent } from './compound/compound.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CompoundDetailComponent } from './compound-detail/compound-detail.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from './desktop/header/header.component';
import {BarRatingModule} from 'ngx-bar-rating';
import { ManufacturerDetailComponent } from './manufacturer-detail/manufacturer-detail.component';
import { FlavourDetailComponent } from './flavour-detail/flavour-detail.component';
import { MixDetailMobileComponent } from './mobile/mix-detail-mobile/mix-detail-mobile.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {GoogleChartsModule} from "angular-google-charts";
import {HomeComponentMobile} from "./mobile/home/home.component.mobile";
import {ApplicationStateService} from "./_services/application-state.service";
import { HeaderMobileComponent } from './mobile/header-mobile/header-mobile.component';
import {MatMenuModule} from "@angular/material/menu";
import { MixMobileComponent } from './mobile/mix-mobile/mix-mobile.component';
import { ManufacturerDesktopComponent} from "./desktop/manufacturer-desktop/manufacturer-desktop.component";
import { FlavourDesktopComponent } from "./desktop/flavour-desktop/flavour-desktop.component";
import { MixDetailDesctopComponent } from "./desktop/mix-detail/mix-detail.component";
import { FlavourDetailMobileComponent } from "./mobile/flavour-detail-mobile/flavour-detail-mobile.component"
import {ManufacturerDetailMobileComponent} from "./mobile/manufacturer-detail-mobile/manufacturer-detail-mobile.component";

@NgModule({
  declarations: [
    AppComponent,
    ManufacturerComponent,
    ManufacturerEditComponent,
    MessagesComponent,
    LoginComponent,
    FlavourComponent,
    LogoutComponent,
    FlavourEditComponent,
    HomeComponent,
    MixComponent,
    ManufacturerAddComponent,
    FlavourAddComponent,
    SortableDirective,
    MixEditComponent,
    MixAddComponent,
    CompoundComponent,
    CompoundDetailComponent,
    HeaderComponent,
    ManufacturerDetailComponent,
    FlavourDetailComponent,
    MixDetailMobileComponent,
    HomeComponentMobile,
    HeaderMobileComponent,
    MixMobileComponent,
    ManufacturerDesktopComponent,
    FlavourDesktopComponent,
    MixDetailDesctopComponent,
    FlavourDetailMobileComponent,
    ManufacturerDetailMobileComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatBadgeModule,
    MatChipsModule,
    MatSliderModule,
    MatTreeModule,
    MatSnackBarModule,
    MatRadioModule,
    MatGridListModule,
    BarRatingModule,
    MDBBootstrapModule.forRoot(),
    GoogleChartsModule,
    MatMenuModule
  ],

  providers: [
    UserService, {provide : HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, ApplicationStateService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
