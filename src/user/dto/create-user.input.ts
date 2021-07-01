import { InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  name: string

  @IsEmail({}, { message: 'E-mail obrigatório' })
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  email: string
}
