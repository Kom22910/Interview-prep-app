








import React, { StrictMode, useState } from 'react'

const Mongoose = () => {


    const QA = [
        {
            id: 1,
            question: "What is Mongoose package in Node?",
            answer: [
                "1] This is one of Node.js's most potent external modules.",
                "2] Used To transfer the code and its representation from MongoDB to the Node.js server",
                "3] Mongoose is a MongoDB ODM (Object Database Modelling) tool."
            ]
        },
        {
            id : 2,
            question : "How to import Mongoose Package in node ?",
            answer : [
                "$ npm i mongoose       ==> it will install package",
                "\n$ const mongoose = require('mongoose');  ==> it import package in current module",
            ]
        },
        {
            id : 3,
            question : "How to check Your mongoose version ?",
            answer : [
                "# mongoose.version  ==> ",
                "    -> used to check what version of Mongoose you are using in Node.js",
                "    -> eg : console.log( mongoose.version )"
            ]
        },
        {
            id : 4,
            question : "Why to Learn Mongoose ?",
            answer : [
                "1] Simplifies MongoDB operations with built-in schema validation.",
                "2] Reduces boilerplate code for database interactions.",
                "3] Supports middleware for pre/post operations.",
                "4] Well-suited for Node.js applications."
            ]
        },
        {
            id : 5,
            question : "What is Middleware ?",
            answer : [
                "1] Middleware sits between the client-side and server-side components",
                "2] Middlewar refer to software design pattern where functions are invoked sequentially in a pipeline to handle requests and responses in web applications.",
                "3] It allowing for modularization of request processing logic and enabling cross-cutting concerns such as authentication, logging, error handling, and data transformation."
            ]
        },
        {
            id : 6,
            question : "How to Connect MongoDB With node using Mongoose ?",
            answer : [
                " $ mongoose.connect(' mongodb link ')  ==>  use to connect database to node/backend"
            ]
        },
        {
            id : 7 , 
            question :'How to create Schema in node using Mongoose ?',
            answer : [
                "Schema ==>  a collection of rules that define the structure of data in a collection.",
                "\n# mongoose.Schema({ type : datatype , require : true / false })      --> create schema",
                "\neg : $ const Books = new mongoose.Schema({  \n        type : datatype(string , number , null undefined , etc), \n        require : true (true == mandatory , false == optional) \n     })",
            ]
        },
        {
            id : 8,
            question : "Create a Schema (Name = string require, age = number require , phone = number optional ) using mongoose ?",
            answer : [
                "$ const UserData = new mongoose.Schema({ ",
                "   Name    : { type : String   ,    require : true } ",
                "   age     : {  type : Number   ,    require : true }",
                "   phone   : {  type : Number  ,    require : false }",
                " }) ; "
            ]
        },
        {
            id : 9,
            question : "How to create Model in mongoose ?",
            answer : [
                "// A Mongoose model is a class that represents a collection of documents in your MongoDB database.",
                "// It provides an interface to interact with these documents in an object-oriented way. ",
                "\nSYNTAX ==>      \n         $ const modelName = mongoose.model ( 'modelName' , CreatedSchema ) ; ",
            ]
        },
        {
            id : 10 ,
            question : "Create a Server , schema , model and link with database using Mongoose ? ",
            answer : [
                "1] Import packages and port ==> ",
                "       $ const express = require( 'express' ); ",
                "       $ const mongoose = require( 'mongoose' ) ;",
                "       $ const PORT = 8000 ; ",
                "\n2] Connecting Database ==>",
                "       $ mongoose.connect ( 'mongoDB link ')",
                "           .then( () => { console.log('Database connected successfully !!!')} )",
                "           .catch( (err) => { console.log('Error Found while connecting Dataabase')} )",
                "\n3] Creating Structure or Schema of db ==> ",
                "       $ const UserData = new mongoose.Schema ({",
                "           field1 : { type : String , require : true} , ",
                "           field2 : { type : String , require : true} , ",
                "           field3 : { type : Number , require : true} , ",
                "           field4 : { type : bool , require : false} , ",
                "       }) ; ",
                "\n4} Creating Model ==> ",
                "       $ const user = mongoose.model ( 'user' , UserData ) ; ",
                "\n5 Creating Server ==> ",
                "       $ app.get('/' , (request , response) => {",
                "           response.status(200) ",
                "           response.send('Hello this is from server')",
                "        }) ; ",
                "\n       $ app.get('/getData' , async(request , response) => {",
                "               try{ ",
                "                   const resData = await user.find() ; ",
                "                   response.status(200).json({ data : resData }); ",
                "                } ",
                "                catch(err)=>{ response.status(500).json({ msg : err})  }  ",
                "        }) ; ",
                "\n6] Listen Server ==> ",
                "       $ app.listen(PORT , () => {",
                "           console.log('Server is running on http://localhost:${PORT}') ; ",
                "        });"


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
                <h3 className='text-center fw-bold' >Mongoose Module in Node.js Questions & Answer</h3>

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

export default Mongoose;