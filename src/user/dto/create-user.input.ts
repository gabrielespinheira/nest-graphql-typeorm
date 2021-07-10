import { InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Nome é um campo obrigatório' })
  name: string

  @IsEmail({}, { message: 'Email com formato incorreto' })
  @IsNotEmpty({ message: 'Email é um campo obrigatório' })
  email: string

  @IsString()
  @IsNotEmpty({ message: 'Senha é um campo obrigatório' })
  password: string
}
