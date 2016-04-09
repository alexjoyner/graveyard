export class Issue {
	_id: number;
	mainquestion: string;
    questiondetail: string;
    ups: number;
    downs: number;
    owner_id: number;

    constructor(
    	mainquestion: string, 
    	questiondetail: string, 
    	ups: number, 
		downs: number,
		owner_id: number,
		id?: number) {
		this.mainquestion = mainquestion;
		this.questiondetail = questiondetail;
		this.ups = ups;
		this.downs = downs;
		this.owner_id = owner_id;
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