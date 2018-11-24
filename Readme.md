# Videly 
## A NodeJs Example
This project is only for beginner to understand Express, MongoDB and Fawn.
Here you can get help in creating and designing MongoDB database using NodeJs. 

**MongoDB on Mac**: To install mongodb on Mac follow this link: [Install on Mac](https://treehouse.github.io/installation-guides/mac/mongo-mac.html).

**MongoDB on Windows**: To install MongoDB on Windows follow this link: [Install on Windows](https://treehouse.github.io/installation-guides/windows/mongo-windows.html).

## What is Fawn? 
Fawn is library to store data in different tables with one request. For example: 
I'm going to insert a value A in table Movies and same time I wanna update a table Customers with Value B. If 1st table value is inserted and that time 2nd table were not updated with any means, then the value inserted in table one will be reverted. **Fawn is actually a promise to store data**. 
For more detail follow this link: [Fawn](https://github.com/e-oj/Fawn).

## Lodash
A JavaScript library to get request body objects in nicer way and pass to the object to store, for more [Click here](https://lodash.com). 

## Joi Password Complexity
Creates a Joi object that validates password complexity. [Joi Password Complexity](https://www.npmjs.com/package/joi-password-complexity).

## BCrypt
This library is just to handle passwords from simple shape to encrypted one.
Lib to help you hash passwords. [node.bcrypt.js](https://www.npmjs.com/package/bcrypt).

```
$npm i bcrypt

const bcrypt = require('bcrypt');
const validPassword = await bcrypt.compare(req.body.password, user.password);
if (!validPassword) 
    return res.status(400).send('Invalid email or password.');
```

## JSON Web Token (jwt)

A library to handle token which is being generated while signin process etc. [Click here for details](https://jwt.io). 
```
npm i jsonwebtoken
const token = jwt.sign({ _id: user._id, name: user.name }, config.get('jwtPrivateKey'));
```
## Config
- $ npm i config
- Step1: create a folder and named as config
- create 2 json files to store/get environment variables like: 

1. default.json
```
{
    "jwtPrivateKey": ""
}
```
2. custom-environment-variables
```
{
    "jwtPrivateKey": "videly_jwtPrivateKey"
}
```
- Run command to store values like: export videly_jwtPrivateKey=AnyStringHere
- To retrive result in application as: 
```
const config = require('config');
config.get('jwtPrivateKey')
```

## *Helping Node JS Commands*
- npm init --yes
- npm i (install any package like: npm i mongoose)
- npm un (un-install any package like: npm un mongoose)
- 

## *Helping git commands for github*

```
git init 
git add README.md 
git commit -m "first commit" 
git remote add origin https://github.com/mateenumt027/videly.git 
git push -u origin master 
```