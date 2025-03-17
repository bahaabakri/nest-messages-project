import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export default class MessagesRepository {
    constructor() {}
    async fetchAll() {
        const messagesStr = await readFile('messages.json', 'utf8')
        console.log(messagesStr)
        return JSON.parse(messagesStr)
    }
    async findOne(id:string) {
        const messages = await this.fetchAll()
        return messages[id]
    }
    async createMessage(message:string) {
        const id = Math.ceil(Math.random() * 1000);
        const messageObj = {id, message}
        const messages = await this.fetchAll()
        messages[id] = messageObj
        await writeFile('messages.json', JSON.stringify(messages))
    }
}