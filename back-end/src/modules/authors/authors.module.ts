import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReviewsService } from '../reviews/reviews.service';
import { ReviewsResolver } from '../reviews/reviews.resolver';
import { GamesService } from '../games/games.service';
import { GamesResolver } from '../games/games.resolver';


@Module({
  providers: [AuthorsService,AuthorsResolver,PrismaService, ReviewsService, ReviewsResolver, GamesService, GamesResolver]
})
export class AuthorsModule {}