import { Injectable } from "@nestjs/common";
import MessagesRepository from "./messages.repository";

@Injectable()
export default class MessagesService {
    constructor(private _messagesRepo: MessagesRepository) {

    }
    fetchAll() {
        return this._messagesRepo.fetchAll()
    }
    findOne(id:string) {
        return this._messagesRepo.findOne(id)
    }
    createMessage(message:string) {
        return this._messagesRepo.createMessage(message)
    }
}