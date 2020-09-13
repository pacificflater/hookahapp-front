import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { ManufacturerDetailComponent } from './manufacturer-detail/manufacturer-detail.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { UserService} from './_services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor} from './helpers/auth.interceptor';
import { ErrorInterceptor} from './helpers/error.interceptor';
import { FlavoursComponent } from './flavours/flavours.component';
import { LogoutComponent } from './logout/logout.component';
import { FlavourDetailComponent } from './flavour-detail/flavour-detail.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MixesComponent } from './mixes/mixes.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ManufacturerAddComponent } from './manufacturer-add/manufacturer-add.component';
import { FlavourAddComponent } from './flavour-add/flavour-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManufacturerSearchComponent } from './manufacturer-search/manufacturer-search.component';
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
import { MixDetailComponent } from './mix-detail/mix-detail.component';
import { MixAddComponent } from './mix-add/mix-add.component';
import { MatChipsModule} from '@angular/material/chips';
import { CompoundComponent } from './compound/compound.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CompoundDetailComponent } from './compound-detail/compound-detail.component';
import {MatRadioModule} from '@angular/material/radio';
import { AgGridModule } from 'ag-grid-angular';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
import {BarRatingModule} from 'ngx-bar-rating';

@NgModule({
  declarations: [
    AppComponent,
    ManufacturersComponent,
    ManufacturerDetailComponent,
    MessagesComponent,
    LoginComponent,
    FlavoursComponent,
    LogoutComponent,
    FlavourDetailComponent,
    HomeComponent,
    MixesComponent,
    ManufacturerAddComponent,
    FlavourAddComponent,
    ManufacturerSearchComponent,
    SortableDirective,
    MixDetailComponent,
    MixAddComponent,
    CompoundComponent,
    CompoundDetailComponent,
    HeaderComponent,
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
    AgGridModule.withComponents([]),
    MatGridListModule,
    BarRatingModule
  ],

  providers: [
    UserService, {provide : HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
