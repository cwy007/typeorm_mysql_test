# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

## npm start

```bash

➜  typeorm_mysql_test git:(main) ✗ npm start

> typeorm_mysql_test@0.0.1 start
> ts-node src/index.ts

Ignoring invalid configuration option passed to Connection: authPlugin. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection
query: SELECT VERSION() AS `version`
query: START TRANSACTION
query: SELECT DATABASE() AS `db_name`
query: SELECT `TABLE_SCHEMA`, `TABLE_NAME` FROM `INFORMATION_SCHEMA`.`TABLES` WHERE `TABLE_SCHEMA` = 'practice' AND `TABLE_NAME` = 'user'
query: SELECT * FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = 'practice' AND `TABLE_NAME` = 'typeorm_metadata'
query: CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `age` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB
query: COMMIT
Inserting a new user into the database...
query: START TRANSACTION
query: INSERT INTO `user`(`id`, `firstName`, `lastName`, `age`) VALUES (DEFAULT, ?, ?, ?) -- PARAMETERS: ["Timber","Saw",25]
query: COMMIT
Saved a new user with id: 1
Loading users from the database...
query: SELECT `User`.`id` AS `User_id`, `User`.`firstName` AS `User_firstName`, `User`.`lastName` AS `User_lastName`, `User`.`age` AS `User_age` FROM `user` `User`
Loaded users:  [ User { id: 1, firstName: 'Timber', lastName: 'Saw', age: 25 } ]
Here you can setup and run express / fastify / any other framework.

```
