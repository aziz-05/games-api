import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthorsModule } from './modules/authors/authors.module';
import { PrismaService } from './prisma/prisma.service';
import { GamesModule } from './modules/games/games.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { UsersModule } from './modules/users/users.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class'
      }
    }),
    AuthorsModule,
    GamesModule,
    ReviewsModule,
    UsersModule
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
