import { AppDataSource } from "./data-source"
import { Department } from "./entity/Department"
import { Employee } from "./entity/Employee"
import { IdCard } from "./entity/IdCard"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

}).catch(error => console.log(error))
