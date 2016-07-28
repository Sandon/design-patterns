forEach = function( ary, fn ){
  for ( var i = 0, l = ary.length; i < l; i++ ){
    var c = ary[ i ];
    if ( fn.call( c, i, c ) === false ){
      return false;
    }
  }
}

forEach( [1,2,3], function( i, n ){
  alert ( n*2 )
} )

forEach( [1,2,3], function( i, n ){
  alert ( n*3 )
} )