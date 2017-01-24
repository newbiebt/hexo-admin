## step1: install highligt.js

```
npm install highlight.js --save
```

## step2: add `highlight.js` to marked @ post.js

```
var highlight = require('highlight.js')

//...

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    
    highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
});
```

## step3: add highligt css

`www/index.html`

```
<link rel="stylesheet" href="css/highlight/styles/default.css">
```

## step4: change code line-height

`screen.css` add `line-height: 20px;` to `pre`
