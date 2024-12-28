


import React, { StrictMode, useState } from 'react'
import Navbar from './Navbar'

const MongoDB = () => {


    const QA = [
        {
            id: 1,
            question: "What is MongoDB ?",
            answer: [
                " MongoDB is a popular open-source, document-oriented NoSQL database management system. ",
                " open source ==> anybody can use this for free",
                " document-oriented ==>  stores data in flexible, JSON-like documents not in a traditional fashion row and columns",
                " schema-less ==> no strict schema it makes flexible and adaptive data structure",
                " Designed for handling unsturctured and semi - structured data."
            ]
        },
        {
            id : 2,
            question : " Who created MongoDB ?",
            answer : [
                " - 10 Gen was original name of MongoDB",
                " - It is founded in 2007 by Eliot Horowitz & Dwight Marrinam",
                " - In 2013 10 Gen rebranded itself as MongoDB, Inc.",
                " - went public in October 2017 under the ticker symbol MDB."
            ]
        },
        {
            id : 3,
            question : "Difference between MYSQL vs NoSQL database ?",
            answer : [
                "1] SQL ==> ",
                " - SQL Database are relational database",
                " - They use structured table (row columns ) to store data",
                " - Suitable for application with fixed schema and fixed data structures",
                " - Suitable for small dataset and not flexible ",
                "  - example : MySQl , PostgreSQL , Oracle",
                "2] NoSQL ==> ",
                " - NoSQL databases ara non-relational databases",
                " -  They uses unstructured / semi-structured to store data in Json format.",
                " - Ideal for application with dynamic or schemaless data structure",
                " - Suitable for huge dataset and they are adaptive and flexible ",
                " - exmaple : MongoDB , Cassandra , Redis"
            ]
        },
        {
            id : 4,
            question : " What is JSON & BSON ? ",
            answer : [
                " 1] JSON ==> ",
                " - JavaScript Object Notation",
                " - It is a  human and machine-readable format for data interchange .",
                " - JSON objects are associative containers, wherein a string key is mapped to a value",
                " 2] BSON ==> ",
                " - Binary JSON ",
                " - It is a binary representation of JSON file used by MongoDB for efficient storage and retrieval.",
                " - BSON's binary-encoded serialization format encodes type and length information as well",
                " - which allows it to be traversed much more quickly compared to JSON."
            ]
        },
        {
            id : 5 , 
            question : "Feature of MongoDB ? ",
            answer : [
                " 1] Schema-Less ==> No strict schema definition required upfront.",
                " 2] Flexible ",
                " 3] Scalable ",
                " 4] Adaptive",
                " 5] Third-party support"
            ]
        },
        {
            id : 6 ,
            question : " Name Restriction for Database in MongoDB ? ",
            answer : [
                " 1] Names of database are case insensitive",
                " 2] db name cannnot contain any of these character ==> /\. '$*:|?",
                " 3] db names cannot contain null character or empty ",
                " 4] db names must contain less than 64 character"
            ]
        },
        {
            id : 7,
            question : " What Collection  and Name resttriction for collection ? ",
            answer : [
                " 1] Collection ==> ",
                " - A single db is allowed to store mutliple collections ",
                " - Collection stores data but in the form of documents",
                " 2] Name Restriction ==> ",
                " - collection name starts with _ or letter ",
                " - name should not start with number, $ , empty string , null",
                " - max lenght 120 bytes (including db name , dot separator and collection name ) "
            ]
        },
        {
            id : 8,
            question : " what is document & Name Restriction & _id key?",
            answer : [
                " 1] Document ",
                " - The document is created using field-value / key-value pairs",
                " - In MongoDB the data are stored as BSON documents",
                " 2] Name Restriction of key/field ==>  ",
                " - name should be string , cannot be null , cannot start with $",
                " - _id key is reserved use as primay key" 
            ]
        },
        {
            id : 9,
            question : " What is _id field/key in Document ? ",
            answer : [
                " _id Field ==> ",
                " - when we create collection ,  MongoDB automatically creates _id field",
                " - It is unique id , immutable and 1st field in every document ",
                " - value of _id field can be of any BSON type except arrays ",
                " - default value of _id field is ObjectId"
            ]
        },
        {
            id : 10 ,
            question : " How to create Database ? ",
            answer : [
                " use database_name ",
                " - If db name is not exist then it create and switch to it ",
                " - if db name exist then it switch to it "
            ]
        },
        {
            id : 11 ,
            question : "How to list all available databases & collection ",
            answer : [
                " mongod -v ==> check latest version of mongodb",
                " mongosh ==> open mongodb shell ",
                " show dbs ==> lists all available databases in MongoDB instance",
                " show collections ==> lists all collections in that database"
            ]
        },
        {
            id : 12 ,
            question : " How to delete database ? ",
            answer : [
                " db.dropDatabase() ==> ",
                " - Deletes the current Database and all its collections"
            ]
        },
        {
            id : 13 ,
            question : " How to create collection & insert one document in Database ?",
            answer : [
                '1] First create collection then insert document ==>',
                " db.createCollection('collection_name') --> create collection",
                " db.collection_name.insertOne({'key' : 'value' }) --> insert document in collection ",
                "2] No need to create collection we can directly use ==>",
                " db.collection_name.insertOne({}) ==> if collection name is exist then directly insert data or not exist then create",
                " - it only insert one object /document "
            ]
        },
        {
            id : 14,
            question : "How to insert only document ?",
            answer : [
                "using syntax ==> db.cname.insertOne( { 'key' : 'value '}) ",
                " it take only one document or object"
            ]
        },
        {
            id : 15,
            question : "How to insert many document ?",
            answer : [
                "using syntax ==> db.cname.insertMany( [ {'key' : 'value'}, {'k2' : 'v2'} , {} ,  .... ] )",
                "it takes array object"
            ]
        },
        {
            id : 16,
            question : "What does find command do ?",
            answer : [
                "db.collection.find() ==> retrieves all documents from collection",
                "db.collection.findOne() ==> only retrive first document ",
                "If i give condition inside the find(condition) or in findOne(conditon) ==> retrive document only satiesfly condition",
                " conditon is always in key value pair apply for all commands"
            ]
        },
        {
            id : 17,
            question : "How to update value ?",
            answer : [
                "use syntax ==> ",
                " db.collection.updateOne() ==> update only first document",
                " db.collection.updateMany() ==> update mutliple document that matches condition",    
            ]
        },
        {
            id : 18,
            question : "How to delete a document ?",
            answer : [
                " use syntax ==>",
                " db.collection.deleteOne() ==> delete only first document",
                " db.collection.deleteMany() ==> deletes multiple documents that matches condition"
            ]
        },
        {
            id : 19 , 
            question : "How to count document ?",
            answer : [
                " db.collection.countDocuments() ==> counts the number of documents"
            ]
        },
        {
            id : 20 ,
            question : " What are comparison query operators ?",
            answer : [
                "$eq ==> Values are equal",
                "$ne ==> Values are not equal ",
                "$gt ==> Value is greater than given value",
                "$gte ==> Value is greater & equal to given value",
                "$lt ==> Value is smaller than given value",
                "$lte ==> Value is smaller & equal to given value",
                "$in ==> Value is matched within array",
                "$nin ==> Value is not matched within array"
            ]
        },
        {
            id : 21 ,
            question : " How to comparison operator  in MongoDB & why use ?",
            answer : [
                "syntax ==> db.collection.find({'age' : {$lt : 20 }})",
                "We use comparison operator because ==>" ,
                "to filter documents based on specific criteria within their fields.",
                "It allow us to compare the values of fields with specified values, enabling us to retrieve only the relevant data we need."
            ]
        },
        {
            id : 22 ,
            question : " Explain Cursor methods in MongoDB ?",
            answer : [
                "cursors in mongodb are used to efficiently retrieve large results sets from queries, providing control over the data retrieval process.",
                "Cursors are basically used to iterate through query results.",
                " Always written using '.'",
                " 1] count() ==> returns number of documents in the cursor without retrieving them",
                " 2] limit() ==> Restricts the number of documents returned by the cursor ",
                " 3] skip() ==> Skips a specified number of documents in cursor",
                " 4] close() ==> Closes the cursor, releasing any resources associated with it.",
                " -- important for memory management, especially when dealing with large datasets.",
                " 5] sort() ==> sort the document in asce (1) or desc (-1) order",
                " 6] toArray() ==> Retrieves all remaining documents as an array",
                ' 7] next() ==> Retrieves the next document in cursor',
                " 8] hasNext() ==> Checkes if there are more documents to retrive",
                " 9} forEach() ==> Iterates over each document and applies a function "
            ]
        }





    ]






    const [active, setDeactive] = useState(null);

    const activeQuestion = (id) => {
        setDeactive(id === active ? null : id);
    }





    return (
        <StrictMode>

            <Navbar />

            <div className="container-fluid p-0 html pt-5">
                <h3 className='text-center fw-bold' >HTML Questions & Answer</h3>

                <div className="row">

                    <div className="col-10 m-auto mt-5">
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
                                                    <ul className='col-10 m-auto py-3 pb-5'>
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

export default MongoDB;