approved-browser
----------------

Client side detection of required browser versions.

install
-------

```bash
npm install approved-browser
```

usage
-----

```js
var ab = require('approved-browser');

ab({
  Chrome : 37
  , Firefox : 28
  , Safari : 6.1
  , strict : false //if true any browser NOT listed will be rejected too.
}, function (approved, ua) {
	if (!approved) {
		//do thing for unapproved browsers such as...
		window.location.href = '/support/unapproved-browser.html';
	}
});
```

license
-------

MIT
