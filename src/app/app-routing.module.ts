/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary App routing module
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-05-29 23:50:09 
 * Last modified  : 2021-05-29 23:50:26
 */


import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "go",
		pathMatch: "full",
	},
	{
		path: "go",
		loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule { }
