import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesResolver } from './games.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReviewsService } from '../reviews/reviews.service';
import { ReviewsResolver } from '../reviews/reviews.resolver';
import { AuthorsService } from '../authors/authors.service';
import { AuthorsResolver } from '../authors/authors.resolver';

@Module({
  providers: [GamesResolver, GamesService, PrismaService, ReviewsService, ReviewsResolver, AuthorsService, AuthorsResolver],
})
export class GamesModule {}
