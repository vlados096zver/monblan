import {
  AfterViewChecked,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  QueryList, ViewChild, ViewChildren
} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements AfterViewChecked {

  @ViewChildren('point')  pointElements: QueryList<ElementRef<HTMLElement>> = new QueryList();
  @ViewChild('headerWrap', {static: false}) headerWrap!: ElementRef;
  @ViewChild('headerBtns', {static: false}) headerBtns!: ElementRef;
  @ViewChild('headerBurger', {static: false}) headerBurger!: ElementRef;
  @HostListener('window:resize') onResize() {
    this.lastVisibleIndex = this.getLastVisibleIndex();
  }
  public lastVisibleIndex = Infinity;
  public showSubmenu = false;
  public menuItems =  [
    {
      title: 'Про нас',
      href: ''
    },
    {
      title: 'Послуги',
      href: ''
    },
    {
      title: 'Як отримати',
      href: '/public/get'
    },
    {
      title: 'Як погасити',
      href: '/public/pay'
    },
    {
      title: 'Калькулятор',
      href: '/public/calculator'
    },
    {
      title: 'Контакти',
      href: ''
    },
    {
      title: 'Захист прав споживачів',
      href: ''
    },
    {
      title: 'Документи',
      href: ''
    }
]

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    const index = this.getLastVisibleIndex();

    if (index === this.lastVisibleIndex) {
      return;
    }

    this.lastVisibleIndex = index;
    this.cdr.detectChanges();
  }

  changeStateSubmenu() {
    this.showSubmenu = !this.showSubmenu;
  }

   getLastVisibleIndex(): number {
    const points = this.pointElements.map((item) => item.nativeElement);
    const headerWrapWidth = this.headerWrap.nativeElement.offsetWidth;
    const headerBurgerWidth = this.headerBurger.nativeElement.offsetWidth;
    const headerBtnsWidth = this.headerBtns.nativeElement.offsetWidth;
    const headerBurgerElement = this.headerBurger.nativeElement;
    const styles = window.getComputedStyle(headerBurgerElement);
    const headerBurgerRight = parseFloat(styles.marginRight);
    const width = headerWrapWidth - headerBurgerWidth - headerBtnsWidth - headerBurgerRight;

    let accumulatedWidth = 0;
    let lastVisibleIndex = 0;

    for (let index = 0; index < points.length; index++) {
      const styles = window.getComputedStyle( points[index]);
      accumulatedWidth += points[index].scrollWidth  + parseFloat(styles.marginRight);
      if (accumulatedWidth >= width) {
        return lastVisibleIndex;
      }
      lastVisibleIndex = index;
    }

    return Infinity;
  }

}
