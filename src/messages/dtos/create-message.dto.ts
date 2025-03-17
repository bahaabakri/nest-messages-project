import { IsString } from "class-validator"
export default class CreateMessageDto {
    @IsString()
    message: string
}