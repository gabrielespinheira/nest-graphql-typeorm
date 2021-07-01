## Nest commands

# create new project
npm i -g @nestjs/cli
nest new nest-example

# add TypeORM
yarn add @nestjs/typeorm typeorm mysql2

# add GraphQL
npm i @nestjs/graphql graphql-tools graphql apollo-server-express

# create module for user
nest g module user

# create service for user
nest g service user

# create resolver for user
nest g resolver user