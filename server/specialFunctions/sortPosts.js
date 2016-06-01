var decay = require('decay')
  , hotScore = decay.redditHot();

module.exports = function(posts){
	return posts.sort(function(postA, postB){
		var aScore = hotScore(postA.ups, postA.dwns, postA.created_at);
		var bScore = hotScore(postB.ups, postB.dwns, postB.created_at);
		return bScore - aScore
	})
}