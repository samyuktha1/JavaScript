function inner(value)
{
return "Hello "+value;
}

function outer(a,func)
{
console.log(func(a))
}
outer('Samyu',inner)
