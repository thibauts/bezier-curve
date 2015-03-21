

function interpolate(t, p) {
  var order = p.length - 1; // curve order is number of control point - 1
  var d = p[0].length;      // control point dimensionality

  // create a source vector array copy that will be
  // used to store intermediate results
  var v = p.map(function(point) {
    return point.slice();
  });

  // for each order reduce the control point array by updating
  // each control point with its linear interpolation to the next
  for(var i=order; i>0; i--) {
    for(var j=0; j<order; j++) {
      // interpolate each component
      for(k=0; k<d; k++) {
        v[j][k] = (1 - t) * v[j][k] + t * v[j+1][k];
      }
    }
  }

  return v[0];
}


module.exports = interpolate;