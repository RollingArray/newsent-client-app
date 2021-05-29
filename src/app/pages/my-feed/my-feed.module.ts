import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FeedDetailsModule } from 'src/app/component/feed-details/feed-details.component.module';
import { FeedThumbnailModule } from 'src/app/component/feed-thumbnail/feed-thumbnail.component.module';
import { IntroModule } from 'src/app/component/intro/intro.component.module';
import { NoDataModule } from 'src/app/component/no-data/no-data.component.module';
import { PageInfoTitleModule } from 'src/app/component/page-info-title/page-info-title.component.module';
import { PanelHeaderModule } from 'src/app/component/panel-header/panel-header.component.module';
import { PanelInfoModule } from 'src/app/component/panel-info/panel-info.component.module';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { SortListPipe } from 'src/app/shared/pipe/sort-list.pipe';
import { MyFeedPage } from './my-feed.page';
import { SentimentOverTimeModule } from 'src/app/component/sentiment-over-time/sentiment-over-time.component.module';

const routes: Routes = [
  {
    path: '',
    component: MyFeedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NoDataModule,
    PageInfoTitleModule,
    PanelHeaderModule,
    PanelInfoModule,
    FeedThumbnailModule,
    IntroModule,
    FeedDetailsModule,
    SentimentOverTimeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyFeedPage, SortListPipe]
})
export class MyFeedPageModule {}
