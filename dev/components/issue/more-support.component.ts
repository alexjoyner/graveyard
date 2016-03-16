import {Component, Input} from 'angular2/core';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {Support} from '../../shared/support';
@Component({
    selector: 'ro-more-support',
    templateUrl: 'templates/issue/more-support.tpl.html'
})
export class MoreSupportComponent {
	@Input('supports') supports: Support[];
}