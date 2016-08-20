module.exports = {
    'new-post': function(req, res, next){
        /* To notify the users of a new post
         You will need:
            1) Post Id
            2) Message Body
         Step 1)
            Using the post id, get all of users that are following that post
         Step 2)
            Create a notification
         Step 3)
            Link all the followers, not the creator, to the created notification with a bulk insert
        */
    }
}