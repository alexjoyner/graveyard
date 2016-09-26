/*
 Function using the decay plugin from github to utilize the
 common decay based sorting algorithms and reddits sorting
 algorithms
 */
var decay = require('decay')
	, wilsonScore = decay.wilsonScore();

/*
 Function receives an array of posts and sorts the posts
 with hotScore
 */
export function top_sort_posts(posts) {
	return posts.sort(function (postA, postB) {
		var aScore = wilsonScore(postA.pro_ups + postA.con_ups, postA.dwns);
		var bScore = wilsonScore(postB.pro_ups + postB.con_ups, postB.dwns);
		return bScore - aScore
	})
}