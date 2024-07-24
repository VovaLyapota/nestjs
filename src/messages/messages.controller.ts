import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'list of messages';
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
    return 'create new message ' + `${body.message}`;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string, @Headers() headers: any) {
    console.log(id);
    console.log(headers);
    return `get message by id ${id}`;
  }
}
