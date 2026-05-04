import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
    comment: '标签名称',
  })
  name: string;
}
