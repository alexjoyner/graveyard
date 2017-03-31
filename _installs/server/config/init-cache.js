// Node Cache
var node_cache = require('node-cache');
export let roCache = new node_cache({stdTTL: 86400 /* A full day*/, checkperiod: 3600 * 4 /*Every 4 hours*/});
