function drawTree(treeHeight) {
    for ( var i = 1 ; i < 6 ; i++ ) {
    var star = '';
   for ( var j = 1 ; j <= i ; j++ ) {
     star += '*';
   }
    console.log(star);
   }
}
  drawTree();
