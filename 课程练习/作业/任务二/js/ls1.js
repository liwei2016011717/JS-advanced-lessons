function unique4(arr){
    array.sort(); 
    var re=[arr[0]];
    for(var i = 1; i < arr.length; i++){
      if( arr[i] !== re[re.length-1])
      {
        re.push(arr[i]);
      }
    }
    return re;
  }