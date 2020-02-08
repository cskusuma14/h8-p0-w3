function balikString(kata)
{
    var temp = "";
    for(var i = 0; i < kata.length; i++)
    {
        temp = temp + kata[kata.length-1-i];
    }
    return(temp);
}

function palindrome(kata)
{
    var palindromeKata = balikString(kata);
    var checkKata = false;
    if(kata === palindromeKata)
    {
        checkKata = true;
    }
    return checkKata;
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
