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

var Gru=new person("Gru",20,"California")
var Gopi=new person("Gopi",18,"Canada")

Gru.display()
Gopi.display()
