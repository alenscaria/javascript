class Sample{
    samplehello()
    {
        console.log("Sample Hello")
    }
}
class Hello extends Sample       //inheritence
{
    constructor(num1,num2)
    {
        super()     //to call base class constructor
        this.num1=num1
        this.num2=num2
    }
    hello()
    {
        console.log('Hello friends'+(this.num1+this.num2))
    }
}

let hey=new Hello(10,20)    //obj creation
hey.hello()
hey.samplehello()   //inheritence - calling base class function