export class Support {
	_id: string;
	issue_id: string;
	point_id: string;
    evidence: string;
    detail: string;
    type: string;
	source: string;
	tag: string;
	ups: number;
	downs: number;

	constructor(
		issue_id: string,
		point_id: string,
		evidence: string,
		detail: string,
		type: string,
		source: string,
		tag: string,
		ups: number,
		downs: number){
		this.issue_id = issue_id;
		this.point_id = point_id;
		this.evidence = evidence;
		this.detail = detail;
		this.type = type;
		this.source = source;
		this.tag = tag;
		this.ups = ups;
		this.downs = downs;
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