import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {headers} from '../utils/settings';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl="https://veiled-awesome-linseed.glitch.me/";
 url=this.baseUrl +'api/login';
 urladduser=this.baseUrl +'user';
 urledituser=this.baseUrl +'useredit';
 urladdmaterial=this.baseUrl +'materialadd';
 urleditmaterial=this.baseUrl +'materialedit';
 urladdoutlaytype=this.baseUrl +'outlaytypeadd';
 urleditoutlaytype=this.baseUrl +'outlaytypeedit';
 urldeleteuser=this.baseUrl +'deleteuser';
 urlmaterial=this.baseUrl +'material';
 urloutlaytype=this.baseUrl +'outlaytype';
 urladdoutlay=this.baseUrl +'outlayadd';
 urleditoutlay=this.baseUrl +'outlayedit';
 urloutlay=this.baseUrl +'outlay/';
 urlr1=this.baseUrl +'report';

public user: BehaviorSubject<any> = new BehaviorSubject<any>(null);
constructor(private http: HttpClient,
  private toaster: ToastrService,
  private router: Router) {

    this.user.next(JSON.parse(localStorage.getItem('user') || 'null'));
}

login = async (name: string, Password: string) => {
  console.log("name");
  try {
    const result: any = await firstValueFrom(
      this.http.post(this.url, { name, Password }, {headers})
    );
    console.log(result);
    localStorage.setItem('user', JSON.stringify(result));
    localStorage.setItem("token",result.token);
    localStorage.setItem("admin",result.admin);
    localStorage.setItem("userid",result.User_id);

    this.user.next(result );
    this.router.navigate(['home']);

    return result;
  } catch (error: any) {
      this.toaster.error('حدث خطأ أثناء تسجيل الدخول');
    console.error(error);
    throw error;
  }
}

adduser = async (name: string, Password: string) => {
  console.log("name");
  try {
    const result: any = await firstValueFrom(
      this.http.post(this.urladduser,{ name, Password },{headers})
    );
this.toaster.success("تم إضافة المستخدم بنجاح")

    return result;
  } catch (error: any) {
      this.toaster.error('حدذ خطأ أثناء إضافة مستخدم جديد');
    console.error(error);
    throw error;
  }}
  // getuser = async (name: string, Password: string,user_id:string) => {
  //   try {
  //     const result: any = await firstValueFrom(
  //       this.http.get(this.urladduser)
  //     );
  
  //     return result;
  //   } catch (error: any) {
  //       this.toaster.error('حدذ خطأ أثناء تعديل مستخدم ');
  //     console.error(error);
  //     throw error;
  //   }}
    getalluser = async () => {
      try {
        const result: any = await firstValueFrom(
          this.http.get(this.urladduser)
        );
    
        return result;
      } catch (error: any) {
          this.toaster.error('حدذ خطأ أثناء تعديل مستخدم ');
        console.error(error);
        throw error;
      }}

  edituser = async (name: string, Password: string,user_id:string) => {
    try {
      const result: any = await firstValueFrom(
        this.http.post(this.urledituser, { name, Password,user_id }, {headers}),
      );
  this.toaster.success("تم تعديل المستخدم بنجاح")
  
      return result;
    } catch (error: any) {
        this.toaster.error('حدذ خطأ أثناء تعديل مستخدم ');
      console.error(error);
      throw error;
    }}

    
  deleteuaer = async (user_id:string) => {
    try {
      const result: any = await firstValueFrom(
        this.http.post(this.urldeleteuser, {user_id }, {headers})
      );
  this.toaster.success("تم حذف المستخدم ذو الرقم"+user_id);
  
      return result;
    } catch (error: any) {
        this.toaster.error('حدذ خطأ أثناء حذف المستخدم ');
      console.error(error);
      throw error;
    }}



    
