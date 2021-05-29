import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { MenuPage } from "./menu.page";
import { PpModule } from 'src/app/component/pp/pp.component.module';
import { TncModule } from 'src/app/component/tnc/tnc.component.module';
import { LearnMoreModule } from "src/app/component/learn-more/learn-more.module";
import { FaqModel } from "src/app/shared/model/faq.model";
import { FaqModule } from "src/app/component/faq/faq.component.module";

const routes: Routes = [
	{
		path: "",
		redirectTo: "/go/my-feed",
		pathMatch: "full"
	},
	{
		path: "",
		component: MenuPage,
		children: [
			{ 
				
				path: 'my-feed', 
				loadChildren: () => import('../my-feed/my-feed.module').then( m => m.MyFeedPageModule),
			},
		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		TncModule,
		PpModule,
		FaqModule,
		LearnMoreModule,
		RouterModule.forChild(routes)
	],
	declarations: [MenuPage]
})
export class MenuPageModule { }
