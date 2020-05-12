import fs from 'fs';

function readFileData(fileName){
	let file = fs.readFileSync(fileName);
	return JSON.parse(file);
}

export {readFileData};
