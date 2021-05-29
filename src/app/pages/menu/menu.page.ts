import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { takeUntil } from 'rxjs/operators';
import { BaseViewComponent } from 'src/app/component/base/base-view.component';
import { FaqComponent } from 'src/app/component/faq/faq.component';
import { LearnMoreComponent } from 'src/app/component/learn-more/learn-more.component';
import { PpComponent } from 'src/app/component/pp/pp.component';
import { TncComponent } from 'src/app/component/tnc/tnc.component';
import { ArrayKey } from 'src/app/shared/constant/array.constant';
import { StringKey } from 'src/app/shared/constant/string.constant';
import { BaseModel } from 'src/app/shared/model/base.model';
import { ModalData } from 'src/app/shared/model/modal-data.model';
import { UserDeviceModel } from 'src/app/shared/model/user-device.model';
import { PushNotificationService } from 'src/app/shared/service/push-notification.service';
import { UserDeviceService } from 'src/app/shared/service/user-device.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: "app-menu",
	templateUrl: "./menu.page.html",
	styleUrls: ["./menu.page.scss"],
})
export class MenuPage extends BaseViewComponent implements OnInit, OnDestroy {
	// instance variables
	public loggedInUser: string;
	private modalData: ModalData;
	readonly stringKey = StringKey;
	public pages = ArrayKey.APP_PRIMARY_ROUTE_PAGES;
	
	// class constructor
	constructor(
		injector: Injector,
		public pushNotificationService: PushNotificationService,
		private swPush: SwPush,
		private userDeviceService: UserDeviceService,
	) {
		super(injector);
		//this.listenForMessages();
	}

	

	  
	async registerBackButton() {
		this.platform.backButton
			.pipe(takeUntil(this.unsubscribe))
			.subscribe(async () => {
				//
			});
	}

	// Lifecycle hook: ngOnInit
	async ngOnInit() {
		//
	}

	// Lifecycle hook: ionViewDidEnter
	async ionViewDidEnter() {
		await this.registerBackButton();
	}

	// Lifecycle hook: ngOnDestroy
	ngOnDestroy() {
		super.ngOnDestroy();
	}

	get year() {
		var date = new Date();
		return date.getFullYear();
	}

	async learn(){
		const modal = await this.modalController.create({
			component: LearnMoreComponent,
			componentProps: {
				data: {}
			}
		});

		modal.onDidDismiss().then(data => {
			this.modalData = data.data;
			if (this.modalData.cancelled) {
				//do not refresh the page
			} else {
				//
			}
		});

		return await modal.present();
	}
	async faq() {
		const modal = await this.modalController.create({
			component: FaqComponent,
			componentProps: {
				data: {}
			}
		});

		modal.onDidDismiss().then(data => {
			this.modalData = data.data;
			if (this.modalData.cancelled) {
				//do not refresh the page
			} else {
				//
			}
		});

		return await modal.present();
	}

	async tnc() {
		const modal = await this.modalController.create({
			component: TncComponent,
			componentProps: {
				data: {}
			}
		});

		modal.onDidDismiss().then(data => {
			this.modalData = data.data;
			if (this.modalData.cancelled) {
				//do not refresh the page
			} else {
				//
			}
		});

		return await modal.present();
	}

	async pp() {
		const modal = await this.modalController.create({
			component: PpComponent,
			componentProps: {
				data: {}
			}
		});

		modal.onDidDismiss().then(data => {
			this.modalData = data.data;
			if (this.modalData.cancelled) {
				//do not refresh the page
			} else {
				//
			}
		});

		return await modal.present();
	}
}
