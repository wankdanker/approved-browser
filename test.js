var ab = require('./')
	, test = require('tape')
	;

test('test approved user agent', function (t) {
	t.plan(3);

	var ret = ab({
		userAgent : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.91 Safari/537.36'
		, Chrome : 28
		, Safari : 6.1
		, Firefox : 28
		, approved : function (ua) {
			t.ok(ua);
		}
		, rejected : function (ua) {

		}
	}, function (result, ua) {
		t.equal(result, true);
	});

	t.equal(ret, true);

	t.end();
});

test('test rejected user agent', function (t) {
	t.plan(3);

	var ret = ab({
		userAgent : 'Mozilla/5.0 (X11; U; Linux i586; de; rv:5.0) Gecko/20100101 Firefox/5.0'
		, Chrome : 28
		, Safari : 6.1
		, Firefox : 28
		, approved : function (ua) {

		}
		, rejected : function (ua) {
			t.ok(ua);
		}
	}, function (result, ua) {
		t.equal(result, false);
	});

	t.equal(ret, false);

	t.end();
});

test('test rejected strict not-approved user agent', function (t) {
	t.plan(3);

	var ret = ab({
		userAgent : 'Mozilla/5.0 (Macintosh; U; PPC; en-US; mimic; rv:9.3.0) Clecko/20120101 Classilla/CFM'
		, Chrome : 28
		, Safari : 6.1
		, Firefox : 28
		, strict : true
		, approved : function (ua) {

		}
		, rejected : function (ua) {
			t.ok(ua);
		}
	}, function (result, ua) {
		t.equal(result, false);
	});

	t.equal(ret, false);

	t.end();
});

test('test accept non-strict not-approved user agent', function (t) {
	t.plan(3);

	var ret = ab({
		userAgent : 'Mozilla/5.0 (Macintosh; U; PPC; en-US; mimic; rv:9.3.0) Clecko/20120101 Classilla/CFM'
		, Chrome : 28
		, Safari : 6.1
		, Firefox : 28
		, strict : false
		, approved : function (ua) {
			t.ok(ua);
		}
		, rejected : function (ua) {

		}
	}, function (result, ua) {
		t.equal(result, true);
	});

	t.equal(ret, true);

	t.end();
});
