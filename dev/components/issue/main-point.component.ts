import {Component} from 'angular2/core';
import {VoteCellComponent} from '../../shared/vote-cell.component';

@Component({
    selector: 'ro-main-point',
    templateUrl: 'templates/issue/main-point.tpl.html',
    directives: [VoteCellComponent]
})
export class MainPointComponent {
	
}