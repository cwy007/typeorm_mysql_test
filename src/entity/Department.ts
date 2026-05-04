import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Employee } from "./Employee";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: '部门名称'
  })
  name: string;

  @OneToMany(() => Employee, employee => employee.department, {
    cascade: true,
  })
  employees: Employee[];
}
