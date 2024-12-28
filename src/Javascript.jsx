

import React, { StrictMode, useState } from 'react';
import Navbar from './Navbar';

const Javascript = () => {

    const QA = [
        {
            id: 1,
            question: "What do you understand about JavaScript? ",
            answer: [
                "JavaScript is a high-level, interpreted , dynamic programming language",
                "JavaScript is a popular web scripting language used for client-side and server-side development.",
                "Its code can be inserted into HTML pages and understood and executed by web browsers.",
                "JavaScript also supports object-oriented programming abilities.",
                " used for making interactive web pages"
            ]
        },
        {
            id : 2 , 
            question : " What is Ecmascript in Javascript ?",
            answer : [
                "ECMAScript is the standardized specification for JavaScript.",
                "It defines the core syntax, data types, objects, and behaviors of the language.",
                " set of rules and guidelines for how JavaScript should work. "
            ]
        },
        {
            id : 3 ,
            question : "What's the difference between JavaScript and Java?",
            answer : [
                "1] JavaScript ==> ",
                " - JavaScript is an object-oriented scripting language.",
                " - JavaScript applications are meant to run inside a web browser.",
                " - JavaScript does not need compilation before running the application code.",
                " 2] Java ==> ",
                " - Java is an object-oriented programming language.",
                " - Java applications are generally made for use in operating systems and virtual machines.",
                " - Java source code needs a compiler before it can be ready to run in realtime."
            ]
        },
        {
            id : 4,
            question : "What are the various data types that exist in JavaScript?",
            answer : [
                " Boolean ==> true & false values",
                " Null ==> For empty or unknown values",
                " Undefined ==> variables that are only declared and not defined or initialized",
                " Number ==> integer and floating-point numbers",
                " String ==> For characters and alphanumeric values",
                " Object ==> collection of similar or different data in key value pair",
                " symbols ==> for unique identifiers for objects"
            ]
        },
        {
            id : 5,
            question : "Features of JavaScript?",
            answer : [
                "Lightweight, interpreted programming language",
                "Cross-platform compatible",
                "Open-source",
                "Object-oriented",
                "Integration with other backend and frontend technologies",
                "Used especially for the development of network-based applications"
            ]
        },
        {
            id : 6,
            question : "What are the scopes of a variable in JavaScript?",
            answer : [
                "Global Scope ==> variables are available everywhere in a JavaScript code.",
                "Local Scope ==> are accessible only within a function in which they are defined."
            ]
        },
        {
            id : 7 , 
            question : " What is the 'this' keyword in JavaScript?",
            answer : [
                "this keyword ==> ",
                " refers to the currently calling object.",
                "It is commonly used in constructors to assign values to object properties."
            ]
        },
        {
            id : 8,
            question : "What is difference between let , const and var ",
            answer : [
                "1] var ==> ",
                " - function / global scope if declare outside the function",
                " - can be re-declare , re-assigned new value , support hoisting",
                " 2] let ==> ",
                " -  Block-scoped (limited to the block where it's declared: if, for, while, etc.).",
                " - cannot re-declare , but can re-assigned new value , not suppoet hoisting",
                " 3] const ==> ",
                " - Block-scoped",
                " - cannot re-assign , re-declare , not support hoisting",
                " - value is constant "
            ]
        },
        {
            id : 9,
            question : " What is spread operator?",
            answer : [
                "Spread Operator ==> ",
                " - represented by three dots (...) .",
                " - It was introduced in ECMAScript 6 (ES6). ",
                " - The spread operator expands the elements of an iterable into individual elements.",
                " - used for ==> concatenating array , creating shallow copies of array , passing as function argurments , merging , cloning etc"
            ]
        },
        {
            id : 10 ,
            question : "What is rest operator ?",
            answer : [
                " Rest operator ==> ",
                " - represented by three dots (...)",
                " - used to collect an indefinite number of arguments into an array.",
                " - It collects all remaining arguments and show in a pure array format",
                " - increase readability and maintainability "
            ]
        },
        {
            id : 11 ,
            question : "What is default parameters ",
            answer : [
                "default parameters allow you to specify a default value for a function parameter.",
                "if a value for that parameter is not provided when the function is called, the default value will be used instead."
            ]
        },
        {
            id : 12 ,
            question : "What is the deep copy and shallow copy in javascript ?",
            answer : [
                "1] Shallow copy ==>",
                " - Creates a new object or array, but only copies the top-level properties or elements.",
                " - Nested objects or arrays within the original are still referenced by the copy.",
                " - Changes to nested objects in the copy will also affect the original object. ",
                " - done by (...data)",
                "2] Deep Copy ==> ",
                " - Creates a completely new object or array, including copies of all nested objects and arrays. ",
                " - Changes made to the deep copy will not affect the original object.",
                " - eg : converting array object into json data"
            ]
        },
        {
            id : 13 ,
            question : "What is promise ? ",
            answer : [
                "Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value",
                " solution for callback hell",
                " consist of 3 states ==> pending , fulfilled , rejected",
                " handled result using ==> then and catch "
            ]
        },
        {
            id : 14 ,
            question : " What is Callback function ?",
            answer : [
                " callback function is a function that is passed as an argument to another function and is executed within that other function.",
                " Callbacks are crucial for handling asynchronous operations ",
                "Callbacks allow you to control the order of execution",
                " define what happens after an asynchronous operation completes."
            ]
        },
        {
            id : 15 ,
            question : "What is async await in javascript ?",
            answer : [
                "async/await is used to avoid callback hell, which occurs when working with multiple APIs and chaining multiple promises.",
                "Async ==> declare ans asynchronous function that returns a promise ",
                " Await ==> Pauses the execution of the async function until the Promise returned by the expression resolves.",
                " await returns the resolved value of promise and wriiten inside the async",
                " async await uses try and catch for result handling ",
                " 2 states ==> fullfiled or rejected"
            ]
        },
        {
            id : 16 ,
            question : " What is event bubbling and event capturing in Javascript ?",
            answer : [
                "1] Event Bubbling ==> ",
                " - When an event occurs on an element ==>",
                " -- It first trigger event handler on that element",
                " -- Then event 'bubble up' triggering event handler in it's parent element",
                " -- then Grandparents and so on untill it reach root of document ",
                "2] Event Capturing ==> ",
                " - opposite of bubbling ",
                " - events with root of Dom tree , then 'capture down' to the target element.",
                "Example ==> <div> <button onclick={()=>alert('hello')}}> Click me </button></div>" ,
                " Event bubbling ==> click button => button onclick handler fires => onclick handler on div fires => onclick handler on document fires",
                " Event Capturing ==> documents onclick handler fires => div's onclick handler fires => button's onclick handler fires"
            ]
        },
        {
            id : 17 ,
            question : "What is higher order function in Javascript",
            answer : [
                "Higher order function ==> ",
                " It takes another function as an argument",
                " Return a function as its result",
                " or sometimes both",
                "Example ==> map() , filter() takes function as argument "
            ]
        },
        {
            id : 18 ,
            question : "Explain different types of function in Javascript",
            answer : [
                "1] Named functions or Normal function ==> ",
                " - Have name that used while calling them",
                " - hoisted i.e can be used before declared",
                " - syntax ==> function function_name(){}",
                "2] Anonymous Function ==>",
                " - Do not have name ",
                " - often used as arguments to another functions ",
                " - can be assigned to variables",
                " - syntax ==> let fun = function(){}",
                "3] Arrow Function / lambda function ==>",
                " - more readable ",
                " - ES6 or Modern js feature",
                " - can be used with or without name ",
                " - we use arrow (=>) instead of function ",
                " - don't need { } brackets when there is single line of expression",
                " - while return we compulsory have to put { }",
                " - Arrow functions inherit the this value from the surrounding context",
                " - syntax ==> const fun = () => {}"
            ]
        },
        {
            id : 19 ,
            question : " Why we use call, apply ,  bind method in Javascript ?",
            answer : [
                "call(), apply(), and bind() are methods that allow you to manipulate the this keyword within a function.",
                " These methods enable you to explicitly set the value of this within a function, overriding its default behavior.",
                " - call() ==> Immediately invokes a function with a specified this value and arguments passed individually.",
                " - apply() ==> Immediately invokes a function with a specified this value and arguments passed as an array or array-like object.",
                " - bind() ==> creates a new function with the specified this value , allowing you to call it later with different arguments , not Immediately invokes"
            ]
        },
        {
            id : 20 ,
            question : "How many way to create object in Javascript ? ",
            answer : [
                " 1] Object literal ==> normal way ==> const obj = {key : value }",
                " 2] construction function ==> using this keyword ",
                " 3] uisng new keyword ",
                " 4] Object.create() method"
            ]
        },
        {
            id : 21 ,
            question : " What are the array method? ",
            answer : [
                "1] Array Method ==> ",
                "  push() ==> Adds one or more elements to the end of an array and returns the new length of the array.",
                "  pop() ==> Removes the last element from an array and returns that element.",
                "  unshift() ==> Adds one or more elements to the beginning of an array and returns the new length of the array. ",
                "  shift() ==> Removes the first element from an array and returns that element.",
                "  splice() ==> Adds/removes elements from an array at a specific position.",
                "  slice() ==>  Creates a shallow copy of a portion of an array.",
                "  concat() ==>  Creates a new array by concatenating existing arrays.",
                "  join() ==> Joins all elements of an array into a single string, separated by a specified separator",
                "  indexOf() ==> Returns the first index at which a given element can be found in the array, or -1 if it is not present.",
                "  lastIndexOf() ==> Returns the last index at which a given element can be found in the array, or -1 if it is not present.",
                "  includes() ==> Determines whether an array includes a certain value.",
                "  find() ==> Returns the first element in the array that satisfies a provided testing function.",
                "  filter() ==> Returns the index of the first element in the array that satisfies a provided testing function, or -1 if no such element exists",
                "  map() ==> Creates a new array with the results of calling a provided function on every element in the original array.",
                "  forEach() ==> Executes a provided function once for each array element.",
                "  some() ==> Determines whether at least one element in the array satisfies a specified condition.",
                "  every() ==>  Determines whether all the members of an array satisfy the provided testing function.",
                "  sort() ==> Sorts the elements of an array in place and returns the sorted array.",
                "  reverse() ==>  Reverses the order of the elements in an array. ",
                "  length() ==> gives the total element count present in array ."
            ]
        },
        {
            id : 22,
            question : " What are the String Methods ?",
            answer : [
                " length  : Returns the length of a string.",
                " toUpperCase() : convert string in uppercase ",
                " toLowerCase() : Converts a string to lowercase.",
                " charAt(): Returns the character at a specified index.",
                " charCodeAt(): Returns the Unicode value of the character at a specified index.",
                " concat(): Combines two or more strings.",
                " indexOf(): Returns the index of the first occurrence of a specified substring.",
                " lastIndexOf(): Returns the index of the last occurrence of a specified substring. ",
                " slice(): Extracts a part of a string and returns the extracted part in a new string.",
                " substring(): Extracts characters from a string, between two specified indices.",
                " substr(): Extracts characters from a string, beginning at a specified position.",
                " replace(): Replaces occurrences of a specified value with another value.",
                " split(): Splits a string into an array of substrings.",
                ' trim(): Removes whitespace from both ends of a string.',
                " trimStart(): Removes whitespace from the beginning of a string.",
                " trimEnd(): Removes whitespace from the end of a string.",
                " includes(): Determines whether a string contains a specified substring.",
                " repeat(): Repeats a string a specified number of times.",
                " startsWith(): Checks whether a string starts with a specified substring.",
                " endsWith(): Checks whether a string ends with a specified substring.",
                " padStart(): Pads the beginning of a string with another string",
                " padEnd(): Pads the end of a string with another string."
            ]
        },
        {
            id : 23 ,
            question : " What is Null and undefined in javascript ?",
            answer : [
                "1] Null :: ",
                " -- Intentional absence of an object value",
                " -- we can explicitly assign value to a variable.",
                " -- typeof null is object ",
                " 2]  Undefined :: ",
                " -- Absence of value for declared variable ",
                " -- It is the default value for uninitialized variables.",
                " -- typeof undefined is undefined"
            ]
        },
        {
            id : 24 ,
            question : " What are the falsy values in javascript ?",
            answer : [
                " false --> boolean value ",
                " 0 --> number zero present false",
                " '' --> empty string  ",
                " null --> The null keyword, representing the absence of any object value.",
                " undefined --> representing an uninitialized value.",
                " NaN --> Not a Number"
            ]
        },
        {
            id : 25 ,
            question : " What is setTimeOut and setInterval in Javascript ? ",
            answer : [
                "1] setTimeOut() :: ",
                " -- Executes a specified function once after a given delay in milliseconds.",
                " -- syntax :: setTimeOut( function , milliseconds)",
                "2] setInterval() :: ",
                " -- Executes a specified function repeatedly at every given interval in milliseconds.",
                " -- syntax :: setInterval( function , milliseconds ) "
            ]
        },
        {
            id : 26 ,
            question : " What is object.seal and object.freeze in JavaScript ?",
            answer : [
                "1] Object.seal() :: ",
                " -- Prevents the addition or deletion of properties from an object",
                " -- we can just modify the value",
                "2] Object.freeze() :: ",
                " -- Make an object completely immutable",
                " -- cannot addition , deletion and modification in object "
            ]
        },
        {
            id : 27 ,
            question : " What is difference between map and set in Javascript ? ",
            answer : [
                "1] Map() :: ",
                " -- Stores data in key-value pairs",
                " -- keys can be of any data types",
                " -- can peform array methods in map",
                "2] Set() :: ",
                " -- Stores unique values",
                " -- No key-value paires only values ",
                " -- we cannot perform array method directly to set 1st convert in array "
            ]
        },
        {
            id : 28,
            question : "What is sessionStorage, localStorage , cookie ? ",
            answer : [
                " 1] Cookies :: ",
                " -- Small pieces of data sent from a web server to a user's browser and stored on their computer.",
                " -- Can be used to track user sessions",
                " -- Limited storage capacity (4kb) ",
                " -- Can impact performance due to being sent with every request",
                " -- Accessible by both server and client ",
                " -- Tracking sessions, personalization, user preferences",
                " 2] Localstorage :: ",
                " -- Stores data within the user's browser ",
                " -- Larger storage capacity than cookies (5mb) ",
                " -- Generally better performance",
                " -- Accessible only by client",
                " -- Storing persistent data like user settings, cached data",
                " 3] SeesionStorage :: ",
                " -- Similar to localStorage but data is only available for the duration of a single browser session.",
                " -- Data Cleared when session ends ",
                " -- Accessible only by client",
                " -- Generally better performance",
                " -- Storing temporary data like shopping cart items, user preferences within a session"
            ]
        },
        {
            id : 29,
            question : "What is use of json.stringify and json.parse() method in Javascript ? ",
            answer : [
                " JSON.stringify() ==> converts a Javascript Object/Value to JSON string ",
                " JSON.parse() ==> converts Json to javascript object/value"
            ]        
        },
        {
            id : 30 ,
            question : "  What are is map, filter , reducer in javascript ? ",
            answer : [
                " o - option parameter ",
                " 1] Map() ==> ",
                " -- Creates a new array by applying a given function to each element of the original array.",
                " -- Syntax: array.map(callback(currentValue, index o, array o)=>{})",
                " 2] Filter() ==> ",
                " -- reates a new array containing only the elements of the original array that pass a certain test/function",
                " -- syntax : array.filter(callback(currentValue, index o, array o))",
                " 3] reduce() ==> ",
                " -- Applies a function to an accumulator and each element in the array to reduce it to a single value.",
                " -- syntax : array.reduce(callback(accumulator, currentValue, currentIndex o, array o), initialValue o)",
                " -- accumulated value from the previous iteration."
            ]
        },
        {
            id : 31 ,
            question : " What is generator function in Javascript ?",
            answer : [
                " It is special type of function that can be paused and resumed at any point.",
                " It uses the yield keyword to return a value and pause execution",
                " can later be resumed from where it left off.",
                " Control the flow of asynchronous operations.",
                " Generators don't generate all values at once'",
                " Exmaple :: function* num_generator() { yield : 1; yield : 2 ;}",
                " const generator = num_generator();",
                " console.log(generator.next().value);    ==> output : 1",
                " console.log(generator.next().value);    ==> output : 2",
                " console.log(generator.next().value);    ==> output : undefined ",
            ]
        },
        {
            id : 32 ,
            question : " How to stop event propagation in Javascript ? ",
            answer : [
                "Stop event propagation ==> prevent an event from bubbling up to parent elements.",
                " stopPropagation() ==> this is primary way to stop event propagation "
            ]
        },
        {
            id : 33 ,
            question: "What is closure in Javascript ? "
        }








    ]

    const [active, setDeactive] = useState(null);

    const activeQuestion = (id) => {
        setDeactive(id === active ? null : id);
    }




    return (
        <StrictMode>

            {/* <Navbar /> */}

            <div className="container-fluid p-0 html pt-sm-5 pt-3">
                <h3 className='text-center fw-bold' >Javascript Questions & Answer</h3>

                <div className="row">

                    <div className="col-10 m-auto mt-sm-5 mt-4">
                        <div className="row">

                            {/* first card */}

                            {
                                QA.map((val) => {

                                    return (
                                        <div className="col-12 card1 mb-5" key={val.id} onClick={() => activeQuestion(val.id)}>

                                            <div className="col-11 m-auto" >
                                                <h4 className='text-center py-3'>{val.question}</h4>

                                                {
                                                    active === val.id &&
                                                    <ul className='col-sm-10 col-12 m-auto py-3 pb-sm-5'>
                                                        {
                                                            val.answer.map((v, index) => {
                                                                return (
                                                                    <li key={index}>{v}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>

                                                }

                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                </div>

            </div>


        </StrictMode>
    )
}

export default Javascript;