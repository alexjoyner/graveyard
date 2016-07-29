export class User {
	_id: number;
	email: string;
	password: string;
	votes: {
		post_id: number,
		vote_type_id: number
	}[];
	favorites: {
		tag_name: string,
		_id: number
	}[];
	follows: number[];

    constructor(
		email: string,
		password: string,
		id?: string) {
		this.email = email;
		this.password = password;
    }
}