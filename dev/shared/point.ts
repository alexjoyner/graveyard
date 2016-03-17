export class Point {
	_id: string;
	issue_id: string;
    problem: string;
    type: string;
    ups: number;
    downs: number;
    tag: string;
    constructor(
		issue_id: string,
		problem: string,
		type: string,
		ups: number,
		downs: number,
		tag: string,
		_id?: string
	){
		this._id = (_id) ? _id : null;
		this.issue_id = issue_id;
		this.problem = problem;
		this.type = type;
		this.ups = ups;
		this.downs = downs;
		this.tag = tag;
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