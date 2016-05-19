export class User {
	_id: string;
	email: string;
	password: string;
	zipcode: number;

    constructor(
		email: string,
		password: string,
		zipcode: number,
		id?: string) {
		this.email = email;
		this.password = password;
		this.zipcode = zipcode;
    }
}