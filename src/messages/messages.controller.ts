import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get() getAllMessages() {
        return 'Get all message response'
    }

    @Post() createMessage(@Body() body:MessageBodyReq) {
        console.log(body)
    }

    @Get('/:messageId') getMessageById(@Param('messageId') messageId:string) {
        console.log(messageId)
    }
}
