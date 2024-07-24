import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const storePath = path.join(__dirname, '../', '../', 'messages.json');

export class MessagesRepository {
  async findAll() {
    const messages = await readFile(storePath, 'utf-8');
    return JSON.parse(messages);
  }

  async findOne(id: string) {
    const messages = await this.findAll();
    return messages[id];
  }

  async create(content: string) {
    const messages: any = await this.findAll();
    const id = Math.floor(Math.random() * 999);

    messages.id = {
      id,
      content,
    };

    await writeFile(storePath, JSON.stringify(messages, null, 2));
    return messages.id;
  }
}
