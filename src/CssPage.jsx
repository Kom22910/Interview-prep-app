



import React, { StrictMode, useState } from 'react'
import Navbar from './Navbar';

const CssPage = () => {



  const QA = [
    {
      id: 1,
      question: "What is CSS ?",
      answer: [
        "CSS ==> Cascading Style Sheets .",
        "CSS allows you to apply styles to web pages.",
        "It provides powerful control over the presentation of an HTML document."
      ]
    },
    {
      id: 2,
      question: "Why do we use CSS ?",
      answer: [
        "You can write CSS once and reuse the same sheet on multiple HTML pages.",
        "CSS is considered a clean coding technique, which means search engines won't have to struggle to “read” its content.",
        "It provides powerful control over the presentation of an HTML document.",
        "CSS can store web applications locally with the help of an offline cache.",
        "Using of this we can view offline websites.",
        "To make a global change simply change the style, and all elements in all the webpages will be updated automatically."
      ]
    },
    {
      id: 3,
      question: "What is the current version of CSS?",
      answer: [
        "CSS3 is the latest version of CSS."
      ]
    },
    {
      id: 4,
      question: "List the CSS Frameworks?",
      answer: [
        "Boostrap",
        "Materialize",
        "Tailwind Css",
        "UIKit"
      ]
    },
    {
      id: 5,
      question: "What are the advantages of using CSS?",
      answer: [
        "CSS provides a way to present the same content in multiple presentation formats in mobile or desktop or laptop.",
        "To make a global change, simply change the style, and all elements in all the web pages will be updated automatically.",
        "Easy to maintain"
      ]
    },
    {
      id: 6,
      question: "Different types of units CSS?",
      answer: [
        " 1] Absolute Units ==> are “absolute” are the same size regardless of the parent element or window size. ",
        " 1.1) px ( pixel ) ==> 1/96 of 1in  ( 96 px = 1 inch)",
        " 1.2) pt ( point ) ==> 1/72 of 1in  ( 72 pt = 1 inch)",
        " 1.3) pc ( picas ) ==> 1pc = 12pt ",
        " 1.4) cm (centimeter) ==> 1cm = 37.80px",
        " 1.5) mm (milimeter) ==> 10mm = 1cm",
        " 1.6) in (inche) ==> 1in = 96px",
        " 2] Relative Units ==> are “relative or dependent” , they scale relative to the parent or window size (depending on the unit).",
        "   useful for styling responsive sites",
        " 2.1) % ==> Relative to the parent element's value for that property",
        " 2.2) em ==> Relative to parent's font size",
        " 2.3) rem ==> Relative to root font size ",
        " 2.4) vh ==> 1vh = 1/100 of the viewport's height",
        " 2.5) vw ==> 1vw = 1/100 of the viewport's width",
        " 2.6) vmin ==> Relative to viewport's smaller dimension , vmin = 1/100 of viewport's smaller dimension ( width / height).",
        " 2.7) vman ==> Relative to viewport's larger dimension ,  1vmax = 1/100 of viewport's larger dimension  ( width / height).",
      ]
    },
    {
      id: 7,
      question: "What are CSS Selectors?",
      answer: [
        "CSS Selectors are used to selecting HTML elements based on their element name, id, class, etc.",
        "It can select one or more elements simultaneously.",
        " 1] class selector: use the (.) character with specifying the class name.",
        " 1] id selector ==> The id selector is used with a # character.",
      ]
    },
    {
      id: 8,
      question: "How can we add comments in CSS?",
      answer: [
        "Comments are the statements in your code that are ignored by the compiler and are not executed.",
        "in css commit  ==>  /*  commit */"
      ]
    },
    {
      id: 9,
      question: "What does the 'a' in rgba mean?",
      answer: [
        "RGBA contains A (Alpha) which specifies the transparency of elements. ",
        "The value of alpha lies between 0.0 to 1.0"
      ]
    },
    {
      id: 10,
      question: "What are CSS backgrounds, list the properties?",
      answer: [
        " The CSS background properties are used to define the background effects for elements.",
        " 1] background-color ==> specifies the background color of an element.",
        " 2] background-image ==> specifies an image to use as the background of an element.",
        " 3] background-repeat ==> By default, the background image property repeats the image both horizontally and vertically.",
        " 4] background-attachment ==> This property is used to fix the background ground image.",
        " The image will not scroll with the page.",
        " 5] background-position ==> used to set the image to a particular position."

      ]
    }, {
      id: 11,
      question: "What are the different CSS border properties?",
      answer: [
        " border : border-widht border-style Border_color"
      ]
    },
    {
      id: 12,
      question: "What does margin: 40px 100px 120px 80px signify?",
      answer: [
        "margin : top right bottom left"
      ]
    },
    {
      id: 13,
      question: "What is CSS Box Model?",
      answer: [
        "The CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself.",
        "It is used to create the design and layout of web pages.",
        " 1] Border ==>  It is the area between the box's padding and margin.",
        " 2] Margin ==> It is a space outside the border & separate the neighbours.",
        " 3] Padding ==> It is a space inside the border.",
        " 4] Content ==> this area consist of contents like image , text etc"

      ]
    },
    {
      id: 14,
      question: "What is the difference between CSS border and outline?",
      answer: [
        " 1] border ===>",
        " Border is created inside the element ",
        " Affects element's dimensions",
        " Affects layout of surrounding elements",
        " Primarily for design and styling",
        " 2] Outline ===>",
        " A line drawn outside the element's border.",
        " Does not affect element's dimensions",
        " Does not affect layout of surrounding elements",
        " Often used for focus indication and accessibility , Outlines cannot be circular , Outlines do not take up space"
      ]
    },
    {
      id: 15,
      question: "How can we format text in CSS?",
      answer: [
        " 1] color ==> Sets the color of the text.",
        " 2] text-align ==> Specifies the horizontal alignment of text within its container (e.g., left, center, right, justify).",
        " 3] text-decoration ==> Adds decorations to text (e.g., underline, overline, line-through).",
        " 4] text-transform ==>  Changes the case of text (e.g., uppercase, lowercase, capitalize).",
        " 5] text-indent ==> Indents the first line of text.",
        " 6] letter-spacing ==> Adjusts the space between individual letters.",
        " 7] line-height ==>  Sets the vertical spacing between lines of text.",
        " 8] text-direction ==> Specifies the reading direction for text (e.g., ltr for left-to-right, rtl for right-to-left).",
        " 9] text-shadow ==> Adds a shadow effect to the text.",
        " 10] word-spacing ==>  Adjusts the space between words."
      ]
    },
    {
      id: 16,
      question: "What are the different CSS link states?",
      answer: [
        "A link is a connection from one web page to another web page. ",
        "There are four states of links given below ==> ",
        " 1] a:link ==> This is a normal, unvisited link.",
        " 2] a:visited ==> This is a link visited by a user at least once",
        " 3] a:hover ==> This is a link when the mouse hovers over it",
        " 4] a:active ==> This is a link that is just clicked."
      ]
    },
    {
      id: 17,
      question: "Can we add an image as a list item marker?",
      answer: [
        "we use the list-style-image property in CSS. ",
        "SYNTAX ==>  list-style-image : url('') "
      ]
    },
    {
      id: 18,
      question: "Can we add an image as a list item marker?",
      answer: [
        "we use the list-style-image property in CSS. ",
        "SYNTAX ==>  list-style-image : url('') "
      ]
    },
    {
      id: 19,
      question: "How can we hide an element in CSS?",
      answer: [
        " 1] Display property is used to hide and show the content ,",
        " display : 'none'; ==> This hides the element and remove the space taken by the element.",
        " 2] Visibilty property is also used to hide and show , ",
        " visibility : 'hidden'; ==>This hides the element but does not remove the space taken by the element."
      ]
    },
    {
      id: 20,
      question: "Can we overlap elements in CSS?",
      answer: [
        "The z-index property is used to displace elements on the z-axis i.e in or out of the screen.",
        "It is used to define the order of elements if they overlap with each other."
      ]
    },
    {
      id: 21,
      question: "What are the various positioning properties in CSS?",
      answer: [
        "position property tells about the method of positioning for an element or an HTML entity.",
        " 1] Fixed ==> ",
        " position: fixed property will be positioned relative to the viewport.",
        " fixed positioning allows it to remain at the same position even as we scroll the page. ",
        " 2] Static ==> set by default ",
        " The element will be positioned with the normal flow of the page.",
        " 3] Relative ==> ",
        " An element with position: relative is positioned relatively with the other elements which are sitting at top of it.",
        " 4] Absolute ==> ",
        "  element with position: absolute will be positioned with respect to its parent. ",
        " The positioning of this element does not depend upon its siblings",
        " 5] Sticky ==> ",
        " Element with position: sticky and top: 0 played a role between fixed & relative based on the position where it is placed.",
        " If the element is placed in the middle of the document then when the user scrolls the document, the sticky element starts scrolling until it touches the top.",
        " When it touches the top, it will be fixed at that place in spite of further scrolling. ",
        "We can stick the element at the bottom, with the bottom property."
      ]
    },
    {
      id: 22,
      question: "What is CSS overflow?",
      answer: [
        "The CSS overflow controls the big content. ",
        " overflow property ==> ",
        " 1] visible ==> The content is not clipped and is visible outside the element box.",
        " 2] hidden ==> The overflow is clipped and the rest of the content is invisible.",
        " 3] Scroll ==> The overflow is clipped but a scrollbar is added to see the rest of the content. (vertical or horizontal)",
        " 4] Auto ==> It automatically adds a scrollbar whenever it is required. ",
        " 5] Overflow-x and Overflow-y ==> This property specifies how to change the overflow of elements."
      ]
    },
    {
      id: 23,
      question: "What does the CSS float property do?",
      answer: [
        "The float property defines the flow of content. ",
        " 1] float : left ==> Element floats on the left side of the container",
        " 2] float : right ==> Element floats on the right side of the container",
        " 3] float : inherit ==> The element inherits the floating property of its parent",
        " 3] float : none ==> Element is displayed as it is (Default)."
      ]
    },
    {
      id: 24,
      question: "What does display:inline-block do?",
      answer: [
        "This feature uses both properties: block and inline.",
        "this property aligns the div inline but the difference is it can edit the height and the width of the block.",
        " by default get margin"
      ]
    },
    {
      id: 25,
      question: "What are pseudo-classes  in CSS?",
      answer: [
        "A Pseudo class in CSS is used to define the special state of an element. ",
        "It can be combined with a CSS selector to add an effect to existing elements based on their states.",
        "For Example, changing the style of an element when the user hovers over it, or when a link is visited.",
        "pseudo-class names are not case-sensitive.",
        "There are many Pseudo-classes in CSS ==> ",
        " 1] :hover psuedo class ==> used to add a special effect to an element when our mouse pointer is over it.",
        " 2] :active pseudo class ==> used to select an element that is activated when the user clicks on it. ",
        " 3] :focus psuedo class ==>  used to select an element that is currently focussed by the user.",
        " 4] :visited psuedo class ==> used to select the links which have been already visited by the user."
      ]
    },
    {
      id: 26,
      question: "What are pseudo-elements (elemensts not class) in CSS?",
      answer: [
        " Pseudo-element in CSS is used to add style to specified parts of an element.",
        "Use of Pseudo-Element==> ",
        " 1] ::before Pseudo-element ==>  It is used to add some CSS property before an element when that element is called.",
        " 2] ::after Pseudo-element ==> It is used to add some CSS property after an element when that element is called.",
        " 3] ::first-letter Pseudo-element ==> It is used to make changes to the first letter of an element.",
        " 4] ::first-line Pseudo-element ==> It is used to make changes to the first line of an element."
      ]
    },
    {
      id: 27,
      question: "How can we add gradients in CSS?",
      answer: [
        "1] Linear Gradients ==> ",
        " It includes the smooth color transitions to going up, down, left, right, and diagonally.",
        " A minimum of two colors are required to create a linear gradient.",
        " SYNTAX ==> background : linear-gradient(direction, color-stop1, color-stop2, ...);",
        "2] CSS Radial Gradients ==>  ",
        " A radial gradient differs from a linear gradient.",
        " It starts at a single point and emanates outward.",
        " By default, the first color starts at the center position of the element and then fades to the end color towards the edge of the element.",
        " Fade happens at an equal rate until specified.",
        " SYNTAX ==> background : radial-gradient(shape size at position, start-color, ..., l)"
      ]
    },
    {
      id: 28,
      question: " What is cascading in CSS?",
      answer: [
        "Cascading in CSS simply means that CSS rules 'cascade' over each other ,",
        " meaning they follow a specific order of importance. ",
        " When multiple CSS rules try to style the same element, the browser decides which rule 'wins' based on a set of priorities.",
        "This 'cascading' ensures that your web pages are styled consistently and predictably."
      ]
    },
    {
      id: 29,
      question: " How are the CSS selectors matched against the elements by the browser?",
      answer: [
        "The order of matching selectors goes from right to left of the selector expression.",
        "The elements in the DOM are filtered by browsers based on the key selectors and are then traversed up to the parent elements for determining the matches.",
        "The speed of determining the elements depends on the length of the chain of selectors.",
        " Example ==> p span { color : black ;} so here browser first find all span element in dom and then check its  parent p and it matches then change color  "
      ]
    },
    {
      id: 30,
      question: "Can we add 2D transformations to our project using CSS?",
      answer: [
        "Yes, we can, a transformation modifies an element by its shape, size, and position.",
        "six main types of 2D transformations  ==> ",
        " 1] translate() ==> Moves an element from its original position.",
        " 2] rotate() ==> Rotates an element around its center point.",
        " 3] scale() ==> Resizes an element by increasing or decreasing its size.",
        " 4] skewX() ==> Skews an element along the X-axis.",
        " 5] skewY() ==> Skews an element along the Y-axis.",
        " 6] matrix() ==> A general transformation function that combines other transformations (translate, rotate, scale, skew) into a single function."
      ]
    },
    {
      id: 31,
      question: "Can we add 3D transformations to our project using CSS?",
      answer: [
        "Yes, it allows changing elements using 3D transformations. ",
        "  In 3D transformation, the elements are rotated along the X-axis, Y-axis, and Z-axis.",
        " rotateX() , rotateY() , rotateZ()"
      ]
    },
    {
      id: 32,
      question: " What does the CSS box-sizing property do?",
      answer: [
        "The box-sizing CSS property defines how the user should calculate the total width and height of an element ,",
        "i.e. padding and borders, are to be included or not.",
        " SYNTAX ==> box-sizing: content-box|border-box;",
        " content-box ==> ",
        " This is the default value of the box-sizing property.",
        " In this mode, the width and height properties include only the content.",
        " Border and padding are not included in it ",
        " border-box ==> ",
        " In this mode, the width and height properties include content, padding, and borders "

      ]
    },
    {
      id: 33,
      question: "What is difference between css and css3 ?",
      answer: [
        " 1] CSS ==> ",
        " - released in 1996",
        " - Doesn't support media queries",
        " - No support for modern browser",
        " - It uses an old standard color format",
        " - It provides average performance and requires high memory usage",
        " 2] CSS3 ==>  ",
        " - released in 2005",
        " - Supports responsive web design",
        " - Supported fully by all modern browsers",
        " - Works with media queries,",
        " - It offers different gradient colors and schemes like RGBA, HSLA, HSL, etc.",
        " - It offers fast, excellent performance and doesn't use as much memory"
      ]
    },
    {
      id: 34,
      question: " what is Media query in css ?",
      answer: [
        " Media queries allow you to apply CSS styles depending on a device's media type",
        " CSS Media Queries are an important tool for modern web development",
        " It helps developers to create designs that adjust to different devices",
        "  Here are some commonly used media types ==> ",
        " 1] all ==> Suitable for all media devices.",
        " 2] print ==> Used for printers.",
        " 3] screen ==> Targeted at computer screens, tablets, smartphones, etc.",
        " 4] speech ==> Designed for screen readers that read the content aloud.",
        " SYNTAX ==> @media not | only mediatype and (expression) {// Code content}"
      ]
    },
    {
      id: 35,
      question: "Why Use Media Queries?",
      answer: [
        " Improves user experience ==> responsive increase interactivity of user",
        " Boosts SEO ==> Search engines prioritize mobile-friendly sites && A responsive design improves your website's search engine ranking.",
        " Supported Browsers ==> chrome , mozilla firefox , Microsoft Edge , Opera , Safari",
      ]
    },
    {
      id: 36,
      question: "What is CSS flexbox?",
      answer: [
        "also called a flexible box model.",
        " It is basically a layout model that provides an easy and clean way to arrange items within a container.",
        " Flexbox was created for small-scale layouts",
        " Flexbox is responsive and mobile-friendly.",
        " to start ==> display : flex ; the container",
        " Flex Properties ==> ",
        " 1] flex-direction ==> Defines the main axis of the flex container (row or column).",
        " 2] flex-wrap ==> Controls whether flex items wrap to the next line or remain on a single line.",
        " 3] flex-flow ==> A shorthand property combining flex-direction and flex-wrap.",
        " 4] justify-content ==> Aligns flex items along the main axis of the container.",
        " 5] align-items ==> Aligns flex items along the cross axis of the container"
      ]
    },
    {
      id: 37,
      question: "What is CSS Grid?",
      answer: [
        " A grid is a set of intersecting horizontal and vertical lines defining columns and rows.",
        "Elements can be placed onto the grid within these column and row lines",
        "SYNTAX ==> display : grid;",
        " grid-template-rows ==> Defines the size of the grid's rows.",
        " grid-template-columns ==> Defines the size of the grid's columns."
      ]
    },
    {
      id: 38,
      question: "What is the difference between flexbox and grid?",
      answer: [
        "1] Flex box ==> ",
        " - Flexbox only deals with either columns or rows.",
        " - CSS Flexbox offers one-dimensional layout.",
        " - It is helpful in allocating and aligning the space among items in a container",
        " - It works with all kinds of display devices and screen sizes.",
        " - support content first ",
        " - display : flex",
        " 2] Grid ==> ",
        " - CSS Grid Layout, is a two-dimensional grid-based layout system with rows and columns.",
        " - It makes easier to design web pages without having to use floats and positioning. ",
        " - support layout first ",
        " - display : grid "
      ]
    },
    {
      id: 39,
      question: "What are the breakpoiont for view port responsive device ?",
      answer: [
        "1] 320px ==> minimum width for smartphones",
        "2] 480px ==> smaller mobile devices.",
        "3] 768px ==> for tablets",
        "4] 992px ==> for larger tablets and smaller laptops",
        "5] 1200px ==> for desktops"
      ]
    },
    {
      id : 40 ,
      question : "What is meant by universal selector?",
      answer : [
        " denoted by * ",
        " used to select all the elements in an HTML document. ",
        " it also selects all elements which are inside under another element."
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



      <div className="container-fluid p-0 html pt-sm-5 pt-3">
                <h3 className='text-center fw-bold' >CSS Questions & Answer</h3>

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

export default CssPage;