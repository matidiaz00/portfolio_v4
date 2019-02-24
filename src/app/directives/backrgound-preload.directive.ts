import { Directive, HostBinding, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[BackrgoundPreload]'
})
export class BackrgoundPreloadDirective implements OnInit {

  @Input() img: string;
  @Input() spinner: boolean;

  image = new Image();

  @HostBinding('style.transition') transition;
  @HostBinding('style.backgroundImage') backgroundImage;

  constructor(private sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.transition = "background-image 0.3s";
    this.image.src = this.img;
    this.image.onload = () => {
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(${this.image.src})`);
    }
  }


}
