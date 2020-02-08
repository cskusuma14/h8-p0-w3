function targetTerdekat(arr) {
    
    var countX = 0;    
    var result = 0;
    for (var i=0; i<arr.length; i++)
    {
        if (arr[i] === 'x')
        countX++;
       
    }

    var indeksX = [];
    var indeksO = 0;    
    for (var i=0; i<arr.length; i++)
    {
        if (arr[i] === 'x')
        indeksX.push(i);

        if (arr[i] === 'o')
        indeksO = indeksO + i
        
    }

    if(indeksX[0] == 0 && indeksX.length > 1)
    result = Math.abs(indeksX[1] - indeksO);
        
    else
    result = Math.abs(indeksX[0] - indeksO);

    for (var i=0; i<indeksX.length; i++)
    {
        if(result >= Math.abs(indeksX[i] - indeksO))
        {
            result = Math.abs(indeksX[i] - indeksO)
        }
    }

    if(countX == 0)
    return 0;
    else
    return result;

  }
  
//   TEST CASES
 console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
   console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
