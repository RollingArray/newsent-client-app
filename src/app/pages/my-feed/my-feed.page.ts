import { Component, Injector, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";
import { takeUntil } from "rxjs/operators";
import { BaseViewComponent } from "src/app/component/base/base-view.component";
import { FeedDetailsComponent } from "src/app/component/feed-details/feed-details.component";
import { IntroComponent } from "src/app/component/intro/intro.component";
import { PlatformHelper } from "src/app/shared/helper/platform.helper";
import { BaseModel } from "src/app/shared/model/base.model";
import { FeedModel } from "src/app/shared/model/feed.model";
import { DateService } from "src/app/shared/service/date.service";
import { DisableBackService } from "src/app/shared/service/disable-back.service";
import { FeedService } from "src/app/shared/service/feed.service";
import { LoadingService } from "src/app/shared/service/loading.service";
import { LocalStorageService } from "src/app/shared/service/local-storage.service";
import { PushNotificationService } from "src/app/shared/service/push-notification.service";
import { DatePipe } from '@angular/common'

import { SentimentService } from "src/app/shared/service/sentiment.service";
import { SentimentModel } from "src/app/shared/model/sentiment.model";

@Component({
	selector: "app-my-feed",
	templateUrl: "./my-feed.page.html",
	styleUrls: ["./my-feed.page.scss"]
})
export class MyFeedPage extends BaseViewComponent {

	/**
	 * View child of my feed page
	 */
	@ViewChild(IonContent, { static: false }) content: IonContent;

	/**
	 * Feed model of my feed page
	 */
	private feedModel: FeedModel;

	/**
	 * Feeds  of my feed page
	 */
	public feeds: FeedModel[] = [];

	/**
	 * Sentiment over time of my feed page
	 */
	public sentimentOverTime: SentimentModel;

	/**
	 * Determines whether data has
	 */
	public hasData: boolean;

	/**
	 * Last feed created date of my feed page
	 */
	lastFeedCreatedDate: string;

	/**
	 * First feed created date of my feed page
	 */
	firstFeedCreatedDate: string;

	/**
	 * Loading content of my feed page
	 */
	loadingContent: boolean

	/**
	 * Creates an instance of my feed page.
	 * @param injector 
	 * @param feedService 
	 * @param loadingService 
	 * @param localStorageService 
	 * @param disableBackService 
	 * @param platformHelper 
	 * @param dateService 
	 */
	constructor(
		injector: Injector,
		private feedService: FeedService,
		public loadingService: LoadingService,
		public localStorageService: LocalStorageService,
		private disableBackService: DisableBackService,
		private platformHelper: PlatformHelper,
		private dateService: DateService,
		private sentimentService: SentimentService,
		public datePipe: DatePipe
	) {
		super(injector);
	}

	/**
	 * on init
	 */
	ngOnInit() {
		this.hasData = false;
		this.checkIntro();
	}

	

	/**
	 * Checks intro
	 */
	private checkIntro() {
		this.localStorageService
			.getIntroStatus()
			.pipe(takeUntil(this.unsubscribe))
			.subscribe(
				(data: string) => {
					if (data !== 'done') {
						this.loadIntro();
					}
					else {
						this.loadInitialData();
					}
				}
			);
	}

	/**
	 * Ions view did enter
	 */
	ionViewDidEnter() {
		//
	}

	/**
	 * on destroy
	 */
	ngOnDestroy() {
		super.ngOnDestroy();
	}

	/**
	 * Loads recent data
	 */
	async loadRecentData() {
		this.content.scrollToTop(400);

		//loading start
		this.loadingService.present(`${this.stringKey.API_REQUEST_MESSAGE_5}`);

		//build pass post data
		this.feedModel = {
			createdAt: this.dateService.getCurrentDateTime()
		};

		//console.log("loadRecentData unshift");
		await this.getData(this.feedModel, 'unshift', 'initial');
	}

	/**
	 * Loads initial data
	 */
	async loadInitialData() {

		// load sentiment
		this.getSentimentData();

		//loading start
		this.loadingService.present(`${this.stringKey.API_REQUEST_MESSAGE_5}`);

		//build pass post data
		this.feedModel = {
			createdAt: this.dateService.getCurrentDateTime()
		};

		//console.log("loadInitialData push");

		await this.getData(this.feedModel, 'push', 'initial');
	}

	/**
	 * Loads more data
	 */
	async loadDataAtBottom() {
		//loading start
		this.loadingService.present(`${this.stringKey.API_REQUEST_MESSAGE_5}`);

		//build pass post data
		this.feedModel = {
			createdAt: this.lastFeedCreatedDate
		};
		//console.log("loadDataAtBottom push");
		await this.getData(this.feedModel, 'push', 'bottom');
	}

	/**
	 * Format  of my feed page
	 */
	format = function date2str(x, y) {
		var z = {
			M: x.getMonth() + 1,
			d: x.getDate(),
			h: x.getHours(),
			m: x.getMinutes(),
			s: x.getSeconds()
		};
		y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
			return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2)
		});
	
		return y.replace(/(y+)/g, function(v) {
			return x.getFullYear().toString().slice(-v.length)
		});
	}

	/**
	 * Gets data
	 * @param feedModel 
	 */
	async getSentimentData() {

		const sentimentModel : SentimentModel = {
			data: this.dateService.getCurrentDate()
		}
		// loading content
		this.loadingContent = true;

		//send api response
		this.sentimentService
			.getSentiment(sentimentModel)
			.pipe(takeUntil(this.unsubscribe))
			.subscribe(async (sentimentModel: SentimentModel) => {

				// //check if success response case back
				if (sentimentModel) {
					this.sentimentOverTime = sentimentModel;
				}

				//stop loading
				await this.loadingService.dismiss();
				this.loadingContent = false;
			});
	}

	

	/**
	 * Gets data
	 * @param feedModel 
	 */
	async getData(feedModel: FeedModel, strategy: string, where: string) {

		// loading content
		this.loadingContent = true;

		//send api response
		this.feedService
			.getUserFeed(this.feedModel)
			.pipe(takeUntil(this.unsubscribe))
			.subscribe(async (baseModel: BaseModel) => {

				// //check if success response case back
				if (baseModel) {

					//assign data to model
					this.hasData = true;
					this.feedExtraction(baseModel, strategy);
					this.extractFeedCreatedDate();
				}

				//stop loading
				await this.loadingService.dismiss();
				this.loadingContent = false;
			});
	}

	/**
	 * Feed extraction
	 * @param baseModel 
	 */
	private feedExtraction(baseModel: BaseModel, strategy: string) {
		const receivedFeeds = baseModel.data as FeedModel[];;

		//console.log(receivedFeeds);

		// fresh list removing all old data
		if (strategy === 'unshift') {
			this.feeds = [];
		}
		else {
			// retain old
		}

		receivedFeeds.forEach(eachFeed => {
			//console.log(eachFeed);

			// update feed pub date to time ago format
			eachFeed.pubDate = this.dateService.timeSince(eachFeed.pubDate);

			//eachFeed.createdAt = this.dateService.timeSince(eachFeed.createdAt);

			//console.log(this.feeds);
			const found = this.feeds.some(feedModel => feedModel.title === eachFeed.title);
			//console.log(found, feedModel.title);
			if (!found) {
				
				this.feeds.push(eachFeed);
			}
		});
	}

	/**
	 * Extracts last feed created date
	 */
	async extractFeedCreatedDate() {
		this.lastFeedCreatedDate = this.feeds.slice(-1)[0].createdAt;
		this.firstFeedCreatedDate = this.feeds[0].createdAt;
	}

	/**
	 * Extracts first feed created date
	 */
	async extractFirstFeedCreatedDate() {
		this.firstFeedCreatedDate = this.feeds[0].createdAt
	}

	/**
	 * Do refresh
	 * @param event 
	 */
	async doRefresh(event) {
		await this.loadRecentData().then(_ => event.target.complete());
	}
	/**
	 * Do infinite
	 * @param event 
	 */
	async doInfinite(event) {
		await this.loadDataAtBottom().then(_ => event.target.complete());
	}

	/**
	 * Feed details
	 * @param selectedFeedModel 
	 * @returns  
	 */
	async feedDetails(selectedFeedModel: FeedModel) {
		const modal = await this.modalController.create({
			component: FeedDetailsComponent,
			componentProps: {
				feed: selectedFeedModel,
			},
		});

		modal.onDidDismiss().then((data) => {
			// any dismiss logic
		});

		return await modal.present();
	}

	/**
	 * Loads intro
	 * @returns  
	 */
	async loadIntro() {
		const modal = await this.modalController.create({
			component: IntroComponent,
			componentProps: {
				data: "none",
			},
		});

		modal.onDidDismiss().then(_ => {
			this.loadInitialData();
		});

		return await modal.present();

	}
}
