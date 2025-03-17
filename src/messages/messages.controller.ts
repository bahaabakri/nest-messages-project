import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import CreateMessageDto from './dtos/create-message.dto';
import MessagesService from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(private _messagesService:MessagesService) {

    }
    @Get() getAllMessages() {
        return this._messagesService.fetchAll()
    }

    @Post() createMessage(@Body() body:CreateMessageDto) {
        return this._messagesService.createMessage(body.message)
    }

    @Get('/:messageId') async getMessageById(@Param('messageId') messageId:string) {
        const message = await this._messagesService.findOne(messageId)
        if (!message) {
            throw new NotFoundException('Unable to find message with this id')
        }
        return message
    }
}
