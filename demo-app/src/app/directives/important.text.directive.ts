import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appImportant]'
})
export class ImportantTextDirective implements OnInit {
    @Input('appImportant') fontSize: string = "24px"
    constructor(private el: ElementRef) { }
    ngOnInit() {
        this.el.nativeElement.style.fontWeight = "bold"
        this.el.nativeElement.style.color = "red"
        this.el.nativeElement.style.fontSize = this.fontSize;
    }

    @HostListener("click")
    itemClicked() {
        this.el.nativeElement.style.borderColor = "green"
        this.el.nativeElement.style.borderWidth = '2px'
        this.el.nativeElement.style.borderStyle = "solid"
    }
}