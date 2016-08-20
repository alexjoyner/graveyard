module.exports = function(app) {
    'use strict';
    require('./posts')(app);
    require('./users')(app);
    require('./favorites')(app);
};