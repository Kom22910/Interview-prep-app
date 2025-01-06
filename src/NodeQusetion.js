




import React, { StrictMode, useState } from 'react'

const NodeQuestion = () => {


    const QA = [
        {
            id: 1,
            question: "What is Node Js ?",
            answer: [
                "Node.js is a open source ,JavaScript runtime environment",
                "built on Chrome's V8 JavaScript engine ",
                "It allows developers to execute JavaScript code outside the browser",
                "It gives ability to run JavaScript on the server",
                "Node Js is Asynchronous Programming",
                ''
            ]
        },
        {
            id : 2,
            question: "Key Feature of NodeJS?",
            answer : [
                "Node Js is Asynchronous Programming ",
                "1] Non-blocking I/O =>  handling of concurrent requests.",
                "2] Event-driven architecture => allows Node.js to process multiple connections efficiently by triggering callbacks when an event occurs",
                "3] Node js runs on a single thread despite being asynchronous, it uses an event loop to handle requests."
            ]
        },
        {
            id : 3,
            question: "What can Node JS do ?",
            answer : [
                "Node.js can generate dynamic page content",
                "It can create, open, read, write, delete, and close files on the server",
                "Node.js can collect form data",
                "It can add, delete, modify data in your database"
            ]
        },
        {
            id : 4,
            question : "What is a Module in Node.js?",
            answer : [
                "Modules in Node.js are like JavaScript libraries",
                "Module is Building block that can reused within the application",
                "Module is a self-contained unit of code that provides a specific functionality",
                "modules can include functions, objects, and variables that are exported from the code files.",
                "It is a set of functions ",
                "Node.js modules are key to organizing your code in manageable chunks. "
            ]
        },
        {
            id : 5,
            question : 'What are the different types of Module ?',
            answer : [
                "1] Core Module ==> ",
                " They are built-in modules that come bundled with the Node.js installation.",
                " Examples: fs, http, path, os, url, crypto.",
                "2] Local Module ==> ",
                "  These are modules that you create within your own project.",
                " they reside same directory or subdirectories of your main JavaScript file.",
                "3] Third Party Module ==>",
                " hese are modules developed by the community and published on npm (Node Package Manager).",
                "They offer a wide range of functionalities",
            ]
        },
        {
            id : 5,
            question : "How Node.js Modules Work?",
            answer : [
                "Node.js module is an object that contains the following key properties:",
                "1] module ==> he object that represents the current module.",
                "2] module.exports ==> use to export module like react component ",
                "3] require('module_name') ==>  used to import modules into other modules. "
            ]
        },
        {
            id : 6,
            question : "What are the Datatypes in Node.js ?",
            answer : [
                "1] Boolean",
                "2] Undefined",
                "3] Null",
                "4] String",
                "5] Number",
            ]
        },
        {
            id : 7,
            question : "What is Loose typing ?",
            answer : [
                "Node.js supports loose typing",
                "Means you don’t need to specify what type of information will be stored in a variable in advance."
            ]
        },
        {
            id : 8,
            question: "What is Buffer in Node JS ?",
            answer : [
                "Buffer is Data type to store binary data",
                "It is useful when we are reading data from files or receiving packets over the network."
            ]
        },
        {
            id : 9,
            question : "What are the Core modules ?",
            answer : [
                "1] http ==> creates an HTTP server",
                "2] url ==> module provides utilites for URL resolution and parsing ",
                "3] path ==> manipulate file paths",
                "4] events ==> Implement custom event handling",
                "5] assert ==> set of assertion functions useful for testing",
                "6] fs ==> used to handle file system",
                "7] process ==> provides info and controls about current nodejs process",
                "8] os ==>  provide info about operation system",
            ]
        },
        {
            id : 10,
            question : "What is HTTP Module ?",
            answer : [
                "HTTP Modules provides functionality to create and manage HTTP servers and clients.",
                "It includes methods to handle incoming requests, send responses, and interact with HTTP headers and status codes. ",
                "It can be used as the backbone for web servers",
                "higher-level frameworks like Express.js to simplify this process"
            ]
        },
        {
            id : 11,
            question : "Create a HTTP Server and print 'Hello world' ?",
            answer : [
                "1] import http module : ",
                " const http = require('http') ",
                "2] declaring (hostname: 127.0.0.1) and (port:8000) : ",
                " const hostname = '127.0.0.1' ; ",
                " const port = '8000' ",
                "3] creating server using http.createServer((request , response)) : ",
                " here request object ==> Contains information about the incoming HTTP request (method, headers, URL, etc.)." ,
                " response object ==>  Provides methods for sending the HTTP response back to the client. ",
                " const server =http.createServer((req , res)=>{",
                "   res.statusCode = 200;",
                "   res.setHeader('Content-Type' , 'text/html');",
                "   res.end('<h1>Hello word</h1>');",
                "  })",
                "4] now server is ready and next step is to use server.listen(hostname , port)",
                "server.listen(hostname , port )",
                " It is to initiate the server's listening process on a specified port and network interface",
                " Once called, the server actively waits for incoming HTTP requests from clients.",
                " port ==> connection endpoint that directs data to a service",
                " hostname ==> human readable domain name assigned to a host computer"
            ]
        }
    ]






    const [active, setDeactive] = useState(null);

    const activeQuestion = (id) => {
        setDeactive(id === active ? null : id);
    }





    return (
        <StrictMode>

            {/* <Navbar /> */}

            <div className="container-fluid p-0 html py-sm-5 py-4">
                <h3 className='text-center fw-bold' >Node Questions & Answer</h3>

                <div className="row">

                    <div className="col-10 m-auto mt-5">
                        <div className="row">

                            {/* first card */}

                            {
                                QA.map((val) => {

                                    return (
                                        <div className="col-12 card1 mb-5 py-sm-0 py-3" key={val.id} onClick={() => activeQuestion(val.id)}>

                                            <div className="col-11 m-auto" >
                                                <h4 className='text-center py-sm-3 py-0'>{val.question}</h4>

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

export default NodeQuestion;