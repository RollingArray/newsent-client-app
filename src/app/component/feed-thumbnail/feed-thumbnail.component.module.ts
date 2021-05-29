import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FeedThumbnailComponent } from './feed-thumbnail.component';
import { ImageHolderModule } from '../image-holder/image-holder.module';
//import { NgColorScaleModule } from 'ng-color-scale';


@NgModule({
  imports: [CommonModule, IonicModule, ImageHolderModule],

  declarations: [FeedThumbnailComponent],
  exports: [FeedThumbnailComponent],
  entryComponents: [FeedThumbnailComponent]
})
export class FeedThumbnailModule {}
