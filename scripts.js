function drawTree(treeHeight) {
  var star;
  for ( var i = 1; i <= treeHeight; i++ ) {
    star = '';
    
    for ( var j = 1; j <= i; j++ ) {
       star += '*';
    }
    
    console.log(star);
   }
}

drawTree(6);