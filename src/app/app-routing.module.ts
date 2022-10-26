import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AddmaterialComponent } from './addmaterial/addmaterial.component';
import { EditmaterialComponent } from './editmaterial/editmaterial.component';
import { AddoutlaytypeComponent } from './addoutlaytype/addoutlaytype.component';
import { EditoutlaytypeComponent } from './editoutlaytype/editoutlaytype.component';
import { AddoutlayComponent } from './addoutlay/addoutlay.component';
import { EditoutlayComponent } from './editoutlay/editoutlay.component';
import { UpdatematerialComponent } from './updatematerial/updatematerial.component';
import { HomeComponent } from './home/home.component';
import { UpdatoutlaytypeComponent } from './updatoutlaytype/updatoutlaytype.component';
import { UpdatoutlayComponent } from './updatoutlay/updatoutlay.component';
import { UpdatuserComponent } from './updatuser/updatuser.component';
import { AuthGuard } from './auth.guard';
import { ReportsComponent } from './reports/reports.component';
const routes: Routes = [
   { path: 'login', component: LoginComponent },
  {path:'home',component:HomeComponent},
  {path:'home/adduser',component:AdduserComponent , canActivate: [AuthGuard]},
  {path:'home/edituser',component:EdituserComponent,canActivate: [AuthGuard]},
  {path:'home/updateuser/:id',component:UpdatuserComponent,canActivate: [AuthGuard]},
  {path:'home/addmaterial',component:AddmaterialComponent,canActivate: [AuthGuard]},
  {path:'home/editmaterial',component:EditmaterialComponent,canActivate: [AuthGuard]},
  {path:'home/updatematerial/:id',component:UpdatematerialComponent,canActivate: [AuthGuard]},
  {path:'home/addoutlaytype',component:AddoutlaytypeComponent,canActivate: [AuthGuard]},
  {path:'home/editoutlaytype',component:EditoutlaytypeComponent,canActivate: [AuthGuard]},
  {path:'home/updateoutlaytype/:id',component:UpdatoutlaytypeComponent,canActivate: [AuthGuard]},
  {path:'home/addoutlay',component:AddoutlayComponent},
  {path:'home/editoutlay/:id',component:EditoutlayComponent},
  {path:'home/updateoutlay/:id',component:UpdatoutlayComponent},
  {path:'home/report/:id',component:ReportsComponent, canActivate: [AuthGuard]},
  {path:'home/report/',component:ReportsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
