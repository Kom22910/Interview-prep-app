


import React, { StrictMode, useState } from 'react'

const MongoDB = () => {


    const QA = [
        {
            id: 1,
            question: "What is MongoDB ?",
            answer: [
                " 1] MongoDB is a popular open-source, document-oriented NoSQL database management system. ",
                " 2] open source ==> anybody can use this for free",
                " 3] document-oriented ==>  stores data in flexible, JSON-like documents not in a traditional fashion row and columns",
                " 4] schema-less ==> no strict schema it makes flexible and adaptive data structure",
                " 3] Designed for handling unsturctured and semi - structured data."
            ]
        },
        {
            id: 2,
            question: " Who created MongoDB ?",
            answer: [
                " # 10 Gen was original name of MongoDB",
                " # It is founded in 2007 by Eliot Horowitz & Dwight Marrinam",
                " # In 2013 10 Gen rebranded itself as MongoDB, Inc.",
                " # went public in October 2017 under the ticker symbol MDB."
            ]
        },
        {
            id: 3,
            question: "Difference between MYSQL vs NoSQL database ?",
            answer: [
                "1] SQL ==> ",
                "       - SQL Database are relational database",
                "       - They use structured table (row columns ) to store data",
                "       - Suitable for application with fixed schema and fixed data structures",
                "       - Suitable for small dataset and not flexible ",
                "       -  example : MySQl , PostgreSQL , Oracle",
                "2] NoSQL ==> ",
                "       - NoSQL databases ara non-relational databases",
                "       - They uses unstructured / semi-structured to store data in Json format.",
                "       - Ideal for application with dynamic or schemaless data structure",
                "       - Suitable for huge dataset and they are adaptive and flexible ",
                "       - exmaple : MongoDB , Cassandra , Redis"
            ]
        },
        {
            id: 4,
            question: " What is JSON & BSON ? ",
            answer: [
                " 1] JSON ==> ",
                "       - JavaScript Object Notation",
                "       - It is a  human and machine-readable format for data interchange .",
                "       - JSON objects are associative containers, wherein a string key is mapped to a value",
                " 2] BSON ==> ",
                "       - Binary JSON ",
                "       - It is a binary representation of JSON file used by MongoDB for efficient storage and retrieval.",
                "       - BSON's binary-encoded serialization format encodes type and length information as well",
                "       - which allows it to be traversed much more quickly compared to JSON."
            ]
        },
        {
            id: 5,
            question: "Feature of MongoDB ? ",
            answer: [
                " 1] Schema-Less ==> No strict schema definition required upfront.",
                " 2] Flexible ",
                " 3] Scalable ",
                " 4] Adaptive",
                " 5] Third-party support"
            ]
        },
        {
            id: 6,
            question: " Name Restriction for Database in MongoDB ? ",
            answer: [
                " 1] Names of database are case insensitive",
                " 2] db name cannnot contain any of these character ==>  / \ . ' $ * : | ?",
                " 3] db names cannot contain null character or empty ",
                " 4] db names must contain less than 64 character"
            ]
        },
        {
            id: 7,
            question: " What Collection  and Name resttriction for collection ? ",
            answer: [
                " 1] Collection ==> ",
                "           - A single db is allowed to store mutliple collections ",
                "           - Collection stores data but in the form of documents",
                " 2] Name Restriction ==> ",
                "           - collection name starts with _ or letter ",
                "           - name should not start with number, $ , empty string , null",
                "           - max lenght 120 bytes (including db name , dot separator and collection name ) "
            ]
        },
        {
            id: 8,
            question: " what is document & Name Restriction & _id key?",
            answer: [
                " 1] Document ",
                "       - The document is created using field-value / key-value pairs",
                "       - In MongoDB the data are stored as BSON documents",
                " 2] Name Restriction of key/field ==>  ",
                "       - name should be string , cannot be null , cannot start with $",
                "       _id key is reserved use as primay key"
            ]
        },
        {
            id: 9,
            question: " What is _id field/key in Document ? ",
            answer: [
                " _id Field ==> ",
                "         - when we create collection ,  MongoDB automatically creates _id field",
                "         - It is unique id , immutable and 1st field in every document ",
                "         - value of _id field can be of any BSON type except arrays ",
                "         - default value of _id field is ObjectId"
            ]
        },
        {
            id: 10,
            question: " How to create Database ? ",
            answer: [
                " $ use database_name ==>  ",
                "             - If db name is not exist then it create and switch to it ",
                "             - if db name exist then it switch to it "
            ]
        },
        {
            id: 11,
            question: "How to list all available databases & collection ",
            answer: [
                " 1] $ mongod -v          ==> check latest version of mongodb",
                " 2] $ mongosh            ==> open mongodb shell ",
                " 3] $ show dbs           ==> lists all available databases in MongoDB instance",
                " 4] $ show collections   ==> lists all collections in that database"
            ]
        },
        {
            id: 12,
            question: " How to delete database ? ",
            answer: [
                " $ db.dropDatabase() ==> ",
                "      - Deletes the current Database and all its collections"
            ]
        },
        {
            id: 13,
            question: " How to create collection & insert one document in Database ?",
            answer: [
                '1] First create collection then insert document ==>',
                "      $ db.createCollection('collection_name')              --> create collection",
                "      $ db.collection_name.insertOne({'key' : 'value' })    --> insert document in collection ",
                "\n2] No need to create collection we can directly use  :: ",
                "      $ db.collection_name.insertOne({ })   ==>  ",
                "               - if collection name is exist then directly insert data or not exist then create , it only insert one object /document "
            ]
        },
        {
            id: 14,
            question: "How to insert only document ?",
            answer: [
                "$ db.collectionName.insertOne( { 'key' : 'value '})  ==> ",
                "       - it take only one document or object"
            ]
        },
        {
            id: 15,
            question: "How to insert many document ?",
            answer: [
                "$ db.collectionName.insertMany( [ {'key' : 'value'}, {'k2' : 'v2'} , {} ,  .... ] )",
                "       - it takes array object"
            ]
        },
        {
            id: 16,
            question: "What does find command do ?",
            answer: [
                " $ db.collection.find()    ==> retrieves all documents from collection",
                " $ db.collection.findOne() ==> only retrive first document ",
                "// If i give condition inside the find(condition) / findOne(conditon) => retrive document only satiesfly condition",
                "// conditon is always in key value pair apply for all commands"
            ]
        },
        {
            id: 17,
            question: "How to update value ?",
            answer: [
                "use syntax ==> ",
                "   $ db.collection.updateOne()  ==> update only first document",
                "   $ db.collection.updateMany() ==> update mutliple document that matches condition",
            ]
        },
        {
            id: 18,
            question: "How to delete a document ?",
            answer: [
                " use syntax ==>",
                "       $ db.collection.deleteOne()  ==> delete only first document",
                "       $ db.collection.deleteMany() ==> deletes multiple documents that matches condition"
            ]
        },
        {
            id: 19,
            question: "How to count document ?",
            answer: [
                " $ db.collection.countDocuments() ==> counts the number of documents",
                " or using cursor ==>  $db.collection.find().count()"
            ]
        },
        {
            id: 20,
            question: " What are comparison query operators ?",
            answer: [
                "$eq    ==>     Values are equal",
                "$ne    ==>     Values are not equal ",
                "$gt    ==>     Value is greater than given value",
                "$gte   ==>     Value is greater & equal to given value",
                "$lt    ==>     Value is smaller than given value",
                "$lte   ==>     Value is smaller & equal to given value",
                "$in    ==>     Value is matched within array",
                "$nin   ==>     Value is not matched within array"
            ]
        },
        {
            id: 21,
            question: " How to comparison operator  in MongoDB & why use ?",
            answer: [
                "$ db.collection.find( { 'age' : {$lt : 20 } } )",
                " // We use comparison operator because ==>",
                " // to filter documents based on specific criteria within their fields.",
                " // It allow us to compare the values of fields with specified values, enabling us to retrieve only the relevant data we need."
            ]
        },
        {
            id: 22,
            question: " Explain Cursor methods in MongoDB ?",
            answer: [
                "# Cursors in mongodb are used to efficiently retrieve large results sets from queries, providing control over the data retrieval process.",
                "# Cursors are basically used to iterate through query results.",
                " Always written using '.' after find() or aggregate()",
                " 1] count() ==> returns number of documents in the cursor without retrieving them",
                " 2] limit() ==> Restricts the number of documents returned by the cursor ",
                " 3] skip() ==> Skips a specified number of documents in cursor",
                " 4] close() ==> Closes the cursor, releasing any resources associated with it.",
                " 5] sort() ==> sort the document in asce (1) or desc (-1) order",
                " 6] toArray() ==> Retrieves all remaining documents as an array",
                ' 7] next() ==> Retrieves the next document in cursor',
                " 8] hasNext() ==> Checkes if there are more documents to retrive",
                " 9} forEach() ==> Iterates over each document and applies a function ",
                " -- important for memory management, especially when dealing with large datasets."
            ]
        },
        {
            id: 23,
            question: "What is Logical operators in MongoDB ?",
            answer: [
                "1] Logical query operators are used to combine or modify the results of queries using logical conditions.",
                "2] Allow us to create complex queries by combining multiple conditions.",
                "3] This enables precise filtering of documents based on various criteria."
            ]
        },
        {
            id: 24,
            question: "What are logical Operators ?",
            answer: [
                "1] $and ==> Joins query clauses & returns documents that match all conditions",
                "       syntax : {$and :[ {condition1} . {condition2} , ... ]}",
                " 2] $or ==> returns documents that match aleast one condition",
                "       syntax : {$or :[ {condition1} . {condition2} , ... ]}",
                "3] $nor ==> Returns documents that fail to match all the conditions.",
                "       syntax : { $nor: [ { condition1 }, { condition2 }, ... ] }",
                "4] $not ==> Returns documents that do not match the query expression.",
                "       syntax : db.p2.find({'age' : {$not: {$gt : 20}}})"
            ]
        },
        {
            id: 25,
            question: " What is Element Operators in MongoDB ?",
            answer: [
                "# return the documents in the collection which returns true if the keys match the fields and datatypes.",
            ]
        },
        {
            id: 26,
            question: "What are Element operators ?",
            answer: [
                "1] $exists ==> Checks if a specified field exists in the documents.",
                "       syntax : { field: { $exists: <boolean> } } ",
                "              // true => Selects documents where the specified field exists.",
                "              // false: Selects documents where the specified field does not exist.",
                "       eg: db.p2.find({'age' : {$exists: true , $eq: 30 }})",
                "\n2] $type ==> Verifies the data type of a specified field in the documents.",
                "       syntax : { field: { $type: <BSON type> } } ==> ",
                "           // data types and there BSON code (use only one) ==>",
                "                    # ('double' | 1) , ('string' | 2) , ('object' | 3) , (array | 4) , ('binData' | 5) ",
                "                    # ('objectId' | 7) , ('bool' | 8) , ('date' | 9) , ('null' | 10) , ('JavaScript' | 13)",
                "                    # ('int' | 16) , ('long' | 18) , ('decimal' | 19) ('minKey' | -1) , ('maxKey' | 127)",
                "       eg : db.p2.find( { 'id': { $type: 'int' } })"
            ]
        },
        {
            id: 27,
            question: "What is Array Operators in MongoDB ?",
            answer: [
                "# return the result based on the Multiple conditions specified in the array using the array operators."
            ]
        },
        {
            id: 28,
            question: " What are the Array Operators ?",
            answer: [
                "$all ==> Returns the documents in the collection which have all the elements specified in the array.",
                "         syntax : { field: { $all: [<value1> , <value2>, ... ] } }",
                "         eg :  db.p2.find( { 'color': { $all: ['red' , 'blue'] } })",
                "\n$elemMatch ==> Returns the documents that match all the conditions in the given array of conditions.",
                "           syntax : { field: { $elemMatch: { <query1>, <query2>, ... } } }",
                "\n$size ==>Returns the documents that satisfy the given size mentioned in the query if the field contains an array of specified size. ",
                "           syntax : { field: { $size: value } }",
                "           // The $size operator can only be used with array fields.",
                "           // Using it with non-array fields will result in an error."
            ]
        },
        {
            id: 29,
            question: "What is Projection in MongoDB ?",
            answer: [
                " # It allows you to select only the necessary data rather than selecting whole data from the document.",
                " # IF the value field set to ==>",
                "           1] 1 or true => then it means the field will include in the return document.",
                "           2] 0 or false, then it means the field will not include in the return document.",
                " # it will not affect _id field so no need to set",
                " # eg : db.p2.find({}, {'name': 1} , {'age' : 0} , {'city' : 0})"
            ]
        },
        {
            id: 30,
            question: "What is Indexes in MongoDB ?",
            answer: [
                "1] An index in MongoDB is a special data structure that stores a portion of the data set in an easy-to-traverse form.",
                "2] Indexes are used to efficiently query and retrieve documents from a collection by providing quick access to the data based on the indexed fields.",
                "3]  Without indexing, MongoDB must scan every document in a collection to retrieve the matching documents and leading to slower query performance.",
                "4] _id by default index which does not permit the deletion of it "
            ]
        },
        {
            id: 31,
            question: "Create Index and delete index command in MongoDB ?",
            answer: [
                "$ createIndex({key : 1}) ==> create Indexes",
                "         Here key means field name , 1 -> ascending order & -1 -> descending order",
                "         eg :  db.p3.createIndex({'character' : 1})",
                "\n$ getIndexes() ==> return a list of all the indexes defined on the collection.",
                "         eg :  db.p3.getIndexes()",
                "\n$ dropIndex( ' indexName ') ==> method allows for the removal of specified indexes from a collection",
                "         eg : db.p3.dropIndex('series_1')"
            ]
        },
        {
            id: 32,
            question: "How to Sort the Document ?",
            answer: [
                "1] Sorting documents in MongoDB refers to the process of arranging the documents in a specified order based on the values of one or more fields.",
                "       .sort({'field' : 1 / -1}) -> here (1 is ascending order) (-1 is descending order) ",
                "         eg : db.p3.find().sort({'name' : -1})"
            ]
        },
        {
            id: 33,
            question: "What is Aggregation in MongoDB ?",
            answer: [
                "1] Aggregation is process of db that allows us to perform complex data transformations and computations on collections of documents.",
                "2] It enables us to group, filter, and manipulate data to produce summarized results",
                "3] It is typically carried out using the aggregation pipeline",
                "4] Pipline ==> framework for data aggregation modeled , Each stage of the pipeline transforms the documents ",
                "5] It allows for operations like filtering, grouping, sorting, reshaping and performing calculations on the data."
            ]
        },
        {
            id: 34,
            question: "How to use aggregate and its operations ?",
            answer: [
                "$ aggregate([]) ==> used for aggregation ",
                "\n$group ==> It Groups documents by the field/key",
                "             syntax : $ db.collection.aggregate( [ {$group : {_id : '$fieldName'} } ] )",
                "              // here $field represent as a iterative by which grp/category will form",
                "              eg :  db.p3.aggregate([ {$group : {'_id' : '$name' , 'Total' : {$sum : 1} }}])",
                "\n$project ==>  Include or exclude fields from the output documents",
                "               syntax : db.collection.aggregate([ {$project : {'field' : 0/1 ,.. }} ])  here (0 - exclude / 1- include)",
                "               eg : db.p3.aggregate( [{ $project: { 'name': 1 , 'character' : 1 } }] )",
                "\n$match ==> Filter documents to pass only those that match the specified condition(s).",
                "             syntax : db.collection.aggregate( [ {$match : { condition1 , condition2}} ] )",
                "             eg : db.p3.aggregate( [{ $match: {'character' : 'Main' }}])",
                "\n$sort ==> It Order the documents.",
                "            syntax : db.collection.aggregate( [ {$sort : {'field' : 1|-1 } } ] )",
                "            eg : db.p3.aggregate([ {$sort : {'character' : 1 } } ])",
                "\n$limit ==> Limit the number of documents passed to the next stage.",
                "             syntax : db.collection.aggregate( [ {$limit : 1|2|3|4|etc }])    (0 & negatives num is not allow)",
                "             eg : db.p3.aggregate( [{ $limit: 1 }] )"
            ]
        },
        {
            id: 35,
            question: "How to check Data type in MongoDB ?",
            answer: [
                "$type ==> selects documents where the value of the field is an instance of the specified BSON data type(s).",
                "           syntax : { 'field' : {$type : BSON TYPE }}",
                "           eg : db.p4.find({'num1': {$type : 16/'int' }})"
            ]
        },
        {
            id: 36,
            question: "What are the Arthimetic operator ?",
            answer: [
                "$add ==>  used to add numbers together or concatenate numbers and dates in the aggregation pipeline.",
                "          syntax : {$add : [ '$field' , 'expression' , 'etc' ] } ",
                "           eg : db.p4.aggregate([ { $project: { 'add': { $add: ['$num1', '$num2'] } } }] )",
                "\n$subtract ==> allows users to perform subtraction operations on numbers or dates.",
                "           syntax : {$subtract : ['$field' , expressions ]}",
                "           eg :  db.p4.aggregate([ { $project: { 'Sub': { $subtract: ['$num1', '$num2'] } } }] )",
                "\n$multiply ==> used in aggregation pipelines to perform multiplication operations",
                "           syntax : {$multiply : ['$field' , expressions ]}",
                "           eg 1 :  db.p4.aggregate([ { $project: { '3 * 4:'': { $multiply: [4, 3] } } }] ) ",
                "           eg 2 :  db.p4.aggregate([ { $project: { 'Num1 * 3:'': { $multiply: ['$num1', 3] } } }] )",
                "\n$"
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
                <h3 className='text-center fw-bold' >MongoDB Questions & Answer</h3>

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

export default MongoDB;