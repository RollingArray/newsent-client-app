import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BaseModel } from '../model/base.model';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { AlertController } from '@ionic/angular';
import { DataCommunicationService } from './data-communication.service';
import { UserDeviceModel } from '../model/user-device.model';
import { Observable } from 'rxjs';
import { ApiUrls } from '../constant/api-urls.constant';


@Injectable({
	providedIn: "root"
})
export class UserDeviceService extends BaseService<BaseModel> {
	/**
	 * @param  {HttpClient} httpClient
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

  registerNewUserDevice(userDeviceModel: UserDeviceModel): Observable<BaseModel> {
	return this.post(`${ApiUrls.USER_DEVICE_REGISTER}`, userDeviceModel);
  }
}
