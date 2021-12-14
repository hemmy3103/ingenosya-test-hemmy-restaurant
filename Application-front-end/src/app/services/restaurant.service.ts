import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from 'src/environments/environment';
import { HttpUtilsService } from './http-utils.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(public http: HttpClient,
    public httpUtil: HttpUtilsService) { }
  login(login: any){
    var body: string = this.httpUtil.stringify(login);
    var options = this.httpUtil.formOption();
    return this.http.post(base_url+"/login", body, options);
  }

  getAllMenu(){
    var options = this.httpUtil.formOption(false);
    return this.http.get(base_url+"/api/menu", options);
  }
}
