const { runBasicQuery, ...processes } = require('./processes');

module.exports = (app) => {
    app.get('/groups/:clientID', runBasicQuery(processes.getGroupsByClientID));
    app.get('/points/:clientID', runBasicQuery(processes.getPointsByClientID));
    app.get('/points/group/:groupID', runBasicQuery(processes.getPointsByGroupID));
}