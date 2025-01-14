




import React, { StrictMode, useState } from 'react'

const NodeQuestion = () => {


    const QA = [
        {
            id: 1,
            question: "What is Node Js ?",
            answer: [
                "1] Node.js is a open source ,JavaScript runtime environment",
                "2] built on Chrome's V8 JavaScript engine ",
                "3] It allows developers to execute JavaScript code outside the browser",
                "4] It gives ability to run JavaScript on the server",
                "5] Node Js is Asynchronous Programming",
                "6] Node.js is designed to build scalable network applications"
            ]
        },
        {
            id: 2,
            question: "Key Feature of NodeJS?",
            answer: [
                "# Node Js is Asynchronous Programming ",
                "1] Non-blocking I/O =>  handling of concurrent requests.",
                "2] Event-driven architecture => allows Node.js to process multiple connections efficiently by triggering callbacks when an event occurs",
                "3] Node js runs on a single thread despite being asynchronous, it uses an event loop to handle requests."
            ]
        },
        {
            id: 3,
            question: "What can Node JS do ?",
            answer: [
                "1] Node.js can generate dynamic page content",
                "2] It can create, open, read, write, delete, and close files on the server",
                "3] Node.js can collect form data",
                "4] It can add, delete, modify data in your database"
            ]
        },
        {
            id: 4,
            question: "What is a Module in Node.js?",
            answer: [
                "1] Modules in Node.js are like JavaScript libraries",
                "2] Module is Building block that can reused within the application",
                "3] Module is a self-contained unit of code that provides a specific functionality",
                "4] Modules can include functions, objects, and variables that are exported from the code files.",
                "5] It is a set of functions ",
                "6] Node.js modules are key to organizing your code in manageable chunks. "
            ]
        },
        {
            id: 5,
            question: 'What are the different types of Module ?',
            answer: [
                "1] Core Module ==> ",
                "        They are built-in modules that come bundled with the Node.js installation.",
                "        Examples: fs, http, path, os, url, crypto.",
                "2] Local Module ==> ",
                "        These are modules that you create within your own project.",
                "        they reside same directory or subdirectories of your main JavaScript file.",
                "3] Third Party Module ==>",
                "       These are modules developed by the community and published on npm (Node Package Manager).",
                "       They offer a wide range of functionalities",
            ]
        },
        {
            id: 6,
            question: "How Node.js Modules Work?",
            answer: [
                "Node.js module is an object that contains the following key properties:",
                "1] module ==>                  he object that represents the current module.",
                "2] module.exports ==>          use to export module like react component ",
                "3] require('module_name') ==>  used to import modules into other modules. "
            ]
        },
        {
            id: 7,
            question: "What are the Datatypes in Node.js ?",
            answer: [
                "1] Boolean",
                "2] Undefined",
                "3] Null",
                "4] String",
                "5] Number",
            ]
        },
        {
            id: 8,
            question: "What is Loose typing ?",
            answer: [
                "# Node.js supports loose typing",
                "# Means you don't need to specify what type of information will be stored in a variable in advance."
            ]
        },
        {
            id: 9,
            question: "What is Buffer in Node JS ?",
            answer: [
                "1] Buffer is Data type to store binary data",
                "2] It is useful when we are reading data from files or receiving packets over the network."
            ]
        },
        {
            id: 10,
            question: "What are the Core modules ?",
            answer: [
                "1] http    ==>     creates an HTTP server",
                "2] url     ==>     module provides utilites for URL resolution and parsing ",
                "3] path    ==>     manipulate file paths",
                "4] events  ==>     Implement custom event handling",
                "5] assert  ==>     set of assertion functions useful for testing",
                "6] fs      ==>     used to handle file system",
                "7] process ==>     provides info and controls about current nodejs process",
                "8] os      ==>     provide info about operation system",
            ]
        },
        {
            id: 11,
            question: "What is HTTP Module ?",
            answer: [
                "1] HTTP Modules provides functionality to create and manage HTTP servers and clients.",
                "2] It includes methods to handle incoming requests, send responses, and interact with HTTP headers and status codes. ",
                "3] It can be used as the backbone for web servers",
                "4] higher-level frameworks like Express.js to simplify this process"
            ]
        },
        {
            id: 12,
            question: "Create a HTTP Server and print 'Hello world' ?",
            answer: [
                "1] import http module : ",
                "           const http = require('http') ",
                "2] declaring (hostname: 127.0.0.1) and (port:8000) : ",
                "           const hostname = '127.0.0.1' ; ",
                "           const port = '8000' ",
                "3] creating server using : http.createServer((request , response)) : ",
                "  // here request object ==> Contains information about the incoming HTTP request (method, headers, URL, etc.).",
                "  // response object ==>  Provides methods for sending the HTTP response back to the client. ",
                "       const server =http.createServer((req , res)=>{",
                "         res.statusCode = 200;",
                "         res.setHeader('Content-Type' , 'text/html');",
                "         res.end('<h1>Hello word</h1>');",
                "       })",
                "4] now server is ready and next step is to use server.listen(hostname , port)",
                "           server.listen(hostname , port )",
                "      //It is to initiate the server's listening process on a specified port and network interface",
                "      //Once called, the server actively waits for incoming HTTP requests from clients.",
                " # port ==> connection endpoint that directs data to a service",
                " # hostname ==> human readable domain name assigned to a host computer"
            ]
        },
        {
            id : 13 ,
            question : "What is MVC ?",
            answer : [
                "M ( Model ) --> ",
                "      # Model represents the structure of data, the format and the constraints with which it is stored.",
                "      # It maintains the data of the application",
                "      # Essentially, it is the database part of the application.",
                "\nV ( view ) -->",
                "      # View is what is presented to the user. ",
                "      # Basically Frontend which utilize the Model and present data",
                "      # the user interacts with the View, which in turn generates the appropriate request",
                "\nC ( Controller ) --> ",
                "      # Controller controls the requests of the user and then generates appropriate response which is fed to the viewer.",
                "      # the user interacts with the View, which in turn generates the appropriate request, this request will be handled by a controller.",
                "      # The controller renders the appropriate view with the model data as a response."
            ]
        },
        {
            id : 14,
            question : "How to Create Folder Structure in Backends and its contents ?",
            answer : [
                "// folder -- and it's content and meaning",
                "\n1]  config --> It contains file which connect the database ",
                "           # db.js --> which contain connection of database",
                "\n2] Model --> It contains file which contains Database / Model / Schema / Structure",
                "           # Eg : Book.js",
                "\n3] Controller --> It contains file which contain Functions on Model/Database ",
                "           # Eg : BookController.js",
                "\n4] Route --> It contains file which contains Operation Like (Get , PUT , DELETE , UPDATE)& routes And its Controller",
                "           # Eg : BookRouter.js",
                "\n5] Server.js --> Main file which in which server is there and utlilize all files in this , SERVER"
            ]
        },
        {
            id : 15 ,
            question : "If I want to use import export so how to Do it ?",
            answer : [
                "Step 1 :  Go to Package.json",
                "\nStep 2 : After the Server.js -> on next line write ",
                "\nStep 3 : 'type' : 'module' ",
                "\n// Then to import package just write --> import AnyName from 'PackageName' ",
                "\n// Then to export one main function  --> export default FunctionName ",
                "To export multiple function -->  export { function1 , fucntion2 }"
            ]
        }
    ]






    const [visited, setUnvisted] = useState([]);
    const activeQuestion = (id) => {

        if (visited.includes(id)) {
            setUnvisted(visited.filter((item) => item !== id));
        }
        else {
            setUnvisted([...visited, id]);
        }

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
                                                    visited.includes(val.id) &&
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

export default NodeQuestion;