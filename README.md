# 15Puzzle-Joao

### Prerequisites

In order to run this project you need to have node,mongodb and git installed on your machine.

### Installing

Copy the URL from the repository, clone the project into your local working directory:

```
git clone "Rep-URL"
```

Go into the created folder and install the node modules for both the react app and the node server with the following commands:

```
cd client
```

```
npm install
```

and

```
cd server
```

```
npm install
```

### Environment

Inside each of the client and server folders create a .env file and add the supported environment variables:

Client:
REACT_APP_API_HOST = http://localhost
REACT_APP_API_PORT =
PORT=8000

Server:
replace host/port/dbname accordingly

MONGO_CONNECTION_STRING=mongodb://host:port/dbname
PORT=

### Runing

To run the react front end application

```
cd client
```

```
npm start
```

and

To run the node server

```
cd server
```

```
npm start
```
