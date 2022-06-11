# Online Coffee / Chocolate shop
This is a JavaScript program designed to act as a marketplace for the North Central College chapter of Enactus, an organization I am still involved with. Enactus NCC partners with local farmers and artisans in and around San Lucas Tolimán, Guatemala, engaging in direct trade. This allows the farmers and artisans to skip the intermediary parties, giving them much greater financial freedoms. 

## Table of Contents 

- [Requirements](#requirements)
- [Installation](#installation)
- [Running the project](#running-the-project)
- [Dependencies](#dependencies)
- [Possible Issues](#possible-issues)


## Requirements

For development, you will only need Node.js installed in your environement. This app will make use of Express to handle server requests, and React for webpage navigation

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Installation

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE

## Running the project

    $ npm start
    
## Program Breakdown

### Pages

This folder includes the JavaScript files used to generate the React pages, using the Router employed by Navigation.js. There are currently five javascript files in the folder:

* HomePage: A simple webpage to describe the purpose of the website. It also offers some information about new features, specifically to deal with cognitive style heuristics: providing information about new features is important for both users that need explicit instructions on how to use the program and for those that like to explore.
* CoffeeOrderPage: A webpage displaying a list (currently a table) of products, including a short description and its price. It also includes buttons to alter the number of a specific item the user would like to add to their cart, and a button at the bottom to submit their order.
* ChocolateOrderPage: Practically identical to CoffeeOrderPage, but obviously used to deal with chocolate products.
* SignInPage: A React form prompting for username and password. When the submit button is used, this program also communicated with a microservice running in Express (currently on localhost:4000) to validate the entered information. An alert is displayed, either confirming or denying the user's credentials. A link is also included to load the CreateAccount page.
* CreateAccount: Another React form prompting a user for their name, email, password, and password confirmation. Like the SignInPage, this program also communicates with log-in microservice, performing some credential validation. 

### Components

This folder includes the JavaScript files used to generate several different types of components for the webpages rendered. This currently includes:

* ItemQuantity
* Navigation
* Products
* SubmitOrder

### Data

This folder includes javascript files containing the array object of dictionaries associated with the products to displayed on the webpage. This currently includes one file for the coffee and another for the chocolate.

## Socket

This program is currently set to run in http://localhost:3000

## Dependencies

As mentioned above, this app runs on React and Express, with more programs likely to be added in the future.

This program also depends on a separate microservice--another program also running on an Express server--to enable user account creations and logins. The microservice also runs locally on port 4000. Communication between the two apps occurs through HTTP requests, with POST requests being used for both the user login and for account creation. For user login, the username and password pair will be compare to the stored data. The response will contain a string detailing the result from the query. For account creation, the submitted data will also be sent as a JSON string, where the parsed data will be compared to existing items. Specifically, username and email will be subjected to particular scrutiny, where error messages may be displayed to the user if the username is already taken or if te email is already associated with another account.

## Possible issues

This app also requires the help of a microservice for the user's account creation and login. Because the two programs are set to run in localhost, issues may arise with CORS policy. If this occurs, one work around is to run the program in Chrome and install an extension like Moesef CORS, temporarilty turning off that policy and allowing the two local programs to communicate.

## Contributing

Pull requests are accepted, but preference is towards opening issues first to discuss possible revisions or additions. Thank you.
