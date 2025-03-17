import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreateMessageDto from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {

    @Get() getAllMessages() {
        return 'Get all message response'
    }

    @Post() createMessage(@Body() body:CreateMessageDto) {
        console.log(body)
    }

    @Get('/:messageId') getMessageById(@Param('messageId') messageId:string) {
        console.log(messageId)
    }
}
