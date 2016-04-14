export class Post {
	_id: number;
	issue_id: number = null;
	post_type_id: number;
	parent_id: number = null;
	point_type_id: number = null;
	title: string;
    detail: string = null;
    score: number = null;
    owner_user_id: number = null;
    source: string = null;
    source_type_id: number = null;

    constructor(
    	title: string,
		post_type_id: number,
		parent_id?: number,
		point_type_id?: number,
		detail?: string,
		source?: string,
		source_type_id?: number,
		_id?: number) {
		this.title = title;
		this.post_type_id = post_type_id;
		(detail) ? this.detail = detail : null;
		(source) ? this.source = source : null;
		(source_type_id)? this.source_type_id = source_type_id : null;
		(point_type_id)? this.point_type_id = point_type_id : null;
		(parent_id)? this.parent_id = parent_id : null;
		(_id)? this._id = _id : null;
    }
}
function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
}