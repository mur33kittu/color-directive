import { OnInit, ElementRef, Renderer2 } from "@angular/core";
export declare class ColorDirective implements OnInit {
    private el;
    private renderer;
    textColor: any;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
