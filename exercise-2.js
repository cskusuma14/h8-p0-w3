function balikString(kata)
{
    var temp = "";
    for(var i = 0; i < kata.length; i++)
    {
        temp = temp + kata[kata.length-1-i];
    }
    return(temp);
}

console.log(balikString("hello world!"));
