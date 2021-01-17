import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './routes'
import errorHandler from './errors/handler'


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads',express.static(path.join(__dirname,'..','uploads')))
app.use(errorHandler);


app.listen(3333);

//route = set

//Resource = user

//Methods HTTP = GET, POST, PUT, DELETE

// Parameters 

//Get = Search information
//Post = Creating information
//PUT= Editing information
//DELETE= Deleting information

//query params: https://localhost/users?search=roberto
//Route params: https://localhost/users/1 (identify resource)
//Body : https://localhost/users


// Native Driver, Query Builder, ORM