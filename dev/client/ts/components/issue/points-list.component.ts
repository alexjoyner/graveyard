import {Component, Input, OnChanges} from 'angular2/core';
import {RouteParams} from 'angular2/router';
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
export class PointsListComponent{
	showForm: boolean;
	@Input() points: Post[];
	type: string = this._routeParams.get('type');
	issueId: string;
	searchText: string;

	constructor(
		private _routeParams: RouteParams,
		private _smoothScroll: SmoothScroll,
		private _usersService: UsersService) { 
		this.socket = io('/');
		this.socket.emit('change room', { 
			newroom: 'issue' + 
			this._routeParams.get('id') + '/' +
			this.type
		})
		this.socket.on('NewMainPoint', function(point) {
			this.onPointAdded(point)
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
	addSupport(pointIndx: number, supportPost){
		switch (supportPost.point_type_id) {
			case 3:
				supportPost['point_type'] = 'proof';
				break;
			case 4:
				supportPost['point_type'] = 'disproof';
				break;
		}
		switch (supportPost.source_type_id) {
			case 1:
				supportPost['source_type'] = 'meta';
				break;
			case 2:
				supportPost['source_type'] = 'credible';
				break;
			case 3:
				supportPost['source_type'] = 'web';
				break;
			case 4:
				supportPost['source_type'] = 'media';
				break;
			case 5:
				supportPost['source_type'] = 'opinion';
				break;
			case 6:
				supportPost['source_type'] = 'other';
				break;
			default:
				supportPost['source_type'] = 'opinion';
				break;
		}
		if(this.points[pointIndx]['supports'][0] === null){
			this.points[pointIndx]['supports'][0] = supportPost;
		}else{
			this.points[pointIndx]['supports'].unshift(supportPost);
		}
		this.viewAll(pointIndx)
	}
	removePoint(pointIndx: number){
		this.points.splice(pointIndx, 1);
	}
	removeSupport(point: Post, supportIndx: number){
		let pointIndx = this.getPostIndx(point);
		console.log('removing: ', pointIndx);
		this.points[pointIndx]['supports'].splice(supportIndx, 1);
		console.log(this.points[pointIndx]['supports']);
		if (this.points[pointIndx]['supports'].length === 1){
			this.viewAll(pointIndx);
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




