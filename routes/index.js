const processes = require('./processes');
module.exports = (app) => {
    app.get('/groups/:clientID', processes.getGroupsByClientID)
}