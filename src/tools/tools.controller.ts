import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ToolsService } from './tools.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { Prisma } from '@prisma/client';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Post()
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolsService.createTool(createToolDto);
  }

  @Get()
  findAll(
    @Query('take') takeString: string,
    @Query('page') skipString: string,
    @Query('tecs') tag: string,
    @Query('title') title = '',
  ) {
    const take = isNaN(Number(takeString)) ? 10 : Number(takeString);
    const skip = isNaN(Number(skipString))
      ? undefined
      : (Number(skipString) - 1) * take;

    const hasSomeTagFilter: Prisma.ToolWhereInput = {
      tags: {
        hasSome: tag,
      },
    };
    const tagsFilter = tag ? hasSomeTagFilter : undefined;

    const containsTitleFilter: Prisma.ToolWhereInput = {
      title: { contains: title },
    };

    return this.toolsService.tools({
      skip,
      take,
      where: {
        AND: [tagsFilter, containsTitleFilter],
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toolsService.tool({ id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToolDto: UpdateToolDto) {
    return this.toolsService.updateTool({
      where: { id },
      data: { ...updateToolDto },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toolsService.deleteTool({ id });
  }
}
