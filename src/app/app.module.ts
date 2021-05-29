/**
 * © Rolling Array https://rollingarray.co.in/
 *
 * long description for the file
 *
 * @summary App module
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-05-29 23:48:47 
 * Last modified  : 2021-05-29 23:49:18
 */



import { UserDeviceService } from './shared/service/user-device.service';
import { ApiInterceptor } from "./shared/interceptor/api-interceptor.interceptor";
import { AuthGuard } from "./shared/guard/auth.guard";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { LocalStorageService } from './shared/service/local-storage.service';
import { LoadingService } from './shared/service/loading.service';
import { AlertService } from './shared/service/alert.service';
import { DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';

//fa
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

//import { Push } from '@ionic-native/push/ngx';
import { DisableBackService } from './shared/service/disable-back.service';


@NgModule({
	declarations: [
		AppComponent,
	],
	entryComponents: [

	],
	imports: [
		BrowserModule,
		IonicModule.forRoot({ hardwareBackButton: false }),
		AppRoutingModule,
		HttpClientModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: true,
		}),
	],
	providers: [
		AuthGuard,
		DatePipe,
		UserDeviceService,
		LocalStorageService,
		LoadingService,
		AlertService,
		DisableBackService,
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
