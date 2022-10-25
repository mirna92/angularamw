import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-updatuser',
  templateUrl: './updatuser.component.html',
  styleUrls: ['./updatuser.component.css']
})
export class UpdatuserComponent implements OnInit {
  id!: string;
  public form: FormGroup;
loading=false;
activeRequests:any[] = [];
  constructor(  private router: Router,private route: ActivatedRoute,private http: HttpClient, private usersService: UsersService,private toaster: ToastrService,private fb: FormBuilder) {
    this.form = this.fb.group({
      nameFormControl: new FormControl(null, [Validators.required]),
      PasswordFormControl: new FormControl('',[Validators.required])
    });
   }
   
  async ngOnInit() {
    this.route.params
    .pipe(
      take(1)
      //     pluck('processId')
    ).subscribe(this.getActiveProcesses);
}


getActiveProcesses = async (params: any) => {
  this.id = params.id
  try {

    const tempReqs = await this.usersService.getalluser();
    console.log(tempReqs);
    console.log("tempReqs");
    this.activeRequests = tempReqs?.data || [];
  console.log(this.activeRequests);
  console.log(this.id);
  this.form.controls['nameFormControl'].setValue(this.activeRequests.find(a=>a.User_id==this.id).name);
  this.form.controls['PasswordFormControl'].setValue(this.activeRequests.find(a=>a.User_id==this.id).Password);
  console.log(this.activeRequests.find(a=>a.id=this.id));
}
  
    catch(error){
      this.toaster.error("انتهت صلاحيةالجلسة الخاصة بك، يرجى تسجيل الدخول ")
    }
  };
submit = async () => {
  this.loading=true;
  try {
    await this.usersService.edituser(this.id,this.form.value.nameFormControl,this.form.value.PasswordFormControl);
   
  } catch (error) {
    console.log(error);
  }
  finally{
    this.loading=false;
  }
}
}
