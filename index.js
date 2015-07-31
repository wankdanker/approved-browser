var uap = require('ua-parser-js');

module.exports = ApprovedBrowser;

function ApprovedBrowser(options, cb) {
	options = options || {};

	var ua = uap(options.userAgent || window.navigator.userAgent);
	var browser = ua.browser;

	if (!options[browser.name]) {
		//a minimum version number was not specified for this
		//browser. If strictness has been requested then
		//this browser fails because it is not on the approved
		//list
		if (options.strict) {
			return done(false);
		}
		else {
			return done(true);
		}
	}

	if (browser.major < options[browser.name]) {
		return done(false);
	}

	return done(true);

	function done(result) {
		if (cb) {
			cb(result, ua);
		}

		if (result && options.approved) {
			options.approved(ua);
		}
		else if (!result && options.rejected) {
			options.rejected(ua);
		}

		return result;
	}
}
