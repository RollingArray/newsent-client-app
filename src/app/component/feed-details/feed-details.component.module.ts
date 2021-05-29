import { PageInfoTitleModule } from '../page-info-title/page-info-title.component.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/module/shared.module";
import { IonicModule } from "@ionic/angular";
import { FeedDetailsComponent } from './feed-details.component';
import { FeedThumbnailModule } from '../feed-thumbnail/feed-thumbnail.component.module';
@NgModule({
  imports: [CommonModule, SharedModule, IonicModule, PageInfoTitleModule, FeedThumbnailModule],

  declarations: [FeedDetailsComponent],
  exports: [FeedDetailsComponent],
  entryComponents: [FeedDetailsComponent]
})
export class FeedDetailsModule {}
