export class Support {
	_id: number;
	owner_id: number;
	issue_id: number;
	point_id: number;
    evidence: string;
    detail: string;
    type: string;
	source: string;
	sourcetype: string;

	constructor(
		issue_id: number,
		point_id: number,
		evidence: string,
		detail: string,
		type: string,
		source: string,
		sourcetype: string,
		owner_id: number) {
		this.issue_id = issue_id;
		this.point_id = point_id;
		this.evidence = evidence;
		this.detail = detail;
		this.type = type;
		this.source = source;
		this.sourcetype = sourcetype;
		this.owner_id = owner_id;
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