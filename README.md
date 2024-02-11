# DOCUMENTATION & GUIDE FOR THE JSGURU API
Created by Nikola Madunić, licensed by MIT

## (OPTIONAL) Create and Connect your MongoDB Cluster
```bash
# Mongo server instance
$ mongod

# Cluster connection & creation
$ mongo
$ rs.initiate()
$ rs.add("cluster.example:PORT")

# Cluster status verification
$ mongo
$ rs.status()
```

## Clone this repository
```bash
$ git clone https://github.com/madunicnikola/jsguru.git
```

## Installation
```bash
$ npm install
```

## Add your dotenv file (!VERY IMPORTANT!)
```bash
$ npm install dotenv
```
- Inside your .env file add:
```MONGO_URI="mongodb://localhost/nestjs"```
```JTW_SECRET```
```JWT_EXPIRE=3d```

## Running the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## View documentation in Swagger
```
http://localhost:3000/api/
```

# API testing in Postman

## User registration
![image](https://github.com/madunicnikola/jsguru/assets/104438853/4113cd74-894e-42ad-87f4-bb6ac05c53cb)

## User login with jwt token
![image](https://github.com/madunicnikola/jsguru/assets/104438853/5724e677-4797-41cc-8753-c05ee78d3449)

## Unauthorized access GET products without token
![image](https://github.com/madunicnikola/jsguru/assets/104438853/2f3cf8c6-c09a-4135-a2fb-63ba14c6abb5)

## Authorized POST access to products
![image](https://github.com/madunicnikola/jsguru/assets/104438853/74cfee0c-f273-4e28-a681-f767ec70e239)

## Authorized GET product by ID 
![image](https://github.com/madunicnikola/jsguru/assets/104438853/f1a5d72c-b04f-4069-ad55-d0c990b5e97a)

## Authorized DELETE product by ID
- After deleting a product by ID attempt to GET it for this message to display
![image](https://github.com/madunicnikola/jsguru/assets/104438853/54dd7434-7488-4609-b7b9-706eef172e40)