addmaterial = async (name: string, isService: string,description:string) => {
  console.log("name");
  try {
    const result: any = await firstValueFrom(
      this.http.post(this.urladdmaterial, { name, isService,description }, {headers})
    );
this.toaster.success("تم إضافة مادة بنجاح")

    return result;
  } catch (error: any) {
      this.toaster.error('حدذ خطأ أثناء إضافة مادة جديد');
    console.error(error);
    throw error;
  }}


    
  editmaterial = async (id: string, name: string, isService: string,description:string) => {
    console.log("name");
    try {
      const result: any = await firstValueFrom(
        this.http.post(this.urleditmaterial, {id, name, isService,description }, {headers})
      );
  this.toaster.success("تم إضافة مادة بنجاح")
  
      return result;
    } catch (error: any) {
        this.toaster.error('حدذ خطأ أثناء إضافة مادة جديد');
      console.error(error);
      throw error;
    }}
    getallmaterial = async () => {
      try {
        const result: any = await firstValueFrom(
          this.http.get(this.urlmaterial)
        );
    
        return result;
        console.log(result);
        console.log("result");
      } catch (error: any) {
          this.toaster.error('حدث خطأ ');
        console.error(error);
        throw error;
      }}



    addoutlaytype= async (name: string,description:string) => {
      console.log("name");
      try {
        const result: any = await firstValueFrom(
          this.http.post(this.urladdoutlaytype, { name,description }, {headers})
        );
    this.toaster.success("تم إضافة مادة بنجاح")
    
        return result;
      } catch (error: any) {
          this.toaster.error('حدذ خطأ أثناء إضافة مادة جديد');
        console.error(error);
        throw error;
      }}
    
    
        
      editoutlaytype = async (id: string, name: string,description:string) => {
        console.log("name");
        try {
          const result: any = await firstValueFrom(
            this.http.post(this.urleditoutlaytype, { name,description,id }, {headers})
          );
      this.toaster.success("تم إضافة مادة بنجاح")
      
          return result;
        } catch (error: any) {
            this.toaster.error('حدذ خطأ أثناء إضافة مادة جديد');
          console.error(error);
          throw error;
        }}
        getalloutlaytype = async () => {
          try {
            const result: any = await firstValueFrom(
              this.http.get(this.urloutlaytype)
            );
        
            return result;
            console.log(result);
            console.log('result');
          } catch (error: any) {
              this.toaster.error('حدث خطأ ');
            console.error(error);
            throw error;
          }}


        addoutlay= async (Material_id: string,OutlayType_Id:string,Userid:string,price:string,date:string,description:string) => {
          console.log("name");
          const User_id=localStorage.getItem("userid");
          console.log(User_id);
          try {
            const result: any = await firstValueFrom(
              this.http.post(this.urladdoutlay, { Material_id,OutlayType_Id,User_id,price,date,description }, {headers})
            );
            console.log(result);
        this.toaster.success("تم إضافة نفقة بنجاح")
        
            return result;
          } catch (error: any) {
              this.toaster.error('حدث خطأ أثناء إضافة نفقة جديدة');
            console.error(error);
            throw error;
          }}
    
          editoutlay= async (Material_id: string,OutlayType_id:string,Userid:string,price:string,date:string,description:string,id:string) => {
            console.log("name");
            const User_id=localStorage.getItem("userid");
            try {
              const result: any = await firstValueFrom(
                this.http.post(this.urleditoutlay, { Material_id,OutlayType_id,User_id,price,date,description,id }, {headers})
              );
          this.toaster.success("تم تعديل نفقة بنجاح")
          
              return result;
            } catch (error: any) {
                this.toaster.error('حدث خطأ أثناء تعديل نفقة جديدة');
              console.error(error);
              throw error;
            }}
            getalloutlay = async () => {
              const userid=localStorage.getItem("userid");
              try {
                const result: any = await firstValueFrom(
                  this.http.get(this.urloutlay+userid)
                );
            
                return result;
                console.log(result);
                console.log('result');
              } catch (error: any) {
                  this.toaster.error('حدث خطأ ');
                console.error(error);
                throw error;
              }}

              deleteoutlay= async (id:string) => {
                try {
                  const result: any = await firstValueFrom(
                    this.http.post(this.urldeleteuser, {id }, {headers})
                  );
              this.toaster.success("تم حذف النفقة ذو الرقم"+id)}
              catch (error: any) {
                this.toaster.error('حدث خطأ ');
              console.error(error);
              throw error;
                  }}
            logout = async (toLogin = false) => {
    
               localStorage.removeItem("token");
               localStorage.removeItem("admin");
               localStorage.removeItem("user");
               this.user.next(null);
               localStorage.removeItem("userid");
               this.router.navigate(['login']);
            }
            getreport1 = async () => {
              try {
                const result: any = await firstValueFrom(
                  this.http.get(this.urlr1+1)
                );
            
                return result;
              } catch (error: any) {
                  this.toaster.error('حدث خطأ ');
                console.error(error);
                throw error;
              }}
              getreport2 = async (id:any) => {
                try {
                  const result: any = await firstValueFrom(
                    this.http.get(this.urlr1+2+'/'+id)
                  );
              
                  return result;
                } catch (error: any) {
                    this.toaster.error('حدث خطأ ');
                  console.error(error);
                  throw error;
                }}


}

