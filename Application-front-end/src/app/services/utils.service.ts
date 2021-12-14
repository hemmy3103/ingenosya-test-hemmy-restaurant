import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public storage: LocalStorageService) { }
  saveToken(token: any){
    this.storage.set("token", token);
  }

  getToken(){
    return this.storage.get("token");
  }
  
  hasToken(){
    return this.getToken() != null;
  }

  removeToken() {
    return this.storage.remove("token");
  }
}
