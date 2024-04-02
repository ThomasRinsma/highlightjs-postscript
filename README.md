# a PostScript language grammar for highlight.js

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js. You'll use the minified version found in the `dist` directory.  This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/highlightjs-postscript.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlight.js');
var hljsPostscript = require('highlightjs-postscript');

hljs.registerLanguage("postscript", hljsPostscript);
hljs.highlightAll();
```

## Development

See: https://github.com/highlightjs/highlight.js/blob/main/extra/3RD_PARTY_QUICK_START.md

In short:

1. Symlink into `highlight.js/extra/postscript`
2. Build: `node ./tools/build.js -t cdn`
3. Test: `npm run test`


## License

Highlight.js is released under the MIT License. See LICENSE file for details.


### Author

Thomas Rinsma <thomasrinsma@protonmail.com>


## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>.
- Language templated from [`highlightjs-robots-txt`](https://github.com/highlightjs/highlightjs-robots-txt).
