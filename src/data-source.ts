import "reflect-metadata"
import { DataSource } from "typeorm"
import { Aaa } from "./entity/Aaa"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root", // 请根据实际情况修改用户名和密码
    password: "Cwy17824", // 请根据实际情况修改用户名和密码
    database: "practice", // 请根据实际情况修改数据库名称
    synchronize: true,
    logging: true, // 启用查询日志以调试连接问题
    entities: [User, Aaa], // 请根据实际情况修改实体路径
    migrations: [], // 请根据实际情况修改迁移路径
    subscribers: [], // 请根据实际情况修改订阅者路径
    poolSize: 10, // 设置连接池大小
    connectorPackage: 'mysql2', // 使用 mysql2 连接器
    extra: {
        authPlugin: 'sha256_password', // 使用 sha256_password 插件进行身份验证
    }
})
