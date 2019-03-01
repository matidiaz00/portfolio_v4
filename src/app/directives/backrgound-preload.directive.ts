import { Directive, HostBinding, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
  selector: '[BackrgoundPreload]'
})
export class BackrgoundPreloadDirective implements OnInit {

  @Input() img: string;
  @Input() spinner: boolean;
  @Input() colorOverlay: string;
  @Input() class: string;

  @HostBinding('style')
  get myStyle(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`background-size: cover; background-position: center center; background-repeat: no-repeat; background-image: url();`)
  }
  @HostBinding('style.backgroundImage') backgroundImage: any;
  @HostBinding('class.loaded') loaded: boolean;
  @HostBinding('class') classList: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.classList = `background-preload ${this.class} ${this.colorOverlay}-overlay`;
    this.loaded = false;
    const image = new Image();
    image.src = this.img;
    image.onload = () => {
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(${image.src})`);
      this.loaded = true;
    }
  }


}
