import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { UsersService } from '../services/users.service';
import { objectify ,getCorrectDateFormat} from '../utils/function';
@Component({
  selector: 'app-updatoutlay',
  templateUrl: './updatoutlay.component.html',
  styleUrls: ['./updatoutlay.component.css']
})
export class UpdatoutlayComponent implements OnInit {
  id!: string;
  public form: FormGroup;
  material_name:any;
  outlay_name:any;
loading=false;
filteredmaterial: any[] = [];
material: any[]=[];
filteredoutlaytype: any[] = [];
outlaytype: any[]=[];
activeRequests:any[] = [];
  constructor(  private router: Router,private route: ActivatedRoute,private http: HttpClient, private usersService: UsersService,private toaster: ToastrService,private fb: FormBuilder) {
    this.form = this.fb.group({
      materialFormControl: new FormControl('', [Validators.required]),
      outlaytypeFormControl: new FormControl('',[Validators.required]),
      descriptionFormControl: new FormControl('',[Validators.required]),
      priceFormControl: new FormControl('', [Validators.required]),
      DateFormControl:new FormControl('', [Validators.required])
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
        const tempReqs1 = await this.usersService.getallmaterial();
        this.material = tempReqs1?.data || [];
        console.log(this.material);
        console.log("this.material");
        this.filteredmaterial = objectify(this.material || []);
  
  
        const tempReqs2 = await this.usersService.getalloutlaytype();
        this.outlaytype = tempReqs2?.data || [];
        console.log(this.outlaytype);
        console.log("this.outlaytype");
        this.filteredoutlaytype = objectify(this.outlaytype || []);
        
       const tempReqs = await this.usersService.getalloutlay();
      this.activeRequests = tempReqs?.data || [];
       this.material_name=this.activeRequests.find(a=>a.id==this.id).material_name;
       this.outlay_name=this.activeRequests.find(a=>a.id==this.id).outlay_name;
    console.log(this.activeRequests); 
    console.log("this.activeRequests");
    console.log(this.id);
    console.log(this.outlay_name);
    console.log(this.material_name);
    this.form.controls['materialFormControl'].setValue(this.material.find(a=>a.name==this.material_name).id);
    this.form.controls['outlaytypeFormControl'].setValue(this.outlaytype.find(a=>a.name==this.outlay_name).id);
    this.form.controls['descriptionFormControl'].setValue(this.activeRequests.find(a=>a.id==this.id).description);
    this.form.controls['priceFormControl'].setValue(this.activeRequests.find(a=>a.id==this.id).price);
    this.form.controls['DateFormControl'].setValue(this.activeRequests.find(a=>a.id==this.id).date);
    // console.log(this.activeRequests.find(a=>a.id=this.id));
  }
    
      catch(error){
        this.toaster.error("انتهت صلاحيةالجلسة الخاصة بك، يرجى تسجيل الدخول ")
      }
    };
  submit = async () => {
    this.loading=true;
    try {
       await this.usersService.editoutlay(this.form.value.materialFormControl,this.form.value.outlaytypeFormControl,'',this.form.value.priceFormControl,getCorrectDateFormat(this.form.value.DateFormControl),this.form.value.descriptionFormControl,this.id);
     
    } catch (error) {
      console.log(error);
    }
    finally{
      this.loading=false;
    }
  }
}
