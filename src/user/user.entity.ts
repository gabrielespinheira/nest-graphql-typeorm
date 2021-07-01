import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn() // typeorm
  @Field(() => ID) // graphql
  id: string

  @Column()
  name: string

  @Column()
  email: string
}
