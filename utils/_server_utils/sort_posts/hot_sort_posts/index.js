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
export function hot_sort_posts(posts) {
	return posts.sort(function (postA, postB) {
		var aScore = hotScore(postA.pro_ups + postA.con_ups, postA.dwns, postA.created_at);
		var bScore = hotScore(postB.pro_ups + postB.con_ups, postB.dwns, postB.created_at);
		return bScore - aScore
	})
}