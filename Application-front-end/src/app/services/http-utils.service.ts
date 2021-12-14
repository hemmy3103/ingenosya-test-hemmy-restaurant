import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  constructor(public outils: UtilsService) { }

  formOption (use_authorization = false) {
    const options = { 
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    };
    
    // if (use_authorization) {
    //   var token = this.outils.getToken();
    //   options['headers']['Authorization'] = 'Bearer '+token;
    // }
    return options;
  }

  stringify(bodyObject: any){
    let ans = "";
    Object.keys(bodyObject).forEach((element:any)=>{
      ans+= element+"="+bodyObject[element]+"&";
    });
    return ans.substring(0, ans.length-1);
  }
}
