bezier-curve
============
### Bezier curve interpolation

Bezier curve interpolation of any order of control points of any dimensionality. Uses the [De Casteljau](http://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm) algorithm. Though this module may be useful for educational purposes, for a faster alternative check [this](https://github.com/hughsk/bezier).

Install
-------

```bash
$ npm install bezier-curve
```

Usage
-----

```javascript
var bezier = require('bezier-curve');

var points = [
  [-1.0,  0.0],
  [-0.5,  0.5],
  [ 0.5, -0.5],
  [ 1.0,  0.0]
];

for(var t=0; t<1; t+=0.01) {
  var point = bezier(t, points);
}
```

<img src="http://i.imgur.com/UmYTuIE.png" />
