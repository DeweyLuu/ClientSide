'use strict';

module.exports = function(app) {
	require('./controllers/heros_controller.js')(app);
};
