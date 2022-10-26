import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { UsersService } from '../services/users.service';
import { objectify } from '../utils/function';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  displayedColumns1: string[] = ['material_name', 'outlay_name','price','date',];
  displayedColumns2: string[] = ['material_name', 'outlay_name','price','user_name'];
  activeRequests:any[] = [];
  id:any;
  loading = false;
  filtereduser: any[] = [];
  users: any[]=[];
  public form: FormGroup;
  constructor( private route: ActivatedRoute,private router: Router,private http: HttpClient, private usersService: UsersService,private toaster: ToastrService,private fb: FormBuilder) { 
    this.form = this.fb.group({
      userFormControl: new FormControl('', [Validators.required])
    });
  }

  async ngOnInit() {
    try{
      const tempReqs = await this.usersService.getalluser();
      this.users = tempReqs?.data || [];
      this.filtereduser = objectify(this.users|| []);
      console.log(this.filtereduser)
    }
    catch(error){ this.toaster.error("انتهت صلاحيةالجلسة الخاصة بك، يرجى تسجيل الدخول ")};

    this.route.params
    .pipe(
      take(1)
      //     pluck('processId')
    ).subscribe(this.getActiveProcesses);
  }
  getActiveProcesses = async (params:any) => {
    this.id=params.id;
    console.log(this.id)
    if(this.id==1){
      try {

        const tempReqs = await this.usersService.getreport1();
        console.log(tempReqs);
        this.activeRequests = tempReqs?.data || [];
      console.log(this.activeRequests);}
        catch(error){
          this.toaster.error("انتهت صلاحيةالجلسة الخاصة بك، يرجى تسجيل الدخول ")
        }
    }
    // else if(this.id==2){
    //   try {

    //     const tempReqs = await this.usersService.getreport2(this.form.value.userFormControl);
    //     console.log(tempReqs);
    //     this.activeRequests = tempReqs?.data || [];
    //   console.log(this.activeRequests);}
    //     catch(error){
    //       this.toaster.error("انتهت صلاحيةالجلسة الخاصة بك، يرجى تسجيل الدخول ")
    //     }
    // }
    
    };
getUser=async () => {
  try {

    const tempReqs = await this.usersService.getreport2(this.form.value.userFormControl);
    console.log(tempReqs);
    this.activeRequests = tempReqs?.data || [];
    this.loading=true;
  console.log(this.activeRequests);}
    catch(error){
      this.toaster.error("انتهت صلاحيةالجلسة الخاصة بك، يرجى تسجيل الدخول ")
    }



}
}
