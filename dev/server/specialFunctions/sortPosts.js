module.exports = function(posts){
	return posts.sort(function(postA, postB){
		return postB.score - postA.score
	})
}