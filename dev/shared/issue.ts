export class Issue {
	mainQuestion: string;
    questionDetail: string;
    ups: number;
    downs: number;

    constructor(
    	mainQuestion: string, 
    	questionDetail: string, 
    	ups: number, 
    	downs: number){
		this.mainQuestion = mainQuestion;
		this.questionDetail = questionDetail;
		this.ups = ups;
		this.downs = downs;
    }
}