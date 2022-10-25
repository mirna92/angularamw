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
const routes: Routes = [
   { path: 'login', component: LoginComponent },
  {path:'home',component:HomeComponent},
  {path:'home/adduser',component:AdduserComponent},
  {path:'home/edituser',component:EdituserComponent},
  {path:'home/addmaterial',component:AddmaterialComponent},
  {path:'home/editmaterial',component:EditmaterialComponent},
  {path:'home/updatematerial/:id',component:UpdatematerialComponent},
  {path:'home/addoutlaytype',component:AddoutlaytypeComponent},
  {path:'home/editoutlaytype',component:EditoutlaytypeComponent},
  {path:'home/updateoutlaytype/:id',component:UpdatoutlaytypeComponent},
  {path:'home/addoutlay',component:AddoutlayComponent},
  {path:'home/editoutlay/:id',component:EditoutlayComponent},
  {path:'home/updateoutlay/:id',component:UpdatoutlayComponent},
  {path:'home/updateuser/:id',component:UpdatuserComponent},
  {path:'home/delete',component:EdituserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
