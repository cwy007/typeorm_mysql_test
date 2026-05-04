import { AppDataSource } from "./data-source"
import { Article } from "./entity/Article"
import { Department } from "./entity/Department"
import { Employee } from "./entity/Employee"
import { IdCard } from "./entity/IdCard"
import { Tag } from "./entity/Tag"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    // // create
    // const article1 = new Article()
    // article1.title = 'TypeORM'
    // article1.content = 'TypeORM 是一个 ORM 框架，支持多种数据库。'

    // const article2 = new Article()
    // article2.title = 'Node.js'
    // article2.content = 'Node.js 是一个 JavaScript 运行环境，基于 V8 引擎。'

    // const tag1 = new Tag()
    // tag1.name = '编程'

    // const tag2 = new Tag()
    // tag2.name = '数据库'

    // const tag3 = new Tag()
    // tag3.name = 'JavaScript'

    // article1.tags = [tag1, tag2]
    // article2.tags = [tag1, tag2, tag3]

    // await AppDataSource.manager.save(tag1)
    // await AppDataSource.manager.save(tag2)
    // await AppDataSource.manager.save(tag3)

    // await AppDataSource.manager.save(article1)
    // await AppDataSource.manager.save(article2)


    // read
    // const articles = await AppDataSource.manager.find(Article, { relations: ['tags'] })
    // console.log(articles)

    // read query builder
    // const articlesWithTag1 = await AppDataSource.manager
    //     .createQueryBuilder(Article, 'article')
    //     .leftJoinAndSelect('article.tags', 'tag')
    //     // .where('tag.name = :tagName', { tagName: '编程' })
    //     .getMany()
    // console.log(articlesWithTag1)

    // update
    // const articleToUpdate = await AppDataSource.manager.findOneBy(Article, { id: 1 })
    // if (articleToUpdate) {
    //     articleToUpdate.title = 'Updated Title'
    //     await AppDataSource.manager.save(articleToUpdate)
    // }

    // delete
    // const articleToDelete = await AppDataSource.manager.findOneBy(Article, { id: 2 })
    // if (articleToDelete) {
    //     await AppDataSource.manager.remove(articleToDelete)
    // }

    const tags = await AppDataSource.manager.find(Tag, { relations: ['articles'] })
    console.log(tags)


}).catch(error => console.log(error))
