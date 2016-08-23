// Function to send back a mod amount to the client
// 		when a user makes a new vote
module.exports = function (newVoteType){
	var modAmount;
	switch (newVoteType) {
		case 1:
			modAmount = +1;
			break;
		case 2:
			modAmount = -1;
			break;
	}
	console.log('result: ', modAmount);
	return {modAmount: modAmount, modVoteType: newVoteType};
};