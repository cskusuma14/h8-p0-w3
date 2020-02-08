function pasanganTerbesar(num) {
    
    var numbers = [];
    var stringNum = num.toString();
    for(var i=0; i<stringNum.length-1; i++)
    {
        numbers.push(Number(stringNum[i]+stringNum[i+1]))
    }

    var temp=0;
    for(var i=0; i<numbers.length; i++)
    {
        //console.log(numbers[i]);        
        if(numbers[i] > temp)
        {
            temp=numbers[i];
        }
        //console.log(temp);
    }
    return temp;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
