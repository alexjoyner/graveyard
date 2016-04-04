export class Issue {
	_id: string;
	mainQuestion: string;
    questionDetail: string;
    ups: number;
    downs: number;
    ownerId: string;
    ownerUsername: string;

    constructor(
    	mainQuestion: string, 
    	questionDetail: string, 
    	ups: number, 
		downs: number,
		ownerId: string,
		ownerUsername: string,
		id?: string) {
		this.mainQuestion = mainQuestion;
		this.questionDetail = questionDetail;
		this.ups = ups;
		this.downs = downs;
		this.ownerId = ownerId;
		this.ownerUsername = ownerUsername;
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