export default function (values) {
	const errors = {};
	const {source_type} = values;

	switch (source_type) {
		case 5:
			errors.showSource = false;
			break;
		default:
			errors.showSource = true;
			break;
	}

	return errors;
}
