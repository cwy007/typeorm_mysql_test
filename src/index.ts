import { AppDataSource } from "./data-source"
import { Department } from "./entity/Department"
import { Employee } from "./entity/Employee"
import { IdCard } from "./entity/IdCard"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    // // create
    // const department1 = new Department();
    // department1.name = '技术部';

    // const employee1 = new Employee()
    // employee1.name = '张三';

    // const employee2 = new Employee()
    // employee2.name = '李四';

    // const employee3 = new Employee()
    // employee3.name = '王五';

    // department1.employees = [employee1, employee2, employee3];

    // await AppDataSource.manager.save(Department, department1);
    // // await AppDataSource.manager.save(Employee, [employee1, employee2, employee3]);

    // // query
    // const department = await AppDataSource.manager.find(Department, {
    //     relations: {
    //         employees: true,
    //     }
    // })
    // console.log(department);
    // console.log(department.map(item => item.employees));

    // // query builder
    // const department = await AppDataSource.manager.createQueryBuilder(Department, 'department')
    //     .leftJoinAndSelect('department.employees', 'employee')
    //     .getMany();
    // console.log(department);
    // console.log(department.map(item => item.employees));

    // delete
    const department = await AppDataSource.manager.findOne(Department, {
        where: {
            id: 2,
        },
        relations: {
            employees: true,
        }
    })
    console.log(department);
    await AppDataSource.manager.remove(Employee, department!.employees);
    await AppDataSource.manager.remove(Department, department!);

}).catch(error => console.log(error))
