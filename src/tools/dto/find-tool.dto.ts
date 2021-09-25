import { Prisma } from '@prisma/client';

export type FindToolParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.ToolWhereUniqueInput;
  where?: Prisma.ToolWhereInput;
  orderBy?: Prisma.ToolOrderByWithRelationInput;
};
