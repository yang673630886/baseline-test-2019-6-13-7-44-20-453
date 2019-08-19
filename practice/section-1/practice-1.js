'use strict';

function collectSameElements(collectionA, collectionB) {
  // let temp_list = $.extend([],collectionA)
  // collectionA.forEach(function(value){
  //   if ($.inArray(value,collectionB)==-1){
  //     temp_list.splist($.inArray(value,temp_list),1)
  //   }
  // })
  // return temp_list;

  // let intersect = new Set([...collectionA].filter( x => collectionB.has(x)));
  // return intersect

  var a_b_same = collectionA.filter(function(v){ return collectionB.indexOf(v) > -1 })
  return a_b_same
}
