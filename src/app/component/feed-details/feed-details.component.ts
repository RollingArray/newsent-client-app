/**
 * @author Ranjoy Sen
 * @email ranjoy.sen@mindtree.com
 * @create date 2020-03-29 15:03:17
 * @modify date 2020-03-29 15:03:17
 * @desc [description]
 */

import { Component, OnInit, OnDestroy, Injector, Input } from '@angular/core';
import { BaseFormComponent } from '../base/base-form.component';
import { ModalData } from 'src/app/shared/model/modal-data.model';
import { FeedModel } from 'src/app/shared/model/feed.model';

@Component({
	selector: "app-feed-details",
	templateUrl: "./feed-details.component.html",
	styleUrls: ["./feed-details.component.scss"],
})
export class FeedDetailsComponent extends BaseFormComponent implements OnInit, OnDestroy {
	private modalData: ModalData;
	@Input() feed: FeedModel;
	constructor(
		injector: Injector
	) {
		super(injector);
	}

	changeRange(valor, value){
		valor.value = value;
	}

	closeModal() {
		this.modalData = {
			cancelled: true,
			operationSubmitted: false,
		};

		// store active user
		this.dismissModal();
	}

	async readFeed(){
		window.open(this.feed.link,'_blank');
	}

	dismissModal() {
		this.modalController.dismiss(this.modalData).then(() => { });
	}

	ngOnInit() { }

	ngOnDestroy(): void { }
}
