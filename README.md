# Awesome Project Build with TypeORM

`npx typeorm@0.3.17 init --name typeorm_mysql_test --database mysql`

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

[typeorm](https://www.npmjs.com/package/typeorm)

## 同步新增的 entity 到database

```bash

npm run typeorm schema:sync -- -d src/data-source.ts

```

## npx typeorm --help

```bash

➜  typeorm_mysql_test git:(typeorm-relation-mapping) ✗ npx typeorm --help
Usage: typeorm <command> [options]

Commands:
  typeorm schema:sync                Synchronizes your entities with database
                                     schema. It runs schema update queries on
                                     all connections you have. To run update
                                     queries on a concrete connection use -c
                                     option.
  typeorm schema:log                 Shows sql to be executed by schema:sync
                                     command. It shows sql log only for your
                                     default dataSource. To run update queries
                                     on a concrete connection use -c option.
  typeorm schema:drop                Drops all tables in the database on your
                                     default dataSource. To drop table of a
                                     concrete connection's database use -c
                                     option.
  typeorm query [query]              Executes given SQL query on a default
                                     dataSource. Specify connection name to run
                                     query on a specific dataSource.
  typeorm entity:create <path>       Generates a new entity.
  typeorm subscriber:create <path>   Generates a new subscriber.
  typeorm migration:create <path>    Creates a new migration file.
  typeorm migration:generate <path>  Generates a new migration file with sql
                                     needs to be executed to update schema.
  typeorm migration:run              Runs all pending migrations.
  typeorm migration:show             Show all migrations and whether they have
                                     been run or not
  typeorm migration:revert           Reverts last executed migration.
  typeorm version                    Prints TypeORM version this project uses.
  typeorm cache:clear                Clears all data stored in query runner
                                     cache.
  typeorm init                       Generates initial TypeORM project
                                     structure. If name specified then creates
                                     files inside directory called as name. If
                                     its not specified then creates files inside
                                     current directory.

Options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number

```
