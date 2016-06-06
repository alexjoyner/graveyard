/*
	Function using the decay plugin from github to utilize the
		common decay based sorting algorithms and reddits sorting
		algorithms
*/
var decay = require('decay')
  , hotScore = decay.redditHot();
  
/*
	Function receives an array of posts and sorts the posts
		with hotScore
*/
module.exports = function(posts){
	return posts.sort(function(postA, postB){
		var aScore = hotScore(postA.ups, postA.dwns, postA.created_at);
		var bScore = hotScore(postB.ups, postB.dwns, postB.created_at);
		return bScore - aScore
	})
}