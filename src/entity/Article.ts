import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
    comment: '文章标题',
  })
  title: string;

  @Column({
    type: 'text',
    comment: '文章内容',
  })
  content: string;
}
