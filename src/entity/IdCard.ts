import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
  name: 'id_card'
})
export class IdCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: '身份证号码'
  })
  cardName: string;
}
