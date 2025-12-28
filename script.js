//...........lecture26....java script basics..................//

// alert("Welcome to java script"); 
// console.log("js working")
// document.querySelector("h1").style.color ="blue";
// var name = "nisar";
// let age = 23;
// const country = "india";
// console.log(name,age,country);

// let user = {
//     name: "nisar",
//     email: "nisar@gamil.com",
//     course: "javascript"
// };
// console.table(user);

// let message = "hello javascript";
// console.log(message);


// let str = "javaScript";
// console.log(str.slice(0,4));

// let na = "nisar";
// console.log(`hello,${na}! kuch karoo`);

// let fruits = "apple,banana,grapes";
// console.log(fruits.split(","));

// let text = "i love html";
// console.log(text.replace("html","javascript"));

// let sentence = "javascript is fun!";
// console.log(sentence.includes("fun"));

//............lecture27...java script basics...........//

// console.log("hello world!");
// console.log(10+5);

// console.error("somthing went wrong!");
// console.warn("this is warning!");
// console.info("server started successfully!");

// let user = {
//     name: "nisar",
//     email: "nisar@gamil.com",
//     course: "javascript"
// };
// console.table(user);

// console.group("user info");
// console.log("name:nisar");
// console.log("course:js");
// console.groupEnd();

// console.time("loopTime");
// for(let i = 0; i<100000;i++){}     // isme dout hai
// console.timeEnd("loopTime");

// console.clear();

// let name = "nisar md";
// console.log(name);

// let str = "javascript";
// console.log(str.slice(0,4));

// let name = "nisar";
// console.log(`hello,${name}!welcome to js.`);


// let freuits = "apple,banana,graps";
// console.log(freuits.split(","))

// let sentence = "i love html";
// console.log(sentence.replace("html","javascript"));

// let text = "learning javascript is fun!";
// console.log(text.includes("fun"));


// let a = 10;
// if(a>5){
//     console.log("a is greater than 5")
// }

// 2+3;
// "hello"+"world";

//...........lecture 28.....java script basics...........//

// var a = "nisar";
// let b = "sheriyans";
// const c = "katihar";
// console.log(a,b,c);

// a = "md nisar";
// b = "sheriyans";
// console.log(a,b);

// {
//     let x = 10;
// }
// console.log(x);

// const pi = 3.14159;
// let redius = 7;
// let area = pi * redius * redius;
// console.log(area);

// const baseUrl = "https://api.example.com/data";
// fetch (baseUrl + "/users");
// fetch (baseUrl + "/posts");

// const appName = "my app";
// console.log("welcome to",appName);

// let name = "nisar";
// let age = 25;
// let city = "katihar";
// console.log(name,age,city)

// console.info("user logged in successfully");
// console.warn("your password will expire in 5 days");

// prompt("enter your name:");

// let name = prompt("enter your name:");
// console.log("your name is:",name);

// let name = prompt("enter your name:");
// alert("your name is:"+ name);


// let userInput = prompt("Kuch bhi likho:");
// console.log(typeof userInput);

// let age = prompt("enter your age:");
// console.log(age + 5);


// let msg = "hello nisar";
// console.log(msg);
// console.log(msg.slice(0,5))
// console.log(msg.replace("nisar","sir"));
// let name = "nisar";
// console.log(`hey ${name},welcome to js`);
// console.log(msg.includes("love"));


// console.log("nisar");
// console.log("nisar");
// console.log("nisar");

// console.log("hello")console.log("nisar");

// nisar

/*Ye code console me message print karta hai
JavaScript seekhne ke liye use hota hai
Aur debugging me help karta hai*/

// console.log(5+10); // expression
// let x = 10; //statement

// let y = (5+10)*2;
// console.log(y);
/*👉 kuch cheezein value deti hain (expression)
👉 aur kuch cheezein sirf kaam karti hain (statement)*/

// let age = 23;
// let name = "nisar";
// let isStudent = true;
// let skills = ("html","css","js");
// let user = {city :"katihar"};
// let x = null;
// let y;
// let z = Symbol ("id");

// console.log(typeof age)
// console.log(typeof name)
// console.log(typeof isStudent)
// console.log(typeof skills)
// console.log(typeof user)
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)

// let x = 5;
// let y = x;
// y = 10;
// console.log(x,y);

// let obj1 = {name: "nisar"};
// let obj2 = obj1;
// obj2.name = "md nisar";


// lecture 37 function in java script ...........//

// function aaluparatha(){
//     console.log("paratha")
// }
// aaluparatha();
// aaluparatha();
// aaluparatha();

// function dfgh(age, name){
//     console.log(age, name);
// }
// dfgh(23,"nisar");

function abcd(a,b,...c){
    console.log(a,b,c)
}
abcd(1,2,3,4,5,6,7);