import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { GamesService } from './games.service';
import { CreateGameInput } from './dto/create-game.input';
import { UpdateGameInput } from './dto/update-game.input';
import { Game } from '@prisma/client';
import { ReviewsService } from '../reviews/reviews.service';
import { AuthorsService } from '../authors/authors.service';
import { title } from 'process';

@Resolver('Game')
export class GamesResolver {
  constructor(private gamesService: GamesService, private reviewsService: ReviewsService) {}

@Query()
  games() {
    return this.gamesService.games();
  }

  @Query()
   async game(@Args('id') id: number) {
    return await this.gamesService.game(id);
  }

  

  @Mutation()
  addGame(@Args('game') game: any) {
    return this.gamesService.addGame(game);
  }

  @Mutation()
  deleteGame(@Args('id')id : number, @Args('title')title : string) {
    return this.gamesService.deleteGame(id, title);
  }

  
  @Mutation()
  updateGame(@Args('id')id : number, @Args('edits') edits: any) {
    return this.gamesService.updateGame(id, edits);
  }


  // @ResolveField("reviews")
  @ResolveField()
  async reviews(@Parent() game: Game) {
    let { id } = game;
    return await this.reviewsService.findAll(id,true)
  }

   
  
}
