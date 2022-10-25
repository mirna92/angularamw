import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-editoutlaytype',
  templateUrl: './editoutlaytype.component.html',
  styleUrls: ['./editoutlaytype.component.css']
})
export class EditoutlaytypeComponent implements OnInit {
  displayedColumns: string[] = ['name','description','ACTIONS'];
  activeRequests:any[] = [];
  constructor( private router: Router,private http: HttpClient, private usersService: UsersService,private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getActiveProcesses();
  }
  getActiveProcesses = async () => {
    try {

      const tempReqs = await this.usersService.getalloutlaytype();
      console.log(tempReqs);
      this.activeRequests = tempReqs?.data || [];
    console.log(this.activeRequests);}
      catch(error){
        this.toaster.error("انتهت صلاحيةالجلسة الخاصة بك، يرجى تسجيل الدخول ")
      }
    };
  checkProcess = async (action: string, id: string) => {
    console.log(id);
    console.log(action);
    try {
     if (action == 'edit') {
        this.router.navigate(['home','updateuser', id]);
      } else if (action == 'delete') {
        await this.deleteProcess(id);
      }
  
    } catch (error) {
      console.log(error);
    }
    finally {
    }

}
deleteProcess = async (id: string) => {
  
try{
  await this.usersService.deleteuaer(id);
}
catch(error){
  console.log(error);
}

}
}
