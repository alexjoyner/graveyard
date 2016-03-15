import {Injectable} from 'angular2/core';
import {Issue} from './issue';
import {ISSUES} from '../mock/mock-issues';

@Injectable()
export class IssuesService {
	/* GET */
	getAllIssues() {
		return ISSUES;
	}
	getIssue(issueId: string){
		for (var i = ISSUES.length - 1; i >= 0; i--) {
			if(ISSUES[i]._id === issueId){
				return ISSUES[i];
			}
		}
		console.log('No issue found');
	}
	/* POST */
	insertIssue(issue: Issue){
		ISSUES.unshift(issue);
	}
	/* DELETE */
	deleteIssue(issue: Issue){
		ISSUES.splice(ISSUES.indexOf(issue), 1);
	}
}