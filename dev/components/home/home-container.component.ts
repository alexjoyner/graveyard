import {Component} from 'angular2/core';
import {HomeIssueComponent} from './home-issue.component';

@Component({
    selector: 'ro-home-container',
    templateUrl: 'templates/home/home-container.tpl.html',
    directives: [HomeIssueComponent]
})
export class HomeContainerComponent{
	siteHeader: string
		 = 'ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
}