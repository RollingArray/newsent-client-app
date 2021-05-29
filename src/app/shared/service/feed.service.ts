import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiUrls } from '../constant/api-urls.constant';
import { BaseModel } from '../model/base.model';
import { FeedModel } from '../model/feed.model';
import { BaseService } from './base.service';
import { DataCommunicationService } from './data-communication.service';
import { LocalStorageService } from './local-storage.service';


@Injectable({
	providedIn: "root"
})
export class FeedService extends BaseService<FeedModel> {
	
	/**
	 * Creates an instance of feed service.
	 * @param httpClient 
	 * @param localStorageService 
	 * @param alertController 
	 * @param dataCommunicationService 
	 */
	constructor(
		httpClient: HttpClient,
		localStorageService: LocalStorageService,
		alertController: AlertController,
		dataCommunicationService: DataCommunicationService
	) {
		super(
			httpClient,
			localStorageService,
			alertController,
			dataCommunicationService
		);
	}

	/**
	 * Gets user feed
	 * @param feedModel 
	 * @returns user feed 
	 */
	getUserFeed(feedModel: FeedModel): Observable<BaseModel> {
		console.log(`${ApiUrls.USER_FEED}${feedModel.createdAt}`);
		let object: FeedModel = {
			'createdAt' : feedModel.createdAt
		};
		return this.post(`${ApiUrls.USER_FEED}`, object );
	}
}
