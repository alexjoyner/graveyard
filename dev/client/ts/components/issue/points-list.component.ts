import {Component, Input, OnChanges, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Post} from '../../shared/post';
import {MainPointComponent} from './main-point.component';
import {TopSupportComponent} from './top-support.component';
import {MoreSupportComponent} from './more-support.component';
import {SearchFilterPipe} from '../../pipes/searchFilter.pipe';
import {AddSupportComponent} from './add-support.component';
import {CreatePointFormComponent} from './create-point-form.component';
import {SmoothScroll} from '../../shared/smooth-scroll.service';
import {WINDOW_PROVIDERS} from '../../shared/window.service';
import {UsersService} from '../../shared/users.service';
@Component({
    selector: 'ro-points-list',
    templateUrl: 'templates/issue/points-list.tpl.html',
    styleUrls: ['styles/points-list.css'],
    directives: [MainPointComponent, TopSupportComponent, MoreSupportComponent, AddSupportComponent, CreatePointFormComponent],
    providers: [SmoothScroll, WINDOW_PROVIDERS],
    pipes: [SearchFilterPipe]
})
export class PointsListComponent implements OnInit{
	showForm: boolean;
	@Input() points: Post[];
	type: string = this._routeParams.get('type');
	issueId: string = this._routeParams.get('id');
	searchText: string;

	constructor(
		private _routeParams: RouteParams,
		private _smoothScroll: SmoothScroll,
		private _usersService: UsersService,
		private _router: Router) { 
	}
	ngOnInit():any{
		this.socket = io('/');
		this.socket.emit('change room', { 
			newroom: 'issue' + 
			this._routeParams.get('id') + '/' +
			this.type
		})
		this.socket.on('NewPost', function(postData) {
			switch(postData.post_type_id){
				case 2:
					this.onPointAdded(postData);
					break;
				case 3:
					this.onSupportAdded(postData);
					break;
			}
        }.bind(this));
        this.socket.on('disconnect', function(){
        	console.log('DISCONNECTED');
        	location.reload();
        });
		this.socket.on('DeletedPost', function(postData) {
			console.log('Delete postData: ', postData);
			switch(postData.post_type_id){
				case 1: // issue
					console.log('GO BACK HOME');
					this._router.navigate(['Home']);
					break;
				case 2: // main point
					for (var i = this.points.length - 1; i >= 0; i--) {
						if(this.points[i]._id === +postData.main_point_id){
							this.points.splice(i, 1);
						}
					}	
					break;
				case 3: // support point
					this.removeSupport(
						postData.main_point_id, postData.support_id);
					break;
			}
        }.bind(this));
	}
	getPostIndx(point: Post): number{
		return this.points.indexOf(point);
	}
	onPointAdded(point: Post){
		point['supports'] = [null];
		this.points.unshift(point);
		if(this.isOwner(point.owner_user_id)){
			this.searchText = ''; 
			this.showForm = false;
			setTimeout(() => {
				this.addEvidence(point);
				this.smoothScroll('point' + 0, 20);
			}, 600);
		}
	}
	isOwner(id: number) {
		return (id === this._usersService.profile._id);
	}
	onSupportAdded(supportPost: Post){
		let pointIndx: number;
		// Search for which point the new support belongs to
		for (var i = this.points.length - 1; i >= 0; i--) {
			if(this.points[i]._id === supportPost.parent_id){
				pointIndx = i;
			}
		}

		// External Func: Add necessary point data because
		//		we didn't join the data on the server
		let preparedPoint = prepareSupportPoint(supportPost);

		if(this.points[pointIndx]['supports'][0] === null){
			this.points[pointIndx]['supports'][0] = preparedPoint;
		}else{
			this.points[pointIndx]['supports'].unshift(preparedPoint);
		}
		this.viewAll(pointIndx)
	}
	removePoint(pointIndx: number){
		this.points.splice(pointIndx, 1);
	}
	removeSupport(pointId: number, supportId: number){
		let success: boolean = false;
		let pointIndx: number;
		let supportIndx: number
		for (let i = this.points.length - 1; i >= 0; i--) {
			if(this.points[i]._id === pointId){
				for (let j = this.points[i]['supports'].length - 1; j >= 0; j--) {
					if(this.points[i]['supports'][j]._id === supportId){
						success = true;
						pointIndx = i;
						supportIndx = j;
					}
				}
			}
		}
		if(success){
			console.log('removing: ', pointIndx + ' , ' + supportIndx);
			this.points[pointIndx]['supports'].splice(supportIndx, 1);
			console.log(this.points[pointIndx]['supports']);
			if (this.points[pointIndx]['supports'].length === 1){
				/*
					Catch when all but one support point 
					has been deleted
				*/
				this.points[pointIndx]['viewAll'] = false;
			}
		}
	}
	viewAll(index: number){
		if (this.points[index]['viewAll']){
			this.points[index]['viewAll'] = !(this.points[index]['viewAll']);
		}else{
			this.points[index]['viewAll'] = true;
		}
		this.points[index]['addEvidence'] = false;
	}
	addEvidence(point: Post) {
		let index = this.getPostIndx(point);
		if (this.points[index]['addEvidence']) {
			this.points[index]['addEvidence'] = !(this.points[index]['addEvidence']);
		} else {
			this.points[index]['addEvidence'] = true;
		}
		this.points[index]['viewAll'] = false;
	}
	smoothScroll(eid, offset: number){
		this._smoothScroll.smoothScroll(eid, offset);
	}
}
function prepareSupportPoint(supportPoint: Post){
	switch (supportPoint.point_type_id) {
		case 3:
			supportPoint['point_type'] = 'proof';
			break;
		case 4:
			supportPoint['point_type'] = 'disproof';
			break;
	}
	switch (supportPoint.source_type_id) {
		case 1:
			supportPoint['source_type'] = 'meta';
			break;
		case 2:
			supportPoint['source_type'] = 'credible';
			break;
		case 3:
			supportPoint['source_type'] = 'web';
			break;
		case 4:
			supportPoint['source_type'] = 'media';
			break;
		case 5:
			supportPoint['source_type'] = 'opinion';
			break;
		case 6:
			supportPoint['source_type'] = 'other';
			break;
		default:
			supportPoint['source_type'] = 'opinion';
			break;
	}
	return supportPoint;
}




