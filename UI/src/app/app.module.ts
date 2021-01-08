import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { UtilityService } from './common/utility.service';

import { AppComponent } from './app.component';
import { AuthTokenInterceptor } from './common/intercepter/httpinterceptor';
import { ErrorInterceptor } from './common/intercepter/errorInterceptor';
import { NavComponent } from './common/component/nav/nav.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './common/component/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlarmComponent } from './components/dashboard/alarm/alarm.component';
import { AlarmFormComponent } from './components/dashboard/alarm/alarm-form/alarm-form.component';

import { AlarmService } from './service/alarm.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    ForgotComponent,
    RegisterComponent,
    DashboardComponent,
    AlarmComponent,
    AlarmFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents(null),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UtilityService,
    AlarmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
