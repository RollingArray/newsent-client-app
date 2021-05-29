/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary App Component
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-05-29 23:48:47 
 * Last modified  : 2021-05-29 23:49:31
 */

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent
{
	constructor(
		private platform: Platform,
	)
	{
		this.initializeApp();
	}

	initializeApp()
	{
		this.platform.ready().then(() =>
		{
			this.platform.backButton.subscribeWithPriority(9999, () =>
			{
				document.addEventListener('backbutton', function (event)
				{
					event.preventDefault();
					event.stopPropagation();
				}, false);
			});
		});
	}
}
