var person={name:"Alen",age:21,place:"Kottayam",display:function()
{
    console.log("inside func"+this.name)
}}

console.log(person)
console.log(person['age'])

console.log(" ")

person.name="Aleena"
for (x in person)
{
    console.log(x)
}

console.log(" ")

for (x in person)
{
    console.log(person[x])
}

console.log(person.display())

person.dob="12-07-12"
console.log(person)

person.displayAge=function()
{
    console.log(this.age)
}
console.log(person.displayAge())
