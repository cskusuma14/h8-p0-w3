function tentukanDeretGeometri(arr) {
    
    var check = true;
    var selisih = 0;

    for (var i =0; i<arr.length; i++)
    {       
       selisih = arr[i] / arr[i+1];
       //console.log(selisih)
       break;
    }

    for (var i =0; i<arr.length-1; i++)
    {       
       var temp = arr[i] / arr[i+1];
       
       if(temp != selisih)
       {
           check = false;
           return check;
       }
    }
    return check;
        
  }
  // TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
