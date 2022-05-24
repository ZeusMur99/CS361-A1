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
    
## Socket

This program is currently set to run in http://localhost:3000

## Dependencies

As mentioned above, this app runs on React and Express, with more programs likely to be added in the future.

This program also depends on a separate microservice--another program also running on an Express server--to enable user account creations and logins. The microservice also runs locally on port 4000. Communication between the two apps occurs through HTTP requests, with POST requests being used for both the user login and for account creation. For user login, the username and password pair will be compare to the stored data. The response will contain a string detailing the result from the query. For account creation, the submitted data will also be sent as a JSON string, where the parsed data will be compared to existing items. Specifically, username and email will be subjected to particular scrutiny, where error messages may be displayed to the user if the username is already taken or if te email is already associated with another account.

## Possible issues

This app also requires the help of a microservice for the user's account creation and login. Because the two programs are set to run in localhost, issues may arise with CORS policy. If this occurs, one work around is to run the program in Chrome and install an extension like Moesef CORS, temporarilty turning off that policy and allowing the two local programs to communicate.

## Contributing

Pull requests are accepted, but preference is towards opening issues first to discuss possible revisions or additions. Thank you.
