import { Injectable } from "@angular/core";

import { tap } from "rxjs/operators";



@Injectable({
	providedIn: "root",
})
export class PushNotificationService{

  token = null;
  
  constructor() {}
 
  requestPermission() {
    //
  }
 
  getMessages() {
    //return this.afMessaging.messages;
  }
 
  deleteToken() {
    //
  }
}
