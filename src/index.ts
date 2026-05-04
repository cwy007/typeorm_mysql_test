import { AppDataSource } from "./data-source"
import { IdCard } from "./entity/IdCard"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "weiyan"
    // user.lastName = "chan"
    // user.age = 34

    // const idCard = new IdCard()
    // idCard.cardName = '1234567890'
    // idCard.user = user

    // // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)
    // await AppDataSource.manager.save(idCard)
    // console.log("Saved a new id card with id: " + idCard.id)

    // const idCards = await AppDataSource.manager.find(IdCard, {
    //     relations: {
    //         user: true,
    //     }
    // })
    // console.log("All id cards from the database: ", idCards)

    // const idCards = await AppDataSource.manager.getRepository(IdCard)
    //     .createQueryBuilder('id_card')
    //     .leftJoinAndSelect('id_card.user', 'user')
    //     .getMany()

    // console.log("All id cards from the database: ", idCards)

    // const idCards = await AppDataSource.manager.createQueryBuilder(IdCard, 'id_card')
    //     .leftJoinAndSelect('id_card.user', 'user')
    //     .getMany()

    // console.log("All id cards from the database: ", idCards)

    // // update
    // const user = new User()
    // user.id = 1
    // user.firstName = 'weiyan-update'
    // user.lastName = 'chan'
    // user.age = 35

    // const idCard = new IdCard()
    // idCard.id = 1
    // idCard.cardName = '1234567890-update'
    // idCard.user = user

    // await AppDataSource.manager.save(idCard)
    // console.log("Updated a id card with id: " + idCard.id)

    // delete
    // const user = new User()
    // user.id = 1

    // const idCard = new IdCard()
    // idCard.id = 1
    // idCard.cardName = '1234567890-update'
    // idCard.user = user

    // await AppDataSource.manager.remove(idCard)
    // console.log("Deleted a id card with id: " + idCard.id)

    // const user = new User()
    // user.id = 2
    // await AppDataSource.manager.delete(User, user)
    // console.log("Deleted a user with id: " + user.id)

    const user = await AppDataSource.manager.find(User, {
        relations: {
            idCard: true,
        }
    })
    console.log("All users from the database: ", user)

}).catch(error => console.log(error))
