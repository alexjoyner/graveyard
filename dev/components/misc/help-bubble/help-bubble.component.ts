import {Component, Input, Output, EventEmitter, ElementRef} from "angular2/core";

@Component({
    selector: 'dropdown',
    template: `
    <br>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="#value of values">
        <a (click)="select(value)">{{value.title}}</a>
      </li>
    </ul>
  `,
    directives: [ROUTER_DIRECTIVES]
})
export class DropdownComponent {
    @Input()
    values:Post[];

    @Input()
    value:string[];

    @Output()
    valueChange: EventEmitter<any>;

    constructor() {
        this.valueChange = new EventEmitter();
    }

    select(value) {
        this.valueChange.emit(value);
    }
}