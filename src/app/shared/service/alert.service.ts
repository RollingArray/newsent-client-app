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
