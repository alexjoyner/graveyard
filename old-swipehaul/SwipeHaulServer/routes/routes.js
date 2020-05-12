module.exports = function(app) {
	'use strict';
    //File dependendies
    var authRoutes = require('./auth/auth.js');
    var qSetRoutes = require('./qSet/qSet.js');
    var jobRoutes = require('./jobs/jobs.js');
    var imageRoutes = require('./images/images.js');
    var bidRoutes = require('./bids/bids.js');
    var paymentRoutes = require('./payments/payments.js');

    // Routes
    // -----------------------------------
    app.use('/auth', authRoutes);
    app.use('/qSet', qSetRoutes);
    app.use('/jobs', jobRoutes);
    app.use('/images', imageRoutes);
    app.use('/bids', bidRoutes);
    app.use('/payments', paymentRoutes);
};