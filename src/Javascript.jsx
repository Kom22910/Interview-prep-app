

import React, { StrictMode, useState } from 'react';
import Navbar from './Navbar';

const Javascript = () => {

    const QA = [
        {
            id: 1,
            question: "What do you understand about JavaScript? ",
            answer: [
                "1] JavaScript is a high-level, interpreted , dynamic programming language",
                "2] JavaScript is a popular web scripting language used for client-side and server-side development.",
                "3] Its code can be inserted into HTML pages and understood and executed by web browsers.",
                "4] JavaScript also supports object-oriented programming abilities.",
                "5] used for making interactive web pages"
            ]
        },
        {
            id: 2,
            question: " What is Ecmascript in Javascript ?",
            answer: [
                "1] ECMAScript is the standardized specification for JavaScript.",
                "2] It defines the core syntax, data types, objects, and behaviors of the language.",
                "3] set of rules and guidelines for how JavaScript should work. "
            ]
        },
        {
            id: 3,
            question: "What's the difference between JavaScript and Java?",
            answer: [
                "1] JavaScript ==> ",
                "       JavaScript is an object-oriented scripting language.",
                "       JavaScript applications are meant to run inside a web browser.",
                "       JavaScript does not need compilation before running the application code.",
                " 2] Java ==> ",
                "       Java is an object-oriented programming language.",
                "       Java applications are generally made for use in operating systems and virtual machines.",
                "       Java source code needs a compiler before it can be ready to run in realtime."
            ]
        },
        {
            id: 4,
            question: "What are the various data types that exist in JavaScript?",
            answer: [
                " 1] Boolean ==> true & false values",
                " 2] Null ==> For empty or unknown values",
                " 3] Undefined ==> variables that are only declared and not defined or initialized",
                " 4] Number ==> integer and floating-point numbers",
                " 5] String ==> For characters and alphanumeric values",
                " 6] Object ==> collection of similar or different data in key value pair",
                " 7] symbols ==> for unique identifiers for objects"
            ]
        },
        {
            id: 5,
            question: "Features of JavaScript?",
            answer: [
                "1] Lightweight, interpreted programming language",
                "2] Cross-platform compatible",
                "3] Open-source",
                "4] Object-oriented",
                "5] Integration with other backend and frontend technologies",
                "6] Used especially for the development of network-based applications"
            ]
        },
        {
            id: 6,
            question: "What are the scopes of a variable in JavaScript?",
            answer: [
                "1] Global Scope ==> variables are available everywhere in a JavaScript code.",
                "2] Local Scope  ==> are accessible only within a function in which they are defined."
            ]
        },
        {
            id: 7,
            question: " What is the 'this' keyword in JavaScript?",
            answer: [
                "# this keyword ==> - Refers to the currently calling object.",
                "                   - It is commonly used in constructors to assign values to object properties."
            ]
        },
        {
            id: 8,
            question: "What is difference between let , const and var ",
            answer: [
                "1] var ==> ",
                "       function / global scope if declare outside the function",
                "       can be re-declare , re-assigned new value , support hoisting",
                " 2] let ==> ",
                "         Block-scoped (limited to the block where it's declared: if, for, while, etc.).",
                "         cannot re-declare , but can re-assigned new value , not suppoet hoisting",
                " 3] const ==> ",
                "         Block-scoped",
                "         cannot re-assign , re-declare , not support hoisting",
                "         value is constant "
            ]
        },
        {
            id: 9,
            question: " What is spread operator?",
            answer: [
                " # Spread Operator ==> ",
                "       represented by three dots (...) .",
                "       It was introduced in ECMAScript 6 (ES6). ",
                "       The spread operator expands the elements of an iterable into individual elements.",
                " # used for ==> concatenating array , creating shallow copies of array , passing as function argurments , merging , cloning etc"
            ]
        },
        {
            id: 10,
            question: "What is rest operator ?",
            answer: [
                " # Rest operator ==> ",
                "       represented by three dots (...)",
                "       used to collect an indefinite number of arguments into an array.",
                "       It collects all remaining arguments and show in a pure array format",
                "       increase readability and maintainability "
            ]
        },
        {
            id: 11,
            question: "What is default parameters ",
            answer: [
                "1] Default parameters allow you to specify a default value for a function parameter.",
                "2] If a value for that parameter is not provided when the function is called, the default value will be used instead."
            ]
        },
        {
            id: 12,
            question: "What is the deep copy and shallow copy in javascript ?",
            answer: [
                "1] Shallow copy ==>",
                "       Creates a new object or array, but only copies the top-level properties or elements.",
                "       Nested objects or arrays within the original are still referenced by the copy.",
                "       Changes to nested objects in the copy will also affect the original object. ",
                "       done by (...data)",
                "2] Deep Copy ==> ",
                "      Creates a completely new object / array, including copies of all nested objects & arrays. ",
                "      Changes made to the deep copy will not affect the original object.",
                "      eg : converting array object into json data"
            ]
        },
        {
            id: 13,
            question: "What is promise ? ",
            answer: [
                " 1] Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value",
                " 2] solution for callback hell",
                " 3] consist of 3 states    ==> pending , fulfilled , rejected",
                " 4] handled result using   ==> then and catch "
            ]
        },
        {
            id: 14,
            question: " What is Callback function ?",
            answer: [
                "1] Callback function is a function that is passed as an argument to another function and is executed within that other function.",
                "2] Callbacks are crucial for handling asynchronous operations ",
                "3] Callbacks allow you to control the order of execution",
                "4] Define what happens after an asynchronous operation completes."
            ]
        },
        {
            id: 15,
            question: "What is async await in javascript ?",
            answer: [
                "1] async/await is used to avoid callback hell, which occurs when working with multiple APIs and chaining multiple promises.",
                "2] Async ==> declare ans asynchronous function that returns a promise ",
                "3] Await ==> Pauses the execution of the async function until the Promise returned by the expression resolves.",
                "   // await returns the resolved value of promise and wriiten inside the async",
                "   // async await uses try and catch for result handling ",
                "4] 2 states ==> fullfiled or rejected"
            ]
        },
        {
            id: 16,
            question: " What is event bubbling and event capturing in Javascript ?",
            answer: [
                "1] Event Bubbling ==> ",
                "        # When an event occurs on an element ==>",
                "           It first trigger event handler on that element",
                "           Then event 'bubble up' triggering event handler in it's parent element",
                "           then Grandparents and so on untill it reach root of document ",
                "2] Event Capturing ==> ",
                "        # opposite of bubbling ",
                "        # events with root of Dom tree , then 'capture down' to the target element.",
                "// Example ==> \n          <div> \n             <button onclick={()=>alert('hello')}}> Click me </button> \n         </div>",
                " # Event bubbling  ==>  click button   =>   button onclick handler fires   =>   \n                      onclick handler on div fires   =>   onclick handler on document fires",
                " # Event Capturing ==>  documents onclick handler fires    =>   div's onclick handler fires    =>   button's onclick handler fires"
            ]
        },
        {
            id: 17,
            question: "What is higher order function in Javascript",
            answer: [
                "1] Higher order function ==> ",
                "           # It takes another function as an argument",
                "           # Return a function as its result",
                "           # or sometimes both",
                "           # Example ==> map() , filter() takes function as argument "
            ]
        },
        {
            id: 18,
            question: "Explain different types of function in Javascript",
            answer: [
                "1] Named functions or Normal function ==> ",
                "          Have name that used while calling them",
                "          hoisted i.e can be used before declared",
                "          syntax ==> function function_name(){}",
                "2] Anonymous Function ==>",
                "           Do not have name ",
                "           often used as arguments to another functions ",
                "           can be assigned to variables",
                "           syntax ==> let fun = function(){}",
                "3] Arrow Function / lambda function ==>",
                "            more readable ",
                "            ES6 or Modern js feature",
                "            can be used with or without name ",
                "            we use arrow (=>) instead of function ",
                "            don't need { } brackets when there is single line of expression",
                "            while return we compulsory have to put { }",
                "            Arrow functions inherit the this value from the surrounding context",
                "            syntax ==> const fun = () => {}"
            ]
        },
        {
            id: 19,
            question: " Why we use call, apply ,  bind method in Javascript ?",
            answer: [
                "1]  call(), apply(), and bind() are methods that allow you to manipulate the this keyword within a function.",
                "2]  These methods enable you to explicitly set the value of this within a function, overriding its default behavior.",
                "//  call() ==> Immediately invokes a function with a specified this value and arguments passed individually.",
                "//  apply() ==> Immediately invokes a function with a specified this value and arguments passed as an array or array-like object.",
                "//  bind() ==> creates a new function with the specified this value , allowing you to call it later with different arguments , not Immediately invokes"
            ]
        },
        {
            id: 20,
            question: "How many way to create object in Javascript ? ",
            answer: [
                " 1] Object literal ==> normal way ==> const obj = {key : value }",
                " 2] construction function ==> using this keyword ",
                " 3] uisng new keyword ",
                " 4] Object.create() method"
            ]
        },
        {
            id: 21,
            question: " What are the array method? ",
            answer: [
                " 1] push() ==> Adds one or more elements to the end of an array and returns the new length of the array.",
                " 2] pop() ==> Removes the last element from an array and returns that element.",
                " 3] unshift() ==> Adds one or more elements to the beginning of an array and returns the new length of the array. ",
                " 4] shift() ==> Removes the first element from an array and returns that element.",
                " 5] splice() ==> Adds/removes elements from an array at a specific position.",
                " 6] slice() ==>  Creates a shallow copy of a portion of an array.",
                " 7] concat() ==>  Creates a new array by concatenating existing arrays.",
                " 8] join() ==> Joins all elements of an array into a single string, separated by a specified separator",
                " 9] indexOf() ==> Returns the first index at which a given element can be found in the array, or -1 if it is not present.",
                " 10] lastIndexOf() ==> Returns the last index at which a given element can be found in the array, or -1 if it is not present.",
                " 11] includes() ==> Determines whether an array includes a certain value.",
                " 12] find() ==> Returns the first element in the array that satisfies a provided testing function.",
                " 13] filter() ==> Returns the index of the first element in the array that satisfies a provided testing function, or -1 if no such element exists",
                " 14] map() ==> Creates a new array with the results of calling a provided function on every element in the original array.",
                " 15] forEach() ==> Executes a provided function once for each array element.",
                " 16] some() ==> Determines whether at least one element in the array satisfies a specified condition.",
                " 17] every() ==>  Determines whether all the members of an array satisfy the provided testing function.",
                " 18] sort() ==> Sorts the elements of an array in place and returns the sorted array.",
                " 19] reverse() ==>  Reverses the order of the elements in an array. ",
                " 20] length() ==> gives the total element count present in array ."
            ]
        },
        {
            id: 22,
            question: " What are the String Methods ?",
            answer: [
                " 1] length  : Returns the length of a string.",
                " 2] toUpperCase() : convert string in uppercase ",
                " 3] toLowerCase() : Converts a string to lowercase.",
                " 4] charAt(): Returns the character at a specified index.",
                " 5] charCodeAt(): Returns the Unicode value of the character at a specified index.",
                " 6] concat(): Combines two or more strings.",
                " 7] indexOf(): Returns the index of the first occurrence of a specified substring.",
                " 8] lastIndexOf(): Returns the index of the last occurrence of a specified substring. ",
                " 9] slice(): Extracts a part of a string and returns the extracted part in a new string.",
                " 10] substring(): Extracts characters from a string, between two specified indices.",
                " 11] substr(): Extracts characters from a string, beginning at a specified position.",
                " 12] replace(): Replaces occurrences of a specified value with another value.",
                " 13] split(): Splits a string into an array of substrings.",
                ' 14] trim(): Removes whitespace from both ends of a string.',
                " 15] trimStart(): Removes whitespace from the beginning of a string.",
                " 16] trimEnd(): Removes whitespace from the end of a string.",
                " 17] includes(): Determines whether a string contains a specified substring.",
                " 18] repeat(): Repeats a string a specified number of times.",
                " 19] startsWith(): Checks whether a string starts with a specified substring.",
                " 20] endsWith(): Checks whether a string ends with a specified substring.",
                " 21] padStart(): Pads the beginning of a string with another string",
                " 22] padEnd(): Pads the end of a string with another string."
            ]
        },
        {
            id: 23,
            question: " What is Null and undefined in javascript ?",
            answer: [
                "1] Null :: ",
                "       Intentional absence of an object value",
                "       we can explicitly assign value to a variable.",
                "       typeof null is object ",
                " 2]  Undefined :: ",
                "       Absence of value for declared variable ",
                "       It is the default value for uninitialized variables.",
                "       typeof undefined is undefined"
            ]
        },
        {
            id: 24,
            question: " What are the falsy values in javascript ?",
            answer: [
                " 1] false      -> boolean value ",
                " 2] 0     -    -> number zero present false",
                " 3] ''         -> empty string  ",
                " 4] null       -> The null keyword, representing the absence of any object value.",
                " 5] undefined  -> representing an uninitialized value.",
                " 6] NaN        -> Not a Number"
            ]
        },
        {
            id: 25,
            question: " What is setTimeOut and setInterval in Javascript ? ",
            answer: [
                "1] setTimeOut() :: ",
                "       Executes a specified function once after a given delay in milliseconds.",
                "       syntax :: setTimeOut( function , milliseconds)",
                "2] setInterval() :: ",
                "       Executes a specified function repeatedly at every given interval in milliseconds.",
                "       syntax :: setInterval( function , milliseconds ) "
            ]
        },
        {
            id: 26,
            question: " What is object.seal and object.freeze in JavaScript ?",
            answer: [
                "1] Object.seal() :: ",
                "       Prevents the addition or deletion of properties from an object",
                "       we can just modify the value",
                "2] Object.freeze() :: ",
                "       Make an object completely immutable",
                "       cannot addition , deletion and modification in object "
            ]
        },
        {
            id: 27,
            question: " What is difference between map and set in Javascript ? ",
            answer: [
                "1] Map() :: ",
                "        Stores data in key-value pairs",
                "        keys can be of any data types",
                "        can peform array methods in map",
                "2] Set() :: ",
                "       Stores unique values",
                "       No key-value paires only values ",
                "       we cannot perform array method directly to set 1st convert in array "
            ]
        },
        {
            id: 28,
            question: "What is sessionStorage, localStorage , cookie ? ",
            answer: [
                " 1] Cookies :: ",
                "       Small pieces of data sent from a web server to a user's browser and stored on their computer.",
                "       Can be used to track user sessions",
                "       Limited storage capacity (4kb) ",
                "       Can impact performance due to being sent with every request",
                "       Accessible by both server and client ",
                "       Tracking sessions, personalization, user preferences",
                " 2] Localstorage :: ",
                "       Stores data within the user's browser ",
                "       Larger storage capacity than cookies (5mb) ",
                "       Generally better performance",
                "       Accessible only by client",
                "       Storing persistent data like user settings, cached data",
                " 3] SeesionStorage :: ",
                "       Similar to localStorage but data is only available for the duration of a single browser session.",
                "       Data Cleared when session ends ",
                "       Accessible only by client",
                "       Generally better performance",
                "       Storing temporary data like shopping cart items, user preferences within a session"
            ]
        },
        {
            id: 29,
            question: "What is use of json.stringify and json.parse() method in Javascript ? ",
            answer: [
                " 1] JSON.stringify()   ==> converts a Javascript Object/Value to JSON string ",
                " 2] JSON.parse()       ==> converts Json to javascript object/value"
            ]
        },
        {
            id: 30,
            question: "  What are is map, filter , reducer in javascript ? ",
            answer: [
                " o - optional parameter ",
                " 1] Map() ==> ",
                "       Creates a new array by applying a given function to each element of the original array.",
                "       Syntax: array.map(callback(currentValue, index o, array o)=>{})",
                " 2] Filter() ==> ",
                "       reates a new array containing only the elements of the original array that pass a certain test/function",
                "       syntax : array.filter(callback(currentValue, index o, array o))",
                " 3] reduce() ==> ",
                "   Applies a function to an accumulator and each element in the array to reduce it to a single value.",
                "   syntax : array.reduce(callback(accumulator, currentValue, currentIndex o, array o), initialValue o)",
                "   accumulated value from the previous iteration."
            ]
        },
        {
            id: 31,
            question: " What is generator function in Javascript ?",
            answer: [
                " 1] It is special type of function that can be paused and resumed at any point.",
                " 2] It uses the yield keyword to return a value and pause execution",
                " 3] can later be resumed from where it left off.",
                " 4] Control the flow of asynchronous operations.",
                " 5] Generators don't generate all values at once'",
                " Exmaple :: \n         function* num_generator() { yield : 1; yield : 2 ;}",
                "         const generator = num_generator();",
                "         console.log(generator.next().value);    ==> output : 1",
                "         console.log(generator.next().value);    ==> output : 2",
                "         console.log(generator.next().value);    ==> output : undefined ",
            ]
        },
        {
            id: 32,
            question: " How to stop event propagation in Javascript ? ",
            answer: [
                "1] Stop event propagation  ==>     prevent an event from bubbling up to parent elements.",
                "2] stopPropagation()       ==>     this is primary way to stop event propagation "
            ]
        },
        {
            id: 33,
            question: "What is closure in Javascript ? ",
            answer: [
                " 1] It is a technique for implementing lexically scoped name binding in a language with first-class functions.",
                " 2] Closures are functions that have access to variables from the scope in which they were created, even after that scope has normally ended."
            ]
        }
    ]






     const [visited , setUnvisted] = useState([]);
        const activeQuestion = (id) => {
    
            if(visited.includes(id)){
                setUnvisted(visited.filter((item)=> item !== id));
            }
            else{
                setUnvisted([...visited , id]);
            }
    
        }




    return (
        <StrictMode>

            {/* <Navbar /> */}

            <div className="container-fluid p-0 html py-sm-5 py-4">
                <h3 className='text-center fw-bold' >Javascript Questions & Answer</h3>

                <div className="row">

                    <div className="col-10 m-auto mt-sm-5 mt-5">
                        <div className="row">

                            {/* first card */}

                            {
                                QA.map((val) => {

                                    return (
                                        <div className="col-12 card1 mb-5 py-sm-0 py-3 " key={val.id} onClick={() => activeQuestion(val.id)}>

                                            <div className="col-11 m-auto" >
                                                <h4 className='text-center py-sm-3 py-0'>{val.question}</h4>

                                                {
                                                    visited.filter(val.id) &&
                                                    <ul className='col-sm-10 col-12 m-auto py-3 pb-sm-5'>
                                                        {
                                                            val.answer.map((v, index) => {
                                                                return (
                                                                    <li key={index}>
                                                                        <pre>
                                                                            {v}
                                                                        </pre>
                                                                    </li>
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