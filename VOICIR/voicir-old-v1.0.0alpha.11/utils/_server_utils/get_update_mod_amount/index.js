/* Function to send back a vote mod amount when the user submits
 * 		an update to old vote*/
export function get_update_mod_amount(oldVoteType, newVoteType){
	var modAmount;
	var modVoteType;
	if (newVoteType === oldVoteType) {
		switch (newVoteType) {
			case 1:
				modAmount = -1;
				break;
			case 2:
				modAmount = +1;
				break;
		}
		modVoteType = 3;
	} else {
		// Checking when the vote is different than the one is stored
		/*
		 CHECK TABLE Structure -> (old,new) Result | !! X's should be cought by new_vote
		 -----------------------------------------
		 OldVoteType    1     2     3
		 NewVoteType    1 X   1 +2  1 +1
		 NewVoteType    2 -2  2 X   2 -1

		 */
		//console.log('newVoteType: ', newVoteType);
		//console.log('oldVoteType: ', oldVoteType);
		switch (oldVoteType) {
			case 1:
				modAmount = -2;
				break;
			case 2:
				modAmount = +2;
				break;
			case 3:
				if (newVoteType === 1)
					modAmount = +1;
				else
					modAmount = -1;
				break;
		}
		//console.log('RESULT: ', modAmount);
		modVoteType = newVoteType;
	}
	return {modAmount: modAmount, modVoteType: modVoteType};
};