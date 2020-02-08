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
    //kata = kata.toString();
    var palindromeKata = balikString(kata);
    var checkKata = false;

    // console.log(kata);
    // console.log(palindromeKata)

    if(kata === palindromeKata)
    {
        checkKata = true;
    }
    return checkKata;
}

function angkaPalindrome(angka)
{
    var checkPalindrome = false;
    
    while(!checkPalindrome)
    {
        angka++
        //  console.log(angka);

        var stringAngka = angka.toString();
        //  console.log(stringAngka)

        var checkPalindrome = palindrome(stringAngka);
        //  console.log(checkPalindrome)

        if(checkPalindrome)
        {
            checkPalindrome == true;  
            return angka;  
        }
    }
}


console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
