
function showEnd()
{
    console.log('end')
}

console.log('Started')
setTimeout(showEnd,1000)    //asynchronous func - continue , doesn't wait for completion

console.log('Started')
setTimeout(showEnd,2000)

console.log('Started')
setTimeout(showEnd,2500)
