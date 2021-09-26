import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';

describe('ToolsController', () => {
  let controller: ToolsController;
  let toolsService: ToolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToolsController],
      providers: [ToolsService, PrismaService],
    }).compile();

    controller = module.get<ToolsController>(ToolsController);
    toolsService = await module.resolve<ToolsService>(ToolsService);
  });

  it('should be able to create a tool', async () => {
    const toolDto: CreateToolDto = {
      description: 'description',
      link: 'https://...',
      title: 'test',
      tags: ['jest', 'nestjs', 'prisma'],
    };

    const { id } = await controller.create(toolDto);
    const result = await toolsService.tool({ id });
    expect(result).toMatchObject({
      ...toolDto,
    });
  });
});
