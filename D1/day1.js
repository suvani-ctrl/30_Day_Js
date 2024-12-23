
//Write a function createHelloWorld. It should return a new function that always returns "Hello World". 


function createHelloWorld()
{
    function func2()
    {
       return "Hello World";
    }
    return func2;

}

const func3 = createHelloWorld()
{
    console.log(func3());
}
