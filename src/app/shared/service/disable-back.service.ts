/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary Disable back service
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-05-29 23:55:24 
 * Last modified  : 2021-05-29 23:55:24 
 */



import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DisableBackService
{
	// page disable back button
	private blackLists: string[] = [
		'/go/my-feed',
		'/go/learn-more'
	];

	constructor(private router: Router)
	{
		// call every have change page
		this.router.events.subscribe((ev) =>
		{
			if (ev instanceof NavigationEnd)
			{
				const blackList = this.blackLists.find(el => ev.url.includes(el));
				if (blackList)
				{
					this.disableBack();
				} else
				{
					this.enableBack();
				}
			}
		});
	}

	private logger()
	{
		//
	}

	disableBack()
	{
		document.addEventListener('backbutton', this.logger, false);
	}

	enableBack()
	{
		document.removeEventListener('backbutton', this.logger, false);
	}
}