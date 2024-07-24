import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'list of messages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return 'create new message ' + `${body.content}`;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string, @Headers() headers: any) {
    console.log(id);
    console.log(headers);
    return `get message by id ${id}`;
  }
}
