export class Issue {
	_id: string;
	mainQuestion: string;
    questionDetail: string;
    ups: number;
    downs: number;

    constructor(
    	mainQuestion: string, 
    	questionDetail: string, 
    	ups: number, 
		downs: number,
    	_id?: string) {
		this._id = (_id) ? _id : guid();
		this.mainQuestion = mainQuestion;
		this.questionDetail = questionDetail;
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