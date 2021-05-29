import { Component, Injector, Input, OnInit } from '@angular/core';
import { FeedModel } from 'src/app/shared/model/feed.model';
import { BaseViewComponent } from '../base/base-view.component';

@Component({
	selector: 'app-feed-thumbnail',
	templateUrl: './feed-thumbnail.component.html',
	styleUrls: ['./feed-thumbnail.component.scss'],
})
export class FeedThumbnailComponent extends BaseViewComponent implements OnInit {

	@Input() feed!: FeedModel;
	@Input() isDetailView!: boolean;

	constructor(
		injector: Injector
	) {
		super(injector);
	}

	ngOnInit() { }
}
