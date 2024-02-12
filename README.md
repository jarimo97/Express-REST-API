# Express-REST_API

-This is a sampre REST API implemented with Express and Node.js.
-There are two main router folders:

    1- Master Router: Generic CRUD methods.
    2- Slow Router: Comparison between executing time consuming tasks with promises (controlling completition) vs regular funcions.

        For more on promisses, checkout the following links:s

            https://blog.webdevsimplified.com/2021-11/async-await/
            https://www.youtube.com/watch?v=fgTGADljAeg&t=499s
            https://www.youtube.com/watch?v=V_Kr9OSfDeU
            

-Bouth router folders have the postman collection in order to test them.


How to create a  REST API using Node.js and Express from scrath:

1- Check node.js version by using nvm (node version manager)

    Follow git:

    https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating

    run "nvm" on terminal to set your prefered npm version:

    Example:
        nvm install 8.0.0                     Install a specific version number
        nvm use 8.0                           Use the latest available 8.0.x release
        nvm run 6.10.3 app.js                 Run app.js using node 6.10.3
        nvm exec 4.8.3 node app.js            Run `node app.js` with the PATH pointing to node 4.8.3
        nvm alias default 8.1.0               Set default node version on a shell
        nvm alias default node                Always default to the latest available node version on a shell

        nvm install node                      Install the latest available version
        nvm use node                          Use the latest version
        nvm install --lts                     Install the latest LTS version
        nvm use --lts                         Use the latest LTS version

2- Create a node.js project

    npm init

    In case of the default setup:

    npm init -y

3- Install Production dependencies(regular npm install):

        Install Express as a production dependency:

            npm install express

        Install the middleware Body-parser as a production dependency to be able to treat the request body directly:

            npm install body-parser

        Install the middleware CORS as a production dependency to enable Cross-Origin Resource Sharing:

            npm install cors

4-  Install Development dependencies(npm install --save-dev):

    Install Dotenv as a development dependency to use enviroment variables from a file named .env:

        npm install --save-dev dotenv

    Install Nodemon as a development dependency to refresh the project when saved (it is not necesary to restart):

        npm install --save-dev nodemon

5- Create a .env file to store enviroment variables.

6- Create a .gitignore file to exclude files.

7- Create a server.js file to write the server

8- Add the custom script to the package.json scripts to run the server in dev mode:

    "devStart":"nodemon server.js"

9- Create a simple express server in the server.js file:

    const express = require('express');
    const app = express();
    const port = 3000;

    app.use(express.json());

    // Define your routes and middleware here

    app.listen(port, () => { console.log(`Server is running at http://localhost:${port}`)});


10- Run the server in dev mode:

    npm run devStart
