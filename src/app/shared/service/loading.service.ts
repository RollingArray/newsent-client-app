/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary Loading service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-05-29 23:56:25 
 * Last modified  : 2021-05-29 23:56:25 
 */


import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class LoadingService {
	isLoading = false;

	constructor(public loadingController: LoadingController) {}

	// present loading controller
	async present(message: string) {
		this.isLoading = true;
		return await this.loadingController
			.create({
				message,
				duration: 5000
			})
			.then(response => {
				response
					.present()
					.then(() => {
						// if (!this.isLoading) {
						// 	response
						// 		.dismiss()
						// 		.then(() => console.log("abort presenting"));
						// }
					});
			});
	}

	//dismiss loading controller
	async dismiss() {
		this.isLoading = false;
		return await this.loadingController
			.dismiss()
			.then(() => {
        //console.log("loading controller dismissed");
      });
	}
}
