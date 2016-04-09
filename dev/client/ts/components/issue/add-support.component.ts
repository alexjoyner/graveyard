import {Component, Input, OnInit, Output, EventEmitter} from 'angular2/core';
import {Support} from '../../shared/support';
import {SupportsService} from '../../shared/supports.service';
import {PointsService} from '../../shared/points.service';
import { UsersService} from '../../shared/users.service';
// Parent is points-list
@Component({
    selector: 'ro-add-support',
    templateUrl: 'templates/issue/add-support.tpl.html'
})
export class AddSupportComponent implements OnInit{
	@Input('pointId') pointId: number;
	@Input('issueId') issueId: number;
	@Input('pointIndex') pointIndex: number;
	@Output() added: EventEmitter<any> = new EventEmitter();
	newSupport: Support;
	private showSource: boolean = false;

	constructor(
		private _supportsService: SupportsService,
		private _pointsService: PointsService,
		private _usersService: UsersService) { };

	createSupport(){
		this._supportsService.insertSupport(this.newSupport)
		.subscribe(
			data => {
				console.log('NEW SUPPORT: ', data);
				this.added.emit(data);
			},
			err => console.log('Error: ', err)
		);
	}
	ngOnInit():any {
		this.newSupport = new Support(
			this.issueId, 
			this.pointId, 
			'', '', '', 'http://', '',
			this._usersService.profile._id);
	}
	setSourceType(sourcetype: string){
		this.newSupport.sourcetype = sourcetype;
		switch(sourcetype){
			case 'opinion':
				this.showSource = false;
				this.newSupport.source = null;
				break
			default:
				this.showSource = true;
				this.newSupport.detail = ''; 
				this.newSupport.source = 'http://';
				break
		}
	}
}




























