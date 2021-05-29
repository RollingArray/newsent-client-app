/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary Alert service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-05-29 23:52:18 
 * Last modified  : 2021-05-29 23:52:18 
 */


import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class AlertService {
	constructor(public alertController: AlertController) {}

	// present loading controller
	async presentBasicAlert(message: string) {
		return await this.alertController
			.create({
				header: 'Newsent',
				message,
				buttons: ['OK']
			})
			.then(response => {
				response
					.present()
					.then(() => {
						//
					});
			});
	}
}
