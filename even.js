/*  even numbers

 for(i=0;i<100;i=i+2)
{
    console.log(i)
} 
*/

//Pattern

string=""
for(i=1;i<=5;i++)
{
    for(j=1;j<=i;j++)
    {
        string+="*"
    }
    string+="\n"
}
console.log(string)