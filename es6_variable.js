var n=10
var n=20
console.log(n)  //no error

let h=20
let h=10
console.log(h)  //error


function hello()
{
    var i=0
    if(i===0)
    {
        var hey=20
    }
    console.log(hey)    //prints
}

console.log(hey)    //doesnt prints - out of scope
hello()




function hello()
{
    var i=0
    if(i===0)
    {
        var hey=20
        let hoy=10
    }
    console.log(hey)    //prints - scope within the function
    console.log(hoy)    //doesnt prints -scope within the block only
}

console.log(hey)    //doesnt prints - out of scope
hello()


////////////    const

const hi=100
hi=200  //error - cannot alter a const value

//we can push values to const arrays but cannot change array values directly



