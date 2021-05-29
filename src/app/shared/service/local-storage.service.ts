
import { Injectable } from '@angular/core';
import { LocalStoreKey } from '../constant/local-store-key.constant';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})


export class LocalStorageService {
  public currentActiveUserName$ = new BehaviorSubject<string>("");
  public currentActiveUserEmail$ = new BehaviorSubject<string>("");
  public currentActiveUserId$ = new BehaviorSubject<string>("");
  public currentActiveUserToken$ = new BehaviorSubject<string>("");
  public introStatus$ = new BehaviorSubject<string>("");
	constructor() { 
    
  }

	// get token
	getToken() {
    return localStorage.getItem(`${LocalStoreKey.LOGGED_IN_SESSION_ID}`);
	}
	
	// get active user id
	getActiveUserId()  : Observable<string> {
    this.currentActiveUserId$ = new BehaviorSubject<string>(
      localStorage.getItem(`${LocalStoreKey.LOGGED_IN_USER_ID}`)
    );
    return this.currentActiveUserId$.asObservable();
  }
    
    // get active user email
	getActiveUserEmail()  : Observable<string> {
    this.currentActiveUserEmail$ = new BehaviorSubject<string>(
      localStorage.getItem(`${LocalStoreKey.LOGGED_IN_USER_EMAIL}`)
    );
		return this.currentActiveUserEmail$.asObservable();
  }
  
  getActiveUserName()  : Observable<string> {
    var fullName = localStorage.getItem(`${LocalStoreKey.LOGGED_IN_USER_FIRST_NAME}`)+" "+localStorage.getItem(`${LocalStoreKey.LOGGED_IN_USER_LAST_NAME}`);
    
    this.currentActiveUserName$ = new BehaviorSubject<string>(fullName);
    return this.currentActiveUserName$.asObservable();
  }

  endIntro() : Observable<boolean>{
    const observable$ = new BehaviorSubject<boolean>(false);

    localStorage.setItem(`${LocalStoreKey.SKIP_INTRO}`, 'done');
    
    observable$.next(true);
    return observable$.asObservable();
  }
  
  // get intro status
	getIntroStatus()  : Observable<string> {
    this.introStatus$ = new BehaviorSubject<string>(
      localStorage.getItem(`${LocalStoreKey.SKIP_INTRO}`)
    );
    return this.introStatus$.asObservable();
  }
}
