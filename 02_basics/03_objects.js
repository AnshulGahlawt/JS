//singleton
//Object.create

//Object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "Anshul",
    "full name" : "Anshul Gahlawt",
    [mySym] : "mykey1",
    age : 21,
    location : "Haryana",
    email :  "Anshul@google.com",
    isloogedIn : false,
    lastLogginDays : ["Monday","Saturday"]
}

// 2 ways to access values
// console.log(JsUser.email);  // can't access full name using it 
// console.log(JsUser["email"]);  // this is good because all keys are considered as string
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Anshul@chatgpt.com"
// console.log(JsUser["email"]);
// Object.freeze(JsUser);
JsUser.email = "Anshul@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello user ${this.name}`);
}

// console.log(JsUser.greeting); // output is [Function (anonymous)]
// console.log(JsUser.greetingTwo);

console.log((JsUser.greeting()));
console.log(JsUser.greetingTwo());




