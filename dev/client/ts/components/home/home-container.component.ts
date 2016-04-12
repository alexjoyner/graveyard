import {Component} from 'angular2/core';
import {HomeIssueListComponent} from './home-issue-list.component';
@Component({
    selector: 'ro-home-container',
    templateUrl: 'templates/home/home-container.tpl.html',
    directives: [HomeIssueListComponent]
})
export class HomeContainerComponent{
	searchText: string = '';
	startQuestion: boolean = false;
}