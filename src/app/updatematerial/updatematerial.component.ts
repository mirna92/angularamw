import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-updatematerial',
  templateUrl: './updatematerial.component.html',
  styleUrls: ['./updatematerial.component.css']
})
export class UpdatematerialComponent implements OnInit {
   id!: string;
  public form: FormGroup;
loading=false;
activeRequests:any[] = [];
  constructor(  private router: Router,private route: ActivatedRoute,private http: HttpClient, private usersService: UsersService,private toaster: ToastrService,private fb: FormBuilder) {
    this.form = this.fb.group({
      nameFormControl: new FormControl(null, [Validators.required]),
      isServiceFormControl: new FormControl(null, [Validators.required]),
      descriptionFormControl: new FormControl('',[Validators.required])
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

      const tempReqs = await this.usersService.getallmaterial();
      console.log(tempReqs);
      this.activeRequests = tempReqs?.data || [];
    console.log("this.activeRequests");
    console.log(this.activeRequests);
    // console.log(this.id);
    this.form.controls['nameFormControl'].setValue(this.activeRequests.find(a=>a.id==this.id).name);
    this.form.controls['isServiceFormControl'].setValue(this.activeRequests.find(a=>a.id==this.id).isService);
    this.form.controls['descriptionFormControl'].setValue(this.activeRequests.find(a=>a.id==this.id).description);
    // console.log(this.activeRequests.find(a=>a.id=this.id));
  }
    
      catch(error){
        this.toaster.error("انتهت صلاحيةالجلسة الخاصة بك، يرجى تسجيل الدخول ")
      }
    };
  submit = async () => {
    this.loading=true;
    try {
      await this.usersService.editmaterial(this.id,this.form.value.nameFormControl, this.form.value.isServiceFormControl,this.form.value.descriptionFormControl);
     
    } catch (error) {
      console.log(error);
    }
    finally{
      this.loading=false;
    }
  }
}
