import {Component, Input} from 'angular2/core';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {Support} from '../../shared/support'
@Component({
    selector: 'ro-top-support',
    templateUrl: 'templates/issue/top-support.tpl.html',
    directives: [VoteCellComponent]
})
export class TopSupportComponent {
	@Input('support') support: Support;
}