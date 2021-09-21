import { CreateToolDto } from '../dto/create-tool.dto';

export class Tool {
  id: string;
  title: string;
  link: string;
  description: string;
  tags: string[];
  created_at: Date;
  updated_at: Date;

  constructor({ title, link, description, tags }: CreateToolDto) {
    this.id = (Math.random() * 10000).toFixed(0);
    this.title = title;
    this.link = link;
    this.description = description;
    this.tags = tags;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}
