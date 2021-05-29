import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
	providedIn: "root"
})
export class DateService {
	constructor(private datePipe: DatePipe) { }

	/**
	 * Times since
	 * @param date 
	 * @returns  
	 */
	timeSince(date) {
		const now = new Date().valueOf();
		const providedDate = new Date(date).valueOf();

		var seconds = Math.floor((now - providedDate) / 1000);
		
		if (seconds < 5) {
			return "just now";
		} else if (seconds < 60) {
			return `${seconds} seconds ago`;
		}
		else if (seconds < 3600) {
			const minutes = Math.floor(seconds / 60)
			if (minutes > 1)
				return `${minutes} minutes ago`;
			else
				return "1 minute ago";
		}
		else if (seconds < 86400) {
			const hours = Math.floor(seconds / 3600)
			if (hours > 1)
				return `${hours} hours ago`;
			else
				return "1 hour ago";
		}
		//2 days and no more
		else if (seconds < 172800) {
			const days = Math.floor(seconds / 86400)
			if (days > 1)
				return `${days} days ago`;
			else
				return `Yesterday ${this.datePipe.transform(date, 'h:mm a')}`;
		}
		else {

			//return new Date(time).toLocaleDateString();
			return this.datePipe.transform(date, 'MMM d, y, h:mm:ss a')
		}
	}

	/**
	 * Gets current date time
	 * @returns  
	 */
	getCurrentDateTime()
	{
		const now = new Date();
		return this.datePipe.transform(now, 'yyyy-MM-dd H:mm:ss');
	}

	/**
	 * Gets current date time
	 * @returns  
	 */
	 getCurrentDate()
	 {
		 const now = new Date();
		 return this.datePipe.transform(now, 'yyyy-MM-dd');
	 }
}
