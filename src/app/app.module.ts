import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
// import { MAT_MOMENT_DATE_ADAPTER_OPTIONS,MomentDateAdapter } from '@angular/material-moment-adapter';
import { AddmaterialComponent } from './addmaterial/addmaterial.component';
import { EditmaterialComponent } from './editmaterial/editmaterial.component';
import { AddoutlaytypeComponent } from './addoutlaytype/addoutlaytype.component';
import { EditoutlaytypeComponent } from './editoutlaytype/editoutlaytype.component';
import { AddoutlayComponent } from './addoutlay/addoutlay.component';
import { EditoutlayComponent } from './editoutlay/editoutlay.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UpdatematerialComponent } from './updatematerial/updatematerial.component';
import { UpdatoutlaytypeComponent } from './updatoutlaytype/updatoutlaytype.component';
import { UpdatoutlayComponent } from './updatoutlay/updatoutlay.component';
import { HomeComponent } from './home/home.component';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS,MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { UpdatuserComponent } from './updatuser/updatuser.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    AdduserComponent,
    EdituserComponent,
    AddmaterialComponent,
    EditmaterialComponent,
    AddoutlaytypeComponent,
    EditoutlaytypeComponent,
    AddoutlayComponent,
    EditoutlayComponent,
    UpdatematerialComponent,
    UpdatoutlaytypeComponent,
    UpdatoutlayComponent,
    HomeComponent,
    UpdatuserComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
      progressBar: true,
    }),
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [ {provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
