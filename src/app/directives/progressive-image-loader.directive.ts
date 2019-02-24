import {
  AfterContentInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
  PLATFORM_ID,
  Renderer2
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Directive({
  selector: '[ProgressiveImageLoader]'
})
export class ProgressiveImageLoaderDirective implements AfterContentInit, OnDestroy {

  private nativeElement: HTMLElement;
  private cancelOnError: Function;
  private cancelOnLoad: Function;
  private largeImage;
  acceptedSizes = ['sm','md', 'lg'];
  sizes = { sm: 80, md: 200, lg: 800};

  @Input() fallback: string = '';
  @Input() imgSize: string;
  @Output() emitOnError: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef,
    private renderer: Renderer2){
  }

  ngAfterContentInit(){
    if(this.acceptedSizes.indexOf(this.imgSize) < 0){
      console.log("please input a correct size ['sm','md', 'lg']");
      return;
    }
    this.registerEvents();
  }

  registerEvents(){
    this.nativeElement = this.el.nativeElement;
    this.onError = this.onError.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.cancelOnError = this.renderer.listen(this.nativeElement, 'error', this.onError);
    this.cancelOnLoad = this.renderer.listen(this.nativeElement, 'load', this.onLoad);
  }

  loadLargeImage(url){
    url = url + '_' + this.sizes[this.imgSize] + '.jpg';
    this.largeImage = new Image();
    this.largeImage.src = url;
    this.largeImage.onload = () => {
      //console.log('image loaded, ', this.largeImage.src);
      this.renderer.setAttribute(this.nativeElement, 'src', this.largeImage.src);
    }
  }

  private onError(){
    if(this.nativeElement.getAttribute('src') !== this.fallback){
      this.renderer.setAttribute(this.nativeElement, 'src', this.fallback);
      this.emitOnError.emit();
    }else{
      this.removeOnLoadEvent();
    }
  }

  private onLoad(){
    this.removeOnLoadEvent();
    let src = this.nativeElement.getAttribute('src');
    let srcSplit = src.split(/[_ ]+/);
    let strippedArr = srcSplit; 
    strippedArr.pop();
    let stripped = strippedArr.join('_');
    this.loadLargeImage(stripped);
  }

  private removeErrorEvent() {
    if (this.cancelOnError) {
      this.cancelOnError();
    }
  }

  private removeOnLoadEvent() {
    if (this.cancelOnLoad) {
      this.cancelOnLoad();
    }
  }

  ngOnDestroy(){
    this.removeErrorEvent();
    this.removeOnLoadEvent();
  }

}
