var decay = require('decay')
  , hotScore = decay.redditHot();

module.exports = function(posts){
	return posts.sort(function(postA, postB){
		var aScore = hotScore(postA.upVotes, postA.dnVotes, postA.created_at);
		var bScore = hotScore(postB.upVotes, postB.dnVotes, postB.created_at);
		return bScore - aScore
	})
}