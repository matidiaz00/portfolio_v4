import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[ImagePreload]'
})
export class ImagePreloadDirective implements OnInit {

  @HostBinding('style.transition') transition;
  @HostBinding('style.opacity') opacity;
  @HostListener('load', ['$event']) onLoad() {
    this.opacity = "1";
  };
  ngOnInit() {
    this.transition = "opacity 0.3s";
    this.opacity = "0";
  }

}
