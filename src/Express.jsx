






import React, { StrictMode, useState } from 'react'

const Express = () => {


    const QA = [
        {
            id: 1,
            question: "What is Express Js ?",
            answer: [
                "1] Express.js is a fast , unopinionated minimalist web framework for Node.js",
                "2] It is Third party module in node",
                "3] It makes it easier to organize your application’s functionality with middle ware and routing"
            ]
        },
        {
            id: 2,
            question: "What are the main feature of Express.js ?",
            answer: [
                "1] Web Applications ==> ",
                "       Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
                "\n2] APIs ==> ",
                "       With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.",
                "       here  # Http Utlitly means --> pre-build functions that handles https common tasks like get , post , patch , delete , put, etc",
                "             # Middleware --> These are pieces of code that can intercept and modify requests or responses within your API.",
                "\n3] Performance ==> Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.",
                "       means -Express.js is built on top of Node.js",
                "           # it doesn't try to hide or replace core Node.js features.",
                "           # You can still directly use Node.js's built-in modules or libraries alongside Express.js.",
                "\n4] Middleware ==> ",
                "           Express is a lightweight and flexible routing framework with minimal core features meant to be augmented through the use of Express middleware modules."
            ]
        },
        {
            id: 3,
            question: "What is meant by Middleware modules ?",
            answer: [
                "1] A middleware module refers to a piece of software that sits between the application and the server. ",
                "2] Middleware functions have the ability to intercept incoming requests before they reach the main application logic.",
                "3] They can modify the request object , response object or even terminate request-response lifecycle",
                "4] key uses of Middleware ==> logging , Authentication / Authorization , Error Handling , etc"
            ]
        },
        {
            id: 4,
            question: "Why learn Express ?",
            answer: [
                '1] Simplifies building web servers and APIs.',
                "2] Integrates seamlessly with Node.js.",
                "3] Offers extensive middleware support.",
                "4] Ideal for single-page applications and RESTful APIs."
            ]
        },
        {
            id: 5,
            question: "What is meant by RESTful API ?",
            answer: [
                "1] REST = Representational State Transfer",
                "2] It is an API(Application Programming Interface) that uses the REST architectural style",
                "3] This is a way to design APIs that use common web tech's to access and use data",
                "\n4] Working ==> ",
                "      4.1] RESTful APIs use HTTP request to access data",
                "         # they support common operation like PUT ,PATCH , GET , DELETE",
                "\n      4.2] This operation allow to perform CRUD (Create , Read , Update & Delete) on data",
                "         # we uses RestFul Api because ==> easy, faster , lightweight , more scalable & less bandwidth",
                "\n# Bandwidht ==> amount of data that can be transmitted over a network connection within a given amount of time."
            ]
        },
        {
            id: 6,
            question: "How to install Express ?",
            answer: [
                "1] npm init -y ==>            it initalises and provide entry point and package.json ",
                "\n2] npm i express ==>          it will download express package",
                "\n3] npm --version express ==>  it will give version of express if successfully downloaded in system"
            ]
        },
        {
            id: 7,
            question: "How to write 'Hello World' using Express.js",
            answer: [
                "1] Import express in code and define port : ",
                "       $ const express = require('express');",
                "       $ const PORT = 8000 ;",
                "\n2] Assign express to a varible :",
                "       $ const app = express(); ",
                "\n3] get and send message 'Hello world' :",
                "       $ app.get('/' , (req , res)=>{",
                "            res.send('Hello world')",
                "         });",
                "\n4] now listen the port : ",
                "       $ app.listen(PORT , ()=>{  console.log('Server is running on http://localhost:${PORT}');})",
                "\n5] Hurray !!! Done now just open the link"
            ]
        },
        {
            id: 8,
            question: "Just create a four route (Home , Service , contact , Blog) using express ?",
            answer: [
                "1] First route (Home ) ==>  ",
                "           $ app.listen('/home' , (res , req)=>{ ",
                "               res.status(200)",
                "               res.send('Hello you are in Home page')",
                "            });",
                "\n2] Second Route (Service) ==>",
                "            $ app.listen('/service' , (res , req)=>{ ",
                "                res.status(200)",
                "                res.send('Hello you are in Service page')",
                "             });",
                "\n3] Third Route (Contact) ==>",
                "             $ app.listen('/contact' , (res , req)=>{ ",
                "                  res.status(200)",
                "                  res.send('Hello you are in Contact page')",
                "               });",
                "\n4] Fourth Route (Blog) ==>",
                "              $ app.listen('/blog' , (res , req)=>{ ",
                "                  res.status(200)",
                "                  res.send('Hello you are in Blog page')",
                "               });",

            ]
        },
        {
            id : 9 ,
            question : "Insert json file while status code 200 ?",
            answer : [
                "-> response.status(200).json({ key : [] }) ",
                "\nEg : $ app.get('/getData' , aysnc( request , response )=>{",
                "       try{",
                "            response.status(200).json({ message : 'Inserting data ' , data : [] })",
                "         }",
                "        catch(err)=>{  ",
                "              response.status(500).json( {message : err} ) ;",
                "         }",
                "   }) ;"
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
                <h3 className='text-center fw-bold' >Express.js (Third party Module) in node.js Questions & Answer</h3>

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

export default Express;