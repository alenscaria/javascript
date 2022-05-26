var read=require('readline-sync')

var val1=read.question('Enter first number:')
var val2=read.question('Enter second number:')

if(val1>val2)
{
    console.log('larger is '+val1)
}
else if(val1===val2)
{
    console.log('Equal')
}
else
{
    console.log('larger is '+val2)
}

//m=123
//n=='123'
//console.log(m==n)   true
//console.log(m===n)   false   