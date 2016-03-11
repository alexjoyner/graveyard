export class Point {
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
		tag: string
	){
		this.issue_id = issue_id;
		this.problem = problem;
		this.type = type;
		this.ups = ups;
		this.downs = downs;
		this.tag = tag;
	}
}