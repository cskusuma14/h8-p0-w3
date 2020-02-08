function tentukanDeretAritmatika(arr) {
    
    var check = true;
    var selisih = 0;

    for (var i =0; i<arr.length; i++)
    {       
       selisih = arr[i] - arr[i+1];
       selisih = Math.abs(selisih);
       break;
    }

    for (var i =0; i<arr.length-1; i++)
    {       
       var temp = arr[i] - arr[i+1];
       temp = Math.abs(temp);

       if(temp != selisih)
       {
           check = false;
           return check;
       }
    }
    return check;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
