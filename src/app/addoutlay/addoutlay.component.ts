import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/users.service';
import { getCorrectDateFormat, objectify } from '../utils/function';
import * as moment from 'moment';
@Component({
  selector: 'app-addoutlay',
  templateUrl: './addoutlay.component.html',
  styleUrls: ['./addoutlay.component.css']
})
export class AddoutlayComponent implements OnInit {
  loading = false;
  filteredmaterial: any[] = [];
  material: any[]=[];
  filteredoutlaytype: any[] = [];
  outlaytype: any[]=[];
  materialFormControl= new FormControl('', [Validators.required]);
  outlaytypeFormControl= new FormControl('',[Validators.required]);
  descriptionFormControl= new FormControl('',[Validators.required]);
  DateFormControl=new FormControl('',[Validators.required]);
  priceFormControl= new FormControl('', [Validators.required]);
  //dateFormControl= new FormControl('',[Validators.required]);
  constructor(
    private toaster: ToastrService,
    private userservice: UsersService
  ) {}

  async ngOnInit() {
    this.loading = true;
    try {
      const tempReqs = await this.userservice.getallmaterial();
      console.log(tempReqs);
      this.material = tempReqs?.data || [];
      console.log(this.material);
      this.filteredmaterial = objectify(this.material || []);


      const tempReqs1 = await this.userservice.getalloutlaytype();
      console.log(tempReqs);
      this.outlaytype = tempReqs1?.data || [];
      console.log(this.outlaytype);
      this.filteredoutlaytype = objectify(this.outlaytype || []);
      
    } catch (error) {
      this.toaster.error('حدث خطأ أثناء تحميل الصفحة، يرجى المحاولة لاحقا');
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  submit = async () => {
    try {
      await this.userservice.addoutlay(
        this.materialFormControl.value,
        this.outlaytypeFormControl.value,
        '',
        this.priceFormControl.value,
        getCorrectDateFormat(this.DateFormControl.value),
        this.descriptionFormControl.value
      );
      this.toaster.success('تم الحفظ بنجاح');
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  };
}
