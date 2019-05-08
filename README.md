# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When you click on the the  https://www.techtonic.com URL my computer goes out to the Internet to find the web server that matches that address and asks to get the file. The webserver then sends the file back to my browser. The browser loads the web page.

## From start to finish, how does data reach you to be rendered in the browser?

When I click on the address my browser (Chrome) looks at the URL to learn about the protocol used, domain names, path and file that is supposed to be loaded in the browser window. The Internet does not use names on computers, it uses IP addresses so it needs to convert the name into an IP address using DNS. My browser and computer knows where the DNS is because it is a configured in my network settings. When it goes to to the DNS it finds that techtonic.com has an IP address of 99.84.74.11. The request then goes through a series of hops or routers trying to go through the easiest path to get to the web server or domain. My computer makes a connection with the web server and uses TCP to create the rules for the connection. My browser then sends an HTTPS request for the server to get the specific file in the URL from the web server. The server responds and send the web page file back to my computer. That file is then looked at by the browser on my computer and renders the web page by reading the hml. It also reads the html to see if other elements that it might need to get or load. These would be things like images, CSS, pdf  and Javascript. The browser sends out more requests depending on the elements that were contained in the code.

## What code is rendered in the browser?

The browsers primary job is to render HTML. The browser will look at the html file first and start to build the page. It then looks at styles and CSS to get more information about how to display the page such as height/width and color.
It can also render xml and other types of files by using plugins. An example of a file that needs a plugin is a pdf.


## What is the server-side code’s main function?

The server side answers the requests from the client-side. The first request will be for the actual file that is contained in the URL. Servers also store the data in a database and answers requests for that data or does processing that a client might ask it to do. An example would be to validate a login or retrieving data such as how many items are left.

## What is the client-side code’s main function?

The client-side codes runs in the browser and processes requests without having to call-back to the server. The primary function of client-side code is to display the page and the formatting. It controls everything that the users see’s on their browser. There are scripts that are embedded in the html that can make the page more interactive for the user as well as react to different browsers and systems (like mobile vs desktop). It also tells the server side what to and displays any data that is pulled from the backend systems.

## What is runtime?

Runtime are the instructions that run when your software is executed. They are things that run in the background that you did not write but need to run in order to make everything work correctly. Node.js is one of the most popular Javascript runtime environments. It contains all of the instructions you would need to run a program written in JavaScript. Browsers also have runtime time engines to help run Javascript written on websites.
## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

On the Techtonic web site there are 9 instances of html, 73 instances of .js and 3 instances of .css.
## How many instances of the server-side code are available at any given time?

When you look on a browser you are not able to see any of the server-side code. Only the client-side code is available to be seen on a browser.
## How many instances of the databases connected to the server application are created?

The application server sits between the web server and the database server. The application server takes requests from the web server and passes it on to the database server and processes the data. We cannot see how many connections are made on these because they are all back end systems. 
