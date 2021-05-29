/**
 * @author Ranjoy Sen
 * @email ranjoy.sen@rockwellcollins.com
 * @create date 2020-11-23 22:14:33
 * @modify date 2020-11-23 22:14:33
 * @desc Image holder module
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NoDataModule } from '../no-data/no-data.component.module';
import { SentimentOverTimeComponent } from './sentiment-over-time.component';

@NgModule({
  imports: [CommonModule, IonicModule, NoDataModule],

  declarations: [SentimentOverTimeComponent],
  exports: [SentimentOverTimeComponent],
  entryComponents: [SentimentOverTimeComponent]
})
export class SentimentOverTimeModule { }
