import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
export class CreateUserDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly userName: string;
    @IsEmail()
    @IsNotEmpty()
    readonly email: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    readonly password: number;
    // @IsString()
    // @MaxLength(30)
    // @IsNotEmpty()
    // readonly gender: string;
    // @IsNumber()
    // @IsNotEmpty()
    // readonly marks: number;
}