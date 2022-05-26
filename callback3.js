/*

var hello=function(data)
{
    console.log("Data:"+data)
}

var hey=function(callback)
{
    callback('AlScaR')
}
hey(hello)

*/

//OR


function hello(data)
{
    console.log("Data:"+data)
}

function hey(callback)  // callback=hello
{
    callback('AlScaR')  //  hello('AlScaR')
}
hey(hello)


