import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Form } from './form';



@Injectable({
  providedIn: 'root'
})
export class RoutingserviceService {
private apiURL:string = "http://192.168.27.38/dezapu-6.0_newbo/public/api/"
// private apiURL:string = "/assets/data/mydata.json"

  constructor(private http:HttpClient) { }
  getData(user:Form): Observable<any[]> {
  return this.http.post<any[]>(this.apiURL+"myapp",user);
  }

}
