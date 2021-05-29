import { Component, OnDestroy } from "@angular/core";
import { OnInit } from "@angular/core";
import { Injector } from "@angular/core";
import {
  AlertController,
  NavController,
  LoadingController,
  ModalController,
  NavParams,
  ToastController,
  ActionSheetController
} from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs/internal/Subscription";

//fontawasom


//constant
import { StringKey } from "src/app/shared/constant/string.constant";
import { Regex } from "src/app/shared/constant/regex.constant";
import { ArrayKey } from 'src/app/shared/constant/array.constant';
import { Subject } from 'rxjs';

@Component({
	selector: 'base-form-component',
	template: '<div></div>'
})

export abstract class BaseFormComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  public formBuilder: FormBuilder;
  public navController: NavController;
  public alertController: AlertController;
  public loadingController: LoadingController;
  public modalController: ModalController;
  public toastController: ToastController;
  public actionSheetController: ActionSheetController;
  public subscription: Subscription = new Subscription();
  public unsubscribe = new Subject<void>();

  readonly stringKey = StringKey;
  readonly regex = Regex;
  readonly arrayKey = ArrayKey;

  constructor(injector: Injector) {
    this.navController = injector.get(NavController);
    this.alertController = injector.get(AlertController);
    this.loadingController = injector.get(LoadingController);
    this.formBuilder = injector.get(FormBuilder);
    this.modalController = injector.get(ModalController);
    this.toastController = injector.get(ToastController);
    this.actionSheetController = injector.get(ActionSheetController);
  }
  validators() {
    return Validators;
  }

  ngOnInit() {}
  ngOnDestroy(): void {
    // unsubscribe to all the subscriptions
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async presentToast(responseMessage) {
    const toast = await this.toastController.create({
      message: responseMessage,
      duration: 2000
    });
    toast.present();
  }

  async goBack() {
		await this.navController.back();
	}
}
