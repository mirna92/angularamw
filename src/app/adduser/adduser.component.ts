import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userFormControl= new FormControl('', [Validators.required]);
  passwordFormControl= new FormControl('',[Validators.required]);
loading=false;
  constructor( private userservice:UsersService) { }

  ngOnInit(): void {
  }
  submit = async () => {
    this.loading=true;
    try {
      // await this.userservice.signup(this.form.value.firstNameFormControl, this.form.value.lastNameFormControl, this.form.value.mobileFormControl, this.form.value.nationalFormControl, this.form.value.passwordFormControl, this.form.value.userNameFormControl,this.form.value.nationalityFormControl);
      await this.userservice.adduser( this.userFormControl.value, this.passwordFormControl.value);
     
    } catch (error) {
      console.log(error);
    }
    finally{
      this.loading=false;
    }
  }
}
