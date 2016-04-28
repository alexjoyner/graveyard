export class Support {
	_id: number;
	owner_user_id: number;
	question_id: number;
	point_id: number;
    evidence: string;
    detail: string;
    type: string;
	source: string;
	sourcetype: string;

	constructor(
		question_id: number,
		point_id: number,
		evidence: string,
		detail: string,
		type: string,
		source: string,
		sourcetype: string,
		owner_user_id: number) {
		this.question_id = question_id;
		this.point_id = point_id;
		this.evidence = evidence;
		this.detail = detail;
		this.type = type;
		this.source = source;
		this.sourcetype = sourcetype;
		this.owner_user_id = owner_user_id;
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