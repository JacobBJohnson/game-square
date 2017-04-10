const express = require('express'),    
    bodyParser = require('body-parser'),    
    morgan = require('morgan'),    
    router = require('./routes/router'),  
    cors = require('cors'),      
    app = express(),
    port = 2700;

class Server {

    constructor() {        
        this.initExpressMiddleWare();
        this.initCustomMiddleware();        
        this.initRoutes();
        this.start();
    }

    start() {
        app.listen(port, (err) => {
            console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
        });
    }    

    initExpressMiddleWare() {        
        app.use(morgan('dev'));        
        app.use(cors({
            origin:"http://localhost:8080",
            optionsSuccessStatus: 200
        }));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        process.on('uncaughtException', (err) => {
            if (err) console.log(err, err.stack);
        });
    }

    initCustomMiddleware() {
        if (process.platform === "win32") {
            require("readline").createInterface({
                input: process.stdin,
                output: process.stdout
            }).on("SIGINT", () => {
                console.log('SIGINT: Closing MongoDB connection');
                database.close();
            });
        }

        process.on('SIGINT', () => {
            console.log('SIGINT: Closing MongoDB connection');
            database.close();
        });
    }   

    initRoutes() {
        router.load(app, './controllers');

        // redirect all others to the index (HTML5 history)
        app.all('/*', (req, res) => {
            res.status(404).json("Route Not Found");            
        });
    }

}

var server = new Server();