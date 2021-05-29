/**
 * @author Ranjoy Sen
 * @email ranjoy.sen@rockwellcollins.com
 * @create date 2020-11-23 22:14:33
 * @modify date 2020-11-23 22:14:33
 * @desc Image holder module
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImageHolderComponent } from './image-holder.component';

@NgModule({
	declarations: [ImageHolderComponent],
	imports: [
		CommonModule,
		FormsModule,
		IonicModule
	],
	exports: [ImageHolderComponent]
})
export class ImageHolderModule { }
