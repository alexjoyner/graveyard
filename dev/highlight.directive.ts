import {Directive, OnInit, ElementRef, Renderer} from 'angular2/core';

@Directive({
	selector: '[myHighlight]'
})

export class HighlightDirective implements OnInit{
	private _defaultColor = 'green';

	constructor(private _elRef: ElementRef, private _renderer: Renderer) {}

	ngOnInit():any {
		this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this._defaultColor);
	}
}