import {Injectable} from 'angular2/core';
import {Issue} from './issue';
import {ISSUES} from '../mock/mock-issues';

@Injectable()
export class IssuesService {
	/* GET */
	getAllIssues() {
		return ISSUES;
	}
	/* POST */
	/* DELETE */
}