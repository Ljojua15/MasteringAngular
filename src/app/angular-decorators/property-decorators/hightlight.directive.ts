import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { log } from 'console';

@Directive({
  selector: '[appHightlight]',
  standalone: true,
})
export class HightlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') bgColor?: string;
  @HostBinding('style.color') textColor?: string;
  @HostBinding('style.fontSize') size?: any;

  @Input() color: 'blue' | 'red' | 'brown' = 'brown';

  constructor(private elementRef: ElementRef) {}

  // @HostListener('mouseover')
  // onMouseOver() {
  //   this.elementRef.nativeElement.style.color = this.color;
  // }

  // @HostListener('mouseout')
  // OnMouseOut() {
  //   this.elementRef.nativeElement.style.color = 'initial';
  //   console.log(1);
  // }

  // @HostListener('click') onToglle() {}

  ngOnInit(): void {
    this.pickColor();
  }

  private colors = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#FFFF33',
    '#FF33A1',
    '#33FFF8',
    '#FF8333',
    '#A833FF',
    '#33FF8E',
    '#FFD733',
  ];

  private pickColor() {
    const colorPick = Math.floor(Math.random() * this.colors.length);
    const colorText = colorPick + 1;

    if (this.bgColor !== this.colors[colorPick]) {
      this.bgColor = this.colors[colorPick];
      this.textColor = this.colors[colorText];
    }

    console.log(colorPick, 'div-color');
    console.log(colorText, 'text-color');
  }

  @HostListener('click') onToggle() {
    console.log('clicked');
  }
}
