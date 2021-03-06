import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlighDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'red' )
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "red");
    this.backgroundColor = 'blue'
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = 'red'
  }
}
