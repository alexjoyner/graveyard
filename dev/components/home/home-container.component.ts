import {Component} from 'angular2/core';
import {HomeIssueListComponent} from './home-issue-list.component';
import {NewIssueForm} from './new-issue-form.component';
@Component({
    selector: 'ro-home-container',
    templateUrl: 'templates/home/home-container.tpl.html',
    directives: [HomeIssueListComponent, NewIssueForm]
})
export class HomeContainerComponent{
	siteHeader: string
		 = 'ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
}