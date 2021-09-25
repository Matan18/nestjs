import { Injectable } from '@nestjs/common';
import { Prisma, Tool } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { FindToolParams } from './dto/find-tool.dto';

@Injectable()
export class ToolsService {
  constructor(private prisma: PrismaService) {}

  async tools(params: FindToolParams): Promise<Tool[]> {
    return this.prisma.tool.findMany(params);
  }

  async createTool(data: Prisma.ToolCreateInput): Promise<Tool> {
    return this.prisma.tool.create({
      data,
    });
  }

  async tool(where: Prisma.ToolWhereUniqueInput) {
    return this.prisma.tool.findUnique({
      where,
    });
  }

  async updateTool(params: {
    where: Prisma.ToolWhereUniqueInput;
    data: Prisma.ToolUpdateInput;
  }): Promise<Tool> {
    return this.prisma.tool.update(params);
  }

  async deleteTool(where: Prisma.ToolWhereUniqueInput): Promise<Tool> {
    return this.prisma.tool.delete({
      where,
    });
  }
}
