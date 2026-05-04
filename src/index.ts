import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
    .then(async () => {
        // console.log("Inserting a new user into the database...")
        // const user = new User()
        // user.id = 1 // 有id时，修改数据
        // user.firstName = "weiyan - updated"
        // user.lastName = "chan"
        // user.age = 34
        // await AppDataSource.manager.save(user)

        // 批量插入
        await AppDataSource.manager.save(User, [
            { firstName: 'aaa', lastName: 'aaa', age: 34 },
            { firstName: 'bbb', lastName: 'bbb', age: 34 },
            { firstName: 'ccc', lastName: 'ccc', age: 34 },
        ])

        // 批量修改
        // await AppDataSource.manager.save(User, [
        //     { id: 1, firstName: "weiyan - updated", lastName: "chan", age: 34 },
        //     { id: 2, firstName: "aaa - updated", lastName: "aaa", age: 34 },
        //     { id: 3, firstName: "bbb - updated", lastName: "bbb", age: 34 },
        // ]);


        // 删除
        await AppDataSource.manager.delete(User, 1)
        // 批量删除
        await AppDataSource.manager.delete(User, [2, 3])


        // remove
        const user = new User();
        user.id = 4;
        await AppDataSource.manager.remove(User, user)


        // 查询
        const users = await AppDataSource.manager.find(User)
        console.log(users)

        // findBy
        const user2 = await AppDataSource.manager.findBy(User, { firstName: 'aaa' })
        console.log(user2)

        // findOneBy
        const user3 = await AppDataSource.manager.findOneBy(User, { firstName: 'bbb' })
        console.log(user3)

        // findAndCount
        const [users2, count] = await AppDataSource.manager.findAndCount(User)
        console.log(users2, count)

        // findByIds
        const users3 = await AppDataSource.manager.findByIds(User, [5, 6])
        console.log(users3)

        // findOneById
        const user4 = await AppDataSource.manager.findOneById(User, 5)
        console.log(user4)

        // findOne
        const user5 = await AppDataSource.manager.findOne(User, {
            select: { firstName: true, lastName: true },
            where: { firstName: 'ccc' },
            order: { id: 'DESC' },
        })
        console.log(user5)

        // findOneOrFail
        try {
            const user6 = await AppDataSource.manager.findOneOrFail(User, {
                where: { firstName: 'ddd' },
            })
            console.log(user6)
        } catch (error) {
            console.log('User not found')
        }

        // findOneByOrFail
        try {
            const user7 = await AppDataSource.manager.findOneByOrFail(User, { firstName: 'ccc' })
            console.log(user7)
        } catch (error) {
            console.log('User not found')
        }

        // query
        const rawData = await AppDataSource.manager.query('SELECT * FROM user')
        console.log(rawData)

        // query builder
        const users4 = await AppDataSource.manager.createQueryBuilder()
            .select('user')
            .from(User, 'user')
            .where('user.firstName = :firstName', { firstName: 'ccc' })
            .getMany()
        console.log(users4)

        // transaction
        await AppDataSource.manager.transaction(async transactionalEntityManager => {
            const user8 = new User();
            user8.firstName = 'ddd';
            user8.lastName = 'ddd';
            user8.age = 34;
            await transactionalEntityManager.save(user8);

            const user9 = new User();
            user9.firstName = 'eee';
            user9.lastName = 'eee';
            user9.age = 34;
            await transactionalEntityManager.save(user9);
        });
    })
    .catch((error) => console.log(error));
