import { BaseModel } from './base.model';

export interface FeedModel extends BaseModel{
	guid? : string,
	title? : string,
	description? : string,
    image? : string,
	link? : string,
	pubDate? : string,
	source? : string,
	tone? : string,
	magnitude? : string,
	createdAt?: string,
	dateTime?: string
}

export interface FeedsModel extends BaseModel{
	data? : FeedModel[]
}
