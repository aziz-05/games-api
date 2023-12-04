import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsResolver } from './reviews.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { GamesService } from '../games/games.service';
import { AuthorsService } from '../authors/authors.service';
import { GamesResolver } from '../games/games.resolver';
import { AuthorsResolver } from '../authors/authors.resolver';

@Module({
  providers: [ReviewsResolver, ReviewsService, PrismaService, GamesService, AuthorsService, GamesResolver, AuthorsResolver],
})
export class ReviewsModule {}
