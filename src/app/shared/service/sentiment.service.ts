import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiUrls } from '../constant/api-urls.constant';
import { BaseModel } from '../model/base.model';
import { FeedModel } from '../model/feed.model';
import { SentimentModel } from '../model/sentiment.model';
import { BaseService } from './base.service';
import { DataCommunicationService } from './data-communication.service';
import { LocalStorageService } from './local-storage.service';


@Injectable({
	providedIn: "root"
})
export class SentimentService extends BaseService<SentimentModel> {
	
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
	 * Gets sentiment
	 * @param sentimentModel 
	 * @returns sentiment 
	 */
	getSentiment(sentimentModel: SentimentModel): Observable<BaseModel> {
		return this.get(`${ApiUrls.SENTIMENT}${sentimentModel.data}` );
	}
}
