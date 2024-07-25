import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findAll() {
    const messages = await readFile('messages.json', 'utf-8');
    return JSON.parse(messages);
  }

  async findOne(id: string) {
    const messages = await this.findAll();
    return messages[id];
  }

  async create(content: string) {
    const messages: any = await this.findAll();
    const id = Math.floor(Math.random() * 999);

    messages[id] = {
      id,
      content,
    };

    await writeFile('messages.json', JSON.stringify(messages, null, 2));
    return messages.id;
  }
}
