const x:number=101;
console.log(x);


//making the hello world fucntion

function greetPeople(firstName:String){
    console.log("hello," + firstName);
}

greetPeople("rakib");

//create a function which returns the sum of two numbers


//type inference automatically handle what type is returned(it means its a good practice if u mention what will be return after execution)
function sumNumbers(a:number,b:number):number{
    return a+b;
}

const value=sumNumbers(10,20);
console.log(value)


//age is legal or not 
function isLegal(age:number):boolean{
    if(age>=18){
        console.log("yes the age is legal")
        return true;
    }
    else{
        console.log("the age is not legal")
        return false;
    }
}

//even without any declaration it figured out to be boolean this is known as type inference
let y=isLegal(19);

//create a fucntion which takes input as function and return it after one second

function excecuteAfterOne(fn:()=>void){
    return setTimeout(() => {
       fn(); 
    },1000);
}
excecuteAfterOne(function(){
    console.log("hi,after one sec");
})


//some termenalogies of tsconfig 

// rootDir -> selects the root location of ts input
// outDir -> selects the output location after converting ts to js
// NoimplicitAny-> can toggle between true and false which specifies that do i need to define types strictly or will it assume it be itself if i do not mention it 
//remove comment -> can toggle with true and false which removes comments when compiled to js 


//interfaces -> it is used to define the objectwith proper types which comes handy when defining in multiple areas within the codebase

interface User{
    firstName:string,
    lastName: string,
    age:number
}

function isAdult(user:User){
    if(user.age>=18){
        console.log("the user is adult")
    }
    else{
        console.log("the user is not adult")
    }
}

function greetUser(user:User){
    console.log("hello",user.firstName)
}

greetUser({
    firstName:"rakib",
    lastName:"hussain",
    age:18
})

isAdult({
    firstName:"maina",
    lastName:"huss",
    age:17
})


//in the above we created a function which aspects arugment as object and uses interface to deifine type for the object



































