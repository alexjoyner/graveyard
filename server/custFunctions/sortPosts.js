/*
 Function using the decay plugin from github to utilize the
 common decay based sorting algorithms and reddits sorting
 algorithms
 */
var decay = require('decay')
    , hotScore = decay.redditHot()
    , wilsonScore = decay.wilsonScore();

/*
 Function receives an array of posts and sorts the posts
 with hotScore
 */
module.exports = {
    'hotSort': function (posts) {
        return posts.sort(function (postA, postB) {
            var aScore = hotScore(postA.ups, postA.dwns, postA.created_at);
            var bScore = hotScore(postB.ups, postB.dwns, postB.created_at);
            return bScore - aScore
        })
    },
    'topSort': function (posts) {
        return posts.sort(function (postA, postB) {
            var aScore = wilsonScore(postA.ups, postA.dwns);
            var bScore = wilsonScore(postB.ups, postB.dwns);
            return bScore - aScore
        })
    }
};