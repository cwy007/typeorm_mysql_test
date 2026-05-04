import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Department } from "./Department";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: '员工姓名'
  })
  name: string;

  @JoinColumn({
    name: 'department_id',
    referencedColumnName: 'id',
  })
  @ManyToOne(() => Department, {
    // cascade: true,
  })
  department: Department;
}
