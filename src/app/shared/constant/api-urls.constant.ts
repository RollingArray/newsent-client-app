import { environment } from "../../../environments/environment";

export class ApiUrls {
	public static readonly API_ENDPOINT: string = environment.apiEndpoint;
	public static readonly API_BASE_PATH: string = ApiUrls.API_ENDPOINT;

	// urls
	public static readonly USER_DEVICE_REGISTER: string = ApiUrls.API_BASE_PATH + "/userDevice/add/";

	public static readonly USER_FEED: string = ApiUrls.API_BASE_PATH + "/user-paginated-feeds";

	public static readonly SENTIMENT: string = ApiUrls.API_BASE_PATH + "/sentiments-over-time/sentiments/";
}
