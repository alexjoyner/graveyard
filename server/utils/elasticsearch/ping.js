import {client} from './client';

const ping = client.ping({
	// ping usually has a 3000ms timeout
	requestTimeout: 3000
}, function (error) {
	if (error) {
		console.trace('elasticsearch cluster is down!');
	} else {
		console.log('All is well');
	}
});

export {ping};
