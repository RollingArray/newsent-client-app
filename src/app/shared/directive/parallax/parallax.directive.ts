import { Directive, AfterViewInit, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appParallax]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
    }
})
export class ParallaxDirective implements AfterViewInit {

    @Input('appParallax') imagePath: string;
    @Input('appParallaxHeight') parallaxHeight: number;

    private headerHeight: number;
    private header: HTMLDivElement;
    private mainContent: HTMLDivElement;

    constructor(private element: ElementRef, private renderer: Renderer2, private domCtrl: DomController) {

    }

    ngAfterViewInit(){

        this.headerHeight = this.parallaxHeight;
        this.mainContent = this.element.nativeElement.querySelector('.main-content');

        this.domCtrl.write(() => {

            this.header = this.renderer.createElement('div');

            this.renderer.insertBefore(this.element.nativeElement, this.header, this.element.nativeElement.firstChild);
            
            this.renderer.setStyle(this.header, 'background-image', 'url(' + this.imagePath + ')');
            this.renderer.setStyle(this.header, 'height', this.headerHeight + 'px');
            this.renderer.setStyle(this.header, 'background-size', 'cover');
            this.renderer.setStyle(this.header, 'background-position' , 'center');
            this.renderer.setStyle(this.header, 'background-repeat' , 'no-repeat');
        });

      }
      @HostListener('window:resize', ['$event']) onWindowResize(e) {
        this.headerHeight = this.header.clientHeight;
        // Your Code Here
    
      }

    //   onWindowResize(ev){
    //     this.headerHeight = -this.header.clientHeight;
    //     console.log("header"+this.header.clientHeight);
    // }

    onContentScroll(ev){
        this.domCtrl.read(() => {

          let translateAmt, scaleAmt;
      
          // Already scrolled past the point at which the header image is visible
          if(ev.detail.scrollTop > this.parallaxHeight){
            return;
          }

          if(ev.detail.scrollTop >= 0){
              translateAmt = -(ev.detail.scrollTop / 2);
              scaleAmt = 1;
          } else {
              translateAmt = 0;
              scaleAmt = -ev.detail.scrollTop / this.headerHeight + 1;
          }

          this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transform', 'translate3d(0,'+translateAmt+'px,0) scale('+scaleAmt+','+scaleAmt+')');
            this.renderer.setStyle(this.mainContent, 'transform', 'translate3d(0, '+(-ev.detail.scrollTop) + 'px, 0');
          });

        });

    }

}