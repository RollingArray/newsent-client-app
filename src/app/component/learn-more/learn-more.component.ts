import { BaseViewComponent } from 'src/app/component/base/base-view.component';
import { FaqComponent } from '../faq/faq.component';
import { Component, OnInit, OnDestroy, Injector } from '@angular/core';
import { ModalData } from 'src/app/shared/model/modal-data.model';
import { FaqModel } from 'src/app/shared/model/faq.model';
import { StringKey } from 'src/app/shared/constant/string.constant';
import { ModalController } from '@ionic/angular';
import { TncComponent } from 'src/app/component/tnc/tnc.component';
import { PpComponent } from 'src/app/component/pp/pp.component';
import { DisableBackService } from 'src/app/shared/service/disable-back.service';

@Component({
	selector: 'app-learn-more',
	templateUrl: './learn-more.component.html',
	styleUrls: ['./learn-more.component.scss'],
})
export class LearnMoreComponent extends BaseViewComponent implements OnInit, OnDestroy {
	private modalData: ModalData;
	readonly stringKey = StringKey;

	constructor(
		injector: Injector,
		private disableBackService: DisableBackService
	) {
		super(injector);
	}

	get year() {
		var date = new Date();
		return date.getFullYear();
	}

	closeModal() {
		this.modalData = {
			cancelled: true,
			operationSubmitted: false,
		};

		// store active user
		this.dismissModal();
	}

	dismissModal() {
    this.modalController.dismiss(this.modalData).then(() => {});
	}

	ngOnInit() { }

	ngOnDestroy() {
		super.ngOnDestroy();
	}

}
