export class Point {
	_id: number;
	owner_user_id: number;
	issue_id: number;
    problem: string;
    detail: string;
    type: string;
    ups: number;
    downs: number;
    tag: string;
    constructor(
		issue_id: number,
		problem: string,
		detail: string,
		type: string,
		ups: number,
		downs: number,
		tag: string,
		owner_user_id: number,
		id?: number
	){
		this.issue_id = issue_id;
		this.problem = problem;
		this.detail = detail;
		this.type = type;
		this.ups = ups;
		this.downs = downs;
		this.tag = tag;
		this.owner_user_id = owner_user_id;
		(id) ? this._id = id : null;
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