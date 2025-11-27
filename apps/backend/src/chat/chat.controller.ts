
import { Body, Controller, Post, Res } from '@nestjs/common';
import { UIMessage } from 'ai';
import { Response } from 'express';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(
        private readonly chatService: ChatService,
    ) { }
    @Post()
    async chat(
        @Body() body: { messages: UIMessage[], model: string },
        @Res() res: Response
    ) {
        return await this.chatService.chat(body.messages, body.model, res)
    }
}
