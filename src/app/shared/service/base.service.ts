import { ApiUrls } from "./../constant/api-urls.constant";
import { AlertController } from "@ionic/angular";
import { AlertService } from "./alert.service";

/**
 * @author Ranjoy Sen
 * @email ranjoy.sen@mindtree.com
 * @create date 2018-12-11
 * @modify date 2018-12-13
 * @desc Base service class used for all the api request, any other services call should extent this server class
 */

import { Injectable } from "@angular/core";
import { BaseModel } from "./../model/base.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, Subscription } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { LocalStorageService } from "./local-storage.service";
import { StringKey } from "../constant/string.constant";
import { DataCommunicationService } from "./data-communication.service";

@Injectable({
	providedIn: "root",
})
export abstract class BaseService<T extends BaseModel> {

	/**
	 * String key of base service
	 */
	readonly stringKey = StringKey;

	/**
	 * Subscription  of base service
	 */
	private subscription: Subscription = new Subscription();

	/**
	 * Creates an instance of base service.
	 * @param httpClient 
	 * @param localStorageService 
	 * @param alertController 
	 * @param dataCommunicationService 
	 */
	constructor(
		private httpClient: HttpClient,
		private localStorageService: LocalStorageService,
		public alertController: AlertController,
		private dataCommunicationService: DataCommunicationService
	) {}

	/**
	 * Determines whether init on
	 */
	onInit() {}

	/**
	 * Determines whether destroy on
	 */
	onDestroy() {
		this.subscription.unsubscribe();
	}

	/**
	 * Gets local storage service
	 * @returns local storage service 
	 */
	getLocalStorageService(): LocalStorageService {
		return this.localStorageService;
	}

	/**
	 * Gets base service
	 * @param url 
	 * @param [data] 
	 * @returns get 
	 */
	public get(url: string, data?: BaseModel): Observable<T> {
		const apiData = this.httpClient.get(url).pipe(
			map((response: BaseModel) => response as T),
			catchError((error) => of(null))
		);
		return apiData;
	}

	/**
	 * Posts base service
	 * @param url 
	 * @param data 
	 * @returns post 
	 */
	public post(url: string, data: T): Observable<T> {
		//console.log(url);
		//console.log(JSON.stringify(data));
		const apiData = this.httpClient.post<T>(url, data).pipe(
			map((response: BaseModel) => {
				
        
        return response as T;
			}),
			catchError((error) => of(null))
		);
		return apiData;
	}

	/**
	 * Puts base service
	 * @param url 
	 * @param data 
	 * @returns put 
	 */
	public put(url: string, data: T): Observable<T> {
		const apiData = this.httpClient.put<T>(url, data).pipe(
			map((response: any) => response as T),
			catchError((error) => of(null))
		);
		return apiData;
	}

	/**
	 * Errors alert
	 * @param message 
	 * @returns  
	 */
	errorAlert(message: string) {
		//this.dataComunicaitonService.currentMessage("message").;

		return this.alertController
			.create({
				header: this.stringKey.APP_NAME,
				message,
				buttons: [
					{
						text: "ok",
						handler: (data) => {},
					},
				],
			})
			.then((response) => {
				response.present();
			});
	}
}
