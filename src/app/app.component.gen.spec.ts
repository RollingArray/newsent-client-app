import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const platformStub = { ready: () => ({ then: () => ({}) }) };
    const splashScreenStub = { hide: () => ({}) };
    const statusBarStub = { styleDefault: () => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: Platform, useValue: platformStub },
        { provide: SplashScreen, useValue: splashScreenStub },
        { provide: StatusBar, useValue: statusBarStub }
      ]
    });
    spyOn(AppComponent.prototype, 'initializeApp');
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(AppComponent.prototype.initializeApp).toHaveBeenCalled();
    });
  });
  describe('initializeApp', () => {
    it('makes expected calls', () => {
      const platformStub: Platform = fixture.debugElement.injector.get(
        Platform
      );
      const splashScreenStub: SplashScreen = fixture.debugElement.injector.get(
        SplashScreen
      );
      const statusBarStub: StatusBar = fixture.debugElement.injector.get(
        StatusBar
      );
      spyOn(platformStub, 'ready').and.callThrough();
      spyOn(splashScreenStub, 'hide').and.callThrough();
      spyOn(statusBarStub, 'styleDefault').and.callThrough();
      (<jasmine.Spy>component.initializeApp).and.callThrough();
      component.initializeApp();
      expect(platformStub.ready).toHaveBeenCalled();
      expect(splashScreenStub.hide).toHaveBeenCalled();
      expect(statusBarStub.styleDefault).toHaveBeenCalled();
    });
  });
});
