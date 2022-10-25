import { HttpHeaders } from '@angular/common/http';
const token=localStorage.getItem("token");
export const headers = new HttpHeaders({
  'authorization':'bearer '+token
});
