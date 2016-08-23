module.exports = function(app) {
    'use strict';
    require('./auth')(app);
    require('./posts')(app);
    require('./users')(app);
    require('./favorites')(app);
    require('./tags')(app);
    require('./follows')(app);
    require('./votes')(app);
};