import { BaseModel } from './base.model';

export interface SentimentModel extends BaseModel{
	date? : string,
	timeSeries? : string[],
	scoreSeries? : string[]
}