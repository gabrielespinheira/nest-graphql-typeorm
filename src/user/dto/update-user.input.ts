import { InputType } from '@nestjs/graphql'
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator'

@InputType()
export class UpdateUserInput {
  @IsString()
  @IsOptional()
  @IsUUID()
  id?: string

  @IsString()
  @IsNotEmpty({ message: 'Nome é um campo obrigatório' })
  @IsOptional()
  name?: string

  @IsEmail({}, { message: 'Email com formato incorreto' })
  @IsNotEmpty({ message: 'Email é um campo obrigatório' })
  @IsOptional()
  email?: string

  @IsString()
  @IsNotEmpty({ message: 'Senha é um campo obrigatório' })
  @IsOptional()
  password?: string
}
