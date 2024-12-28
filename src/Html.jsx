

import React, { StrictMode, useState } from 'react'
import Navbar from './Navbar';

const Html = () => {


    const QA = [
        {
            id: 1,
            question: "What is HTML ?",
            answer: [
                "HTML stands for Hyper Text Markup Language",
                "HTML is the standard markup language for creating Web pages",
                "It was developed by Tim Berners-Lee",
                "The markup language is used to define the text document within the tag which defines the structure of web pages",
                "HTML is used to structure the website and is therefore used for Web Development"
            ]
        },
        {
            id: 2,
            question: "What are the various markup languages available ?",
            answer: [
                "HTML: Hypertext Markup Language",
                "MathML: Mathematical Markup Language",
                "SGML: Standard Generalized Markup Language",
                "XHTML: eXtensible Hypertext Markup Language",
                "XML: eXtensible Markup Language"
            ]
        },
        {
            id: 3,
            question: "What is the current version of HTML?",
            answer: [
                "The current version of HTML is HTML5, which is the fifth and latest version of HTML.",
                "HTML5 supports multimedia elements such as audio and video without the need for external plugins, improved semantic markup, better handling of forms, and enhanced features for designing responsive and accessible web applications."
            ]
        },
        {
            id: 4,
            question: "What is !DOCTYPE?",
            answer: [
                "The doctype is not an element or tag",
                "it lets the browser know about the version of or standard of HTML ",
                "The DOCTYPE for HTML5 is case-insensitive",
                "written as :: <!DOCTYPE html>"
            ]
        },
        {
            id: 5,
            question: "What are elements and tags, and what are the differences between them?",
            answer: [
                "Tags are the starting and ending parts of an HTML element.",
                "Eg Tags :: <b> </b> <i> </i> ",
                "Elements enclose the contents in between the tags.",
                "Eg element : <b>This is the content.</b>"
            ]
        },
        {
            id: 6,
            question: "What are the various heading tags and their importance?",
            answer: [
                "There are 6 levels of headings defined by HTML ===> h1 (biggest) to h6 (smallest)",
                "Importance of Heading: ",
                " 1)  Search Engines use headings for indexing the structure and content of the webpage. ",
                " 2)  Headings are used for highlighting important topics. ",
                " 3)  They provide valuable information and tell us about the structure of the document."
            ]
        },
        {
            id: 7,
            question: "How to redirect to a particular section of a page using HTML?",
            answer: [
                "The anchor tag to redirect to a particular section on the same page.",
                " add “id attribute” to the section that you want to show and use the same id in href attribute with “#”",
                " <a href='#contact'> Go Contact section </a>",
                " <section id='contact'> Contact section <section/>"
            ]
        },
        {
            id: 8,
            question: "What are attributes?",
            answer: [
                "Attributes provide additional information about an element.",
                " It takes 2 parameters ie., name and value.",
                " placed inside the opening tag of the element.",
                " Every name has some value that must be written within quotes."
            ]
        },
        {
            id: 9,
            question: "Are <b> and <strong> tags same? If not, then why?",
            answer: [
                "Bold tag ==>  ",
                " 1) Primarily for visual styling.",
                " 2) Tells the browser to display the text in bold.",
                "Strong tag ==>  ",
                " 1) Used to emphasize the importance of the text.",
                " 2) Conveys semantic meaning to both users and search engines."

            ]
        },
        {
            id: 10,
            question: "What is the difference between <em> and <i> tags?",
            answer: [
                "Italic tag ==> ",
                " 1) It is used in formatting HTML texts.",
                " 2) It is used to define a text in technical terms, alternative mood or voice, a thought, etc.",
                "Emphasis tag ==> ",
                " 1) Used to emphasize the importance of the text.",
                " 2) Conveys semantic meaning to both users and search engines.",
                " 3) It is used to define emphasized text or statements."

            ]
        },
        {
            id: 11,
            question: "What is comments ?",
            answer: [
                "Comments are not displayed in the browsers. ",
                "It helps the developers to understand your code",
                "in html it written as :: <!- comments ->"
            ]
        },
        {
            id: 12,
            question: "What is the use of the target attribute in the <a> tag ?",
            answer: [
                " Target attribute specify the window where the linked document is loaded.",
                "Attribute value ==> ",
                "_blank: It opens the link in a new window.",
                "_self: It opens the linked document in the same frame.",
                "_parent: It opens the linked document in the parent frameset.",
                "_top: It opens the linked document in the full body of the window.",
                "framename: It opens the linked document in the named frame."
            ]
        },
        {
            id: 13,
            question: "What is the use of alt attribute in images?",
            answer: [
                "Alt attribute specify alternative text for image .",
                "It is useful when the image is not displayed."
            ]
        },
        {
            id: 14,
            question: "What are the HTML tags used to display a table?",
            answer: [
                "<table>: It is used to define a table.",
                "<tr>: It is used to define a row in a table.",
                "<th>: It is used to define a header cell in a table.",
                "<td>: It is used to define a cell in a table.",
                "<colgroup>: It is used to define a group of one or more columns in a table for formatting.",
                "<tbody>: It is used to define a group of body content in a table.",
                "<thead>: It is used to group the header content in a table.",
                "<tfooter>: It is used to group the footer content in a table.",
                "<colspan> : Merges multiple columns into a single, wider cell. ",
                "<rowspan> : Merges multiple rows into a single, taller cell."
            ]
        },
        {
            id: 15,
            question: "What are the different types of lists in HTML?",
            answer: [
                "A list is a record of short pieces of related information used to display the data on webpage as ordered or unordered form",
                "Unordered List: It will list the items using plain bullets.",
                "Ordered List: It will use different schemes of numbers to list your items."
            ]
        },

        {
            id: 16,
            question: "What is the difference between block and inline elements?",
            answer: [
                "Block-Level Elements ==>  ",
                " 1) A block-level element always starts on a new line ",
                " 2) Takes Full widths ",
                " 3) Takes External heigth and width ",
                " 4) Eg : <div>, <p>, <header>, <footer>, <h1>...<h6>, <form>, <table>, <canvas>, <video>, <blockquote>, <pre>, <ul>, <ol>, <figcaption>, <figure>, <hr>, <article>, <section>, etc.",
                "Inline-Level Elements ==>  ",
                " 1) A Inline-level element does not starts on a new line ",
                " 2) only takes up as much width as necessary ",
                " 3) Not takes External heigth and width ",
                " 3) Eg : <span>, <a>, <strong>, <img>, <button>, <em>, <select>, <abbr>, <label>, <sub>, <cite>, <abbr>, <script>, <label>, <i>, <input>, <output>, <q>, etc"
            ]
        },
        {
            id: 17,
            question: "What are void elements in HTML?",
            answer: [
                " Void Element ==> do not have closing tag  ",
                "Example <br />, <img />, <hr />, etc."
            ]
        },
        {
            id: 18,
            question: "What are HTML Entities?",
            answer: [
                "In HTML some characters are reserved like '<', '>', '/', etc.  ",
                "To use these characters in our webpage we need to use the character entities called HTML Entities.",
                " '<' ==> &lt; or &#60;",
                " '>' ==> &gt; or &#62;",
                " '@' ==> &copy;",
            ]
        },
        {
            id: 19,
            question: "What is the 'class' attribute in HTML?",
            answer: [
                "The class attribute is used to specify the class name for an HTML element ",
                " Multiple elements in HTML can have the same class value.",
                "mainly used to stying element"
            ]
        },
        {
            id: 20,
            question: "What is the difference between the 'id' attribute and the 'class' attribute of HTML elements?",
            answer: [
                "Id :: is unqiue , can be used mutliple time , if used multiple time then only first element is access",
                "Class ==> used multiple time , not unique , can access all element with same class"
            ]
        },
        {
            id: 21,
            question: "Describe HTML layout structure?",
            answer: [
                "<header>: Stores the starting information about the web page.",
                "<footer>: Represents the last section of the page.",
                "<nav>: The navigation menu of the HTML page.",
                "<article>: It is a set of information.",
                "<section>: It is used inside the article block to define the basic structure of a page.",
                "<aside>: Sidebar content of the page."
            ]
        },
        {
            id: 22,
            question: "What are the various formatting tags in HTML?",
            answer: [
                "<b> - makes text bold",
                "<i> - makes text italic",
                "<em> - makes text italic but with added semantics importance",
                "<big> - increases the font size of the text by one unit",
                "<small> - decreases the font size of the text by one unit",
                "<sub> - makes the text a subscript",
                "<sup> - makes the text a superscript",
                "<del> - displays as strike out text",
                "<strong> - marks the text as important",
                "<mark> - highlights the text",
                "<ins> - displays as added text"
            ]
        },
        {
            id: 23,
            question: "Explain meta tag ?",
            answer: [
                "Meta tags are HTML elements that provide structured metadata about a web page. ",
                "they offer valuable information to search engines, browsers, and other web services.",
                "Metadata will not be displayed on the page",
                "Meta Attribute :: ",
                " 1) charset == character_set ==> Specifies the character encoding for the HTML document. UTF (UTFUnicode Transformation Format)",
                " Example :: Example: <meta charset='UTF-8'>",
                " 2) name ==> Used for general metadata like : ",
                " 2.1] description (Provide summary of page)",
                " 2.2] keywords (lists relevant keywords related page)",
                " 2.3] viewport ( Controls the layout and dimensions of the page on mobile devices) settings.",
                " Exmaple :: <meta name='description' content='A brief description of the webpage.'>"
            ]

        },
        {
            id: 24,
            question: "What is the significance of <head> and <body> tag in HTML?",
            answer: [
                "<head> tag ==> ",
                " 1] Contains the metadata about the webpage ",
                " 2] tags which are enclosed by head tag like <link>, <meta>, <style>, <script>, etc. are not displayed on the web page. ",
                "<body> tag ==> ",
                "1] All the contents which needs to be displayed on the web page like images, text, audio, video, contents, using elements like <p>, <img>, <audio>, <heading>, <video>, <div>, etc. is inside the body tag "
            ]
        },
        {
            id: 25,
            question: "How is Cell Padding different from Cell Spacing?",
            answer: [
                "Cell Spacing is the space or gap between two consecutive cells.",
                "Cell Padding is the space or gap between the text/ content of the cell and the edge/ border of the cell. "
            ]
        },
        {
            id: 26,
            question: "In how many ways can we position an HTML element? Or what are the permissible values of the position attribute?",
            answer: [
                "1] static ==> Default value. Here the element is positioned according to the normal flow of the document.",
                "2] absolute ==> Here the element is positioned relative to its parent element. The final position is determined by the values of left, right, top, bottom.",
                "3] fixed ==> This is similar to absolute except here the elements are positioned relative to the <html> element.",
                "4] relative ==> Here the element is positioned according to the normal flow of the document and positioned relative to its original/ normal position",
                "5] initial ==> This resets the property to its default value.",
                "6] inherit ==> Here the element inherits or takes the property of its parent."
            ]
        },
        {
            id: 27,
            question: "In how many ways you can display HTML elements?",
            answer: [
                "1] inline: Using this we can display any block-level element as an inline element. The height and width attribute values of the element will not affect.",
                "2] block: using this, we can display any inline element as a block-level element. ",
                "3] inline-block: This property is similar to inline, except by using the display as inline-block, we can actually format the element using height and width values.",
                "4] flex: It displays the container and element as a flexible structure. It follows flexbox property.",
                "5] inline-flex: It displays the flex container as an inline element while its content follows the flexbox properties.",
                "6] grid: It displays the HTML elements as a grid container.",
                "7] none: Using this property we can hide the HTML element."
            ]
        },
        {
            id: 28,
            question: "What is the difference between “display: none” and “visibility: hidden”?",
            answer: [
                " 1] “visibility: hidden” for an HTML element ==>  Element will be hidden from the webpage but still takes up space.",
                " 2] if we use the “display: none” attribute for an HTML element then the element will be hidden, and also it won't take up any space on the webpage."
            ]
        },
        {
            id: 29,
            question: "Difference between link tag <link> and anchor tag <a>?",
            answer: [
                "Anchor tag <a> ==> clickable , create hyperlink to another webpage , redirect",
                "Link tag <link> ==> defines a link between a document and an external resource , not clickable , not redirect ."
            ]
        },
        {
            id: 30,
            question: "What are forms and how to create forms in HTML?",
            answer: [
                "HTML provides a <form> tag to create forms.",
                "To take input from the user we use the <input> tag inside the form so that all collected user data can be sent to the server for processing.",
                "different input types like ‘button’, ‘checkbox’, ‘number’, ‘text’, ‘password’, ‘submit’ etc."
            ]
        },
        {
            id: 31,
            question: "What type of audio files can be played using HTML5?",
            answer: [
                "1] MP3",
                "2] WAV",
                "3] Ogg"
            ]
        }





    ]

    const [active, setDeactive] = useState(null);

    const activeQuestion = (id) => {
        setDeactive( id === active ? null : id);
    }


    return (
        <StrictMode>

            {/* <Navbar/> */}

            <div className="container-fluid p-0 html pt-sm-5 pt-3">
                <h3 className='text-center fw-bold' >HTML Questions & Answer</h3>

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

export default Html;