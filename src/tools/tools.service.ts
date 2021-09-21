import { Injectable } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { Tool } from './entities/tool.entity';

@Injectable()
export class ToolsService {
  private tools: Tool[] = [];
  create(createToolDto: CreateToolDto): Tool {
    const tool = new Tool(createToolDto);
    this.tools.push(tool);
    return tool;
  }

  findAll(): Tool[] {
    return this.tools;
  }

  findOne(id: string): Tool {
    return this.tools.find((tool) => tool.id === id);
  }

  update(id: string, updateToolDto: UpdateToolDto): Tool {
    const tool = this.tools.find((tool) => tool.id === id);
    Object.assign(tool, updateToolDto);
    return tool;
  }

  remove(id: string) {
    this.tools = this.tools.filter((tool) => tool.id !== id);
    return true;
  }
}
