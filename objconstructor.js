function person(name,age,place)
{
    this.name=name
    this.age=age
    this.place=place
    this.display=function()
    {
        console.log("Name:"+this.name+" Age:"+this.age)
    }
}

var Alen=new person("Alen",20,"Kochi")
var Aleena=new person("Aleena",18,"kollam")

Alen.display()
Aleena.display()