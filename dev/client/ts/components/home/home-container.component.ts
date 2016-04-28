import {Component, OnInit} from 'angular2/core';
import {HomeQuestionListComponent} from './home-question-list.component';
import {UsersService} from '../../shared/users.service';
@Component({
    selector: 'ro-home-container',
    templateUrl: 'templates/home/home-container.tpl.html',
    directives: [HomeQuestionListComponent]
})
export class HomeContainerComponent implements OnInit{
	searchText: string = '';
	startQuestion: boolean = false;

	constructor(
		private _usersService: UsersService){}

	ngOnInit():any {
		if(this._usersService.showTut){
			setTimeout(()=>
				document.getElementById("step-1-welcome").checked = true, 1000)
		}
	}
	showTut(){
		this._usersService.showTut = true;
	}
}