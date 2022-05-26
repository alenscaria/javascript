/*

var hello=function(data)
{
    console.log("Data:"+data)
}

var hey=function(callback)
{
    callback('Music')
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
    callback('Music')  //  hello('AlScaR')
}
hey(hello)


