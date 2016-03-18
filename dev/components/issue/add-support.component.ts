import {Component, Input, OnInit, Output, EventEmitter} from 'angular2/core';
import {Support} from '../../shared/support';
import {SupportsService} from '../../shared/supports.service';
import {PointsService} from '../../shared/points.service';
// Parent is points-list
@Component({
    selector: 'ro-add-support',
    templateUrl: 'templates/issue/add-support.tpl.html'
})
export class AddSupportComponent implements OnInit{
	@Input('pointId') pointId: string;
	@Input('issueId') issueId: string;
	@Input('pointIndex') pointIndex: number;
	@Output() added: EventEmitter<any> = new EventEmitter();
	newSupport: Support;
	private showSource: boolean = false;

	constructor(
		private _supportsService: SupportsService,
		private _pointsService: PointsService) { };

	createSupport(){
		this._supportsService.insertSupport(this.newSupport)
		.subscribe(
			data => {
				this.added.emit(null);
			},
			err => console.log('Error: ', err)
		);
	}
	ngOnInit():any {
		this.newSupport = new Support(this.issueId, this.pointId, '', '', '', '', 0, 0);
	}
	setTag(tag: string){
		this.newSupport.tag = 'tag';
		switch(tag){
			case 'opinion':
				this.showSource = false;
				this.newSupport.source = 'none';
				break
			default:
				this.showSource = true;
				this.newSupport.source = '';
				break
		}
	}
}




























