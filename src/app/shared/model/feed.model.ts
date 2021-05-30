/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary Feed model
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-05-29 23:57:34 
 * Last modified  : 2021-05-29 23:57:34 
 */


import { BaseModel } from './base.model';

export interface FeedModel extends BaseModel{
	guid? : string,
	title? : string,
	description? : string,
    image? : string,
	link? : string,
	pubDate? : string,
	source? : string,
	tone?: string,
	keywords?: string;
	twitterHandle?: string;
	magnitude? : string,
	createdAt?: string,
	dateTime?: string
}

export interface FeedsModel extends BaseModel{
	data? : FeedModel[]
}
