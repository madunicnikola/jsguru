## Create and Conect your MongoDB Cluster
```bash
# Mongo server instance
$ mongod

# cluster connection & creation
$ mongo
$ rs.initiate()
$ rs.add("cluster.example:PORT")

#cluster status verification
$ mongo
$ rs.status()
```

## Installation

```bash
$ npm install
```

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
